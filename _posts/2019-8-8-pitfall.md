---
title: 关于博客搭建过程的一些总结和吐槽
tags: [杂谈]
layout: article
---

前些日子看到Github pages的一些介绍（虽然之前就知道了），再加上想复习一下CSS，于是便<del>脑子一热</del>萌发了使用Github pages搭建blog的想法，写了几天代码<del>CSS</del>，算是把基本功能都完成了. 这里总结一些搭建过程中遇到的问题. 

# Jekyll
[Jekyll](https://jekyllrb.com)用于将html模板（使用Liquid模板引擎）和markdown（使用kramdowm方言）解析成浏览器能够直接显示的html文件，是一个用ruby编写的博客生成工具，被Github pages原生地支持. 在使用gem安装之后，使用`jekyll build`能够完成一次当前目录的构建，使用`jekyll serve`能够使jekyll在检测到文件更新时自动重新构建，并且在`localhost:3000`运行一个本地HTTP服务器，便于调试. 

Jekyll由于使用ruby编写，配置文件一般通过yaml文件提供，并且在需要当成模板渲染地文件开头书写yaml文件头. 

Jekyll的官方文档很友好，搜索功能也比较高效，有国人维护的一个中文翻译网站，不过遗憾的是中文翻译网站不支持搜索功能. 

# Math
平时我都是用$\LaTeX$进行数学相关的文字编辑/排版工作，好在目前已经有现成的轮子可以用来在html中渲染数学公式了. 其中比较成熟的工具包括mathjax和katex. 这两个均以js库的形式导入到html中，具体的调用方法略有差异. 

katex的调用方法有点复杂，它暴露的主要接口是一个将给定给定字符串渲染成公式然后塞到dom元素里面的函数，官方提供了一个可以直接渲染整个文档的扩展，但是由于不明原因没有效果，也没有报错. 日后再研究一下吧. 

mathjax的渲染速度和代码体积都要落后于katex，但是它可以直接渲染整个文档. 默认行内和行间公式的定界符分别是`\( \)`和`\[ \]`，这和我平时写 $\LaTeX$的习惯不太一致，好在这个可以自行配置，具体的配置代码大致如下

```html
<script type="text/x-mathjax-config">
        MathJax.Hub.Config({
          tex2jax: {inlineMath: [['$','$']]}
        });
</script>
```

使用mathjax的时候遇到了若干个坑：

## mathjax的js文件的配置问题
我本来照看官网上的Quick Start引用了下述js文件

```html
<script src='https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML' async></script>
```

然而这个渲染出来的公式再布局上有比较严重的问题，例如行内分式的分子分母部分重叠，下标字号过大等等. 经过仔细研究<del>看隔壁的源码</del>，发现应该引用下述文件

```html
<script src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML" async></script>
```
在更换之后，排版质量显著改善. 

## 行间公式的空行问题
在$\LaTeX$中，只要使用`\[ \]`开启行间公式时，它会自动新启一行排版公式（废话）. 但是在写markdown时这一点会出现一些问题. mathjax会寻找块级元素，当检测到包含行间公式的开头/结尾字段时将其当作行间公式渲染. 但是如果在markdown里面不换行的话，
kramdown将markdown转换为html文件时会把你输入的行间公式当成一个行内元素（因为markdown会忽略非空行的换行），所以这样无法正常渲染行间公式. 要想让它正常渲染，必须在行间公式的上下空行，使得它被翻译为html的`<p>`标签. 

## 反斜杠的转义问题
这是一个奇妙的问题. 在markdown中反斜杠会被转义，准确来说，当一个反斜杠后面接着一个标点符号时，这个反斜杠会被当作转义符号，它本身会被忽略，而它后面接的标点符号不会被当作markdown的特殊字符. 

但是这个规则也有一些奇妙的例外，例如，在代码模式下（即被反引号包裹的东西里面）这个转义会被忽略，也就是说反斜杠不会被当作转义字符而被隐藏（顺便一提，这一点使得在行内的公式里面打出反引号并不容易）. 此外，**行间**公式环境下这种转义也会出现. 

但是最坑的是这件事情在行内公式中不会出现，也就是说，行内公式中的反斜杠仍被当作转义字符，这种不一致性让人非常不爽. 
例如，在行内若想输出一堆花括号，你需要写`${}$`，但是在行间的话你需要写的是`$$\{\}$$`（不要忘了上下空行）. 


# Code
Jekyll 内置了[Rouge](http://rouge.jneen.net/)的语法高亮功能，可以将markdown中的行间代码进行语法高亮，但是值得注意的是它只负责将markdown转换为html然后把代码中不同的token赋予不同的class，具体的着色方案需要额外提供css文件完成. 

好在已经有人制作了这样的css供我们直接使用，例如这个[repo](https://github.com/jwarby/jekyll-pygments-themes). 但是是这里面的css文件里面有的不仅提供了`color`这个css属性，而且还提供了`background-color`这个属性，也就是说它可能会改变部分文字（比如说字符串）的背景颜色，这不一定总是我们想要的，可能需要手动删除，或者自己覆盖`background-color`属性. 

# Domain
虽然Github pages默认给出的`sharzyl.github.io`域名还算不错，但是考虑到它还提供了自定义域名服务，所以我还是希望有一个自己的域名. 在域名商处购买一个域名之后，添加两条dns记录

类型| 名称| 值
:-:|:-:|:-:
A|@|185.199.108.153
A|@|185.199.109.153

*注：似乎只添加一条也可以. 这里演示的是使用裸域名的情形，如果要使用子域名，应该配置CNAME类型.*

然后在Github repo的Settings界面的Custom domain项里面填写自己的域名. 完成之后，在浏览器上填写自定义的域名，应该就能跳转到Github pages里面了. 

注意到这时候使用的是http协议，Github pages良心之处在于它可以免费地自动为你的域名签发ssl证书，然后网站就可以使用https连接了. 具体来说，需要在Settings界面勾选Enforce HTTPS. 

![Snipaste_2019-08-10_17-09-09](https://i.loli.net/2019/08/10/7nKa45hJZixroLG.png)

不过这个勾选项并不是马上就可以勾选的，需要等待Github签发ssl证书，一般需要等一两天，如果一两天之后仍然无法勾选，可以考虑把Custom Domain项删除然后重新填写. 

# Markdown
```  
               |\
 ______________| \
|                 \
| to be continued /
|______________  /
               |/
```