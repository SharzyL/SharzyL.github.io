---
title: 了解 LaTeX Part.1
subtitle: LaTeX 工具链介绍
tags: [CS, LaTeX]
---

TeX作为Kunth为了 TAOCP 所开发的排版工具（typesetting system），它专注于生成高质量的学术排版效果，秉持着高度的 Do not repeat yourself 原则，是我日常作业/文章写作的最佳选择之一。LaTeX 的输出主要是 pdf 文件，这意味着它能够在各种设备上保持相同的显示效果；这和注重自适应式布局的 web 型格式，例如 markdown, html 不同。对于没有较强排版需求的情况下，例如笔记，发言稿等等，我会使用 Typora 来写 Markdown。在本文和后续的一些文章中，我将介绍 LaTeX 的一些内容，以及用它来编写文章，尤其是学术文章的实践。

由于 VSCode 的方便性和高度的可扩展性，我选择使用 VSCode 作为我的 LaTeX 编辑器。LaTeX Workshop 是 VSCode 的一个 LaTeX 插件，能够对 LaTeX 提供良好的支持。LaTeX Workshop 虽然比较自动化，但是编译环境仍然需要自己配置，而且它的配置文件仍然手动编写编写，为了编写这样的配置文件，了解 LaTeX 的工具链是非常重要的，本篇将介绍 LaTeX 的编译工具链中的各个组成部分。

# TeX
TeX 是 Kunth 最开始所发明的工具，wiki 称它是一个 typesetting system，它非常接近底层，提供了一些基础的命令可以使用，以宏为主要的编程工具。下面是一个 TeX 的示例

```latex
The quadratic formula is $-b \pm \sqrt{b^2 - 4ac} \over 2a$
\bye % \bye means the end of compilation unit
```

将上面的文件保存为 `example.tex` 后用 `tex example.tex` 编译之后就可以得到一个名为 `example.dvi` 的二进制文件。同时生成一个名为用`example.log` 的日志文件。dvi 是一种和 pdf 类似的文件，用来表示用于打印目的格式的文档，但是不像 pdf 一样具有一些便于阅读的特性，但是现在已经不常用了。MikTeX自带的Yap可以打开 dvi 文件。

TeX 提供的命令非常底层，例如它没有我们常用的 `\begin{document} \end{document}`或`\documentclass{article}` 的语句。比起写作，它更加主要的目的是提供排版方面的工具。例如它的很重要的工作之一就是提供自动化的断行，连字等操作。这使得它具有很高的使用门槛，为了更加方便我们进行写作，需要对 TeX 进行封装，形成更高级的命令。

一般把用纯粹的 TeX 写的文件称为 Plain TeX。

TeX 的版本以圆周率的前若干位小数命名，例如我当前的 TeX 版本为 $3.14159265$。

# LaTeX
LaTeX 是 TeX 的一个封装。Leslie Lamport 于 1983 年发明了它。wiki 称它是一个 document preparation system。相比起朴素的TeX，LaTeX有更多更高级的命令，更加贴近于我们的日常生活（雾），下面是一个简单的示例

```latex
\documentclass{article}
\usepackage{amsmath}
\title{example article}
\author{unknown}
\date{}

\begin{document}
    \maketitle
    Hello world
    \begin{align}
        E_0 &= mc^2 \\
        E &= \frac{mc^2}{\sqrt{1-\frac{v^2}{c^2}}}
    \end{align} 
\end{document}
```

保存成 `example.tex` 后用 `latex example.tex` 编译后依然会得到一个 `example.dvi` 的文件。如果我们加上编译选项，用 `latex --output-format=pdf example` 编译后，就可以得到 `example.pdf` 文件了。除了 pdf, log 以外还有 xdv 文件（这个文件可以看成是上文所说的 dvi 文件的加强）和 aux 文件，aux 文件主要是用来存储一些辅助信息，例如引用(\cite, \ref) 和标签(\lable)的信息，对于含有这样辅助信息的 tex 文档，编译第一次时会提示我们有未定义的引用，得到的输出文件中包含引用的位置会出现问好，为了得到完整的 dvi，需要再次运行 `latex example`，在第二次编译时 latex 会利用 .aux 文件里面的信息来获得完整的输出。

在上面的文件中，`\documentclass{article}` 是一个核心的语句，它意味着引入了 LaTeX 中一个叫做 article 的格式文件（format file, .cls），所有命令，例如 `section`，`\maketitle`等等，都是由这样的格式文件提供的。我们也可以把 article 这个格式文件扩展，写出自己的格式文件。从某这意义上这和 web 方向所提倡的格式于内容分离有相似之处。

但是 LaTeX 还是存在一些问题，例如它对于参考文献，交叉引用，多语言的支持不够好，为了解决这些问题，一些 LaTeX 的变种产生了。

$\LaTeX2\epsilon$ 是目前的 LaTeX 版本，它取代了 1994 年的 $\LaTeX~2.09$。$\LaTeX3$作为$\LaTeX2\epsilon$的继任者，早在上世纪九十年代就已经开始开发了，它的主要目的之一在于给LaTeX提供更高的灵活性，更好的简洁性，更加现代化的接口和界面，但是要开发出一个能够革新当前的LaTeX的系统面临着巨大的技术困难，同时由于LaTeX的开发完全依赖于社区，没有商业支持，因此 $\LaTeX 3$ 目前仍然处于不成熟的状态，距离它的最终完成仍然遥遥无期。这里是$\LaTeX3$的 [github repo](https://github.com/latex3/latex3)。

# pdfTeX
pdfTeX 是一个对于 `tex` 指令的直接封装，它的主要目的在于生成 pdf 文件而不是 dvi 文件。pdflatex 与之类似，是对于 `latex` 命令的封装。

# XeTeX
XeTeX 作为另一个 TeX 的扩展，它主要可以看作是对于 LaTeX 的增强。它相对于 LaTeX 最大的改进之处在于对多国语言和自定义字体的支持。下面是一个示例

```latex
\documentclass[12pt]{article}
\usepackage{fontspec} % fontspec is a package for customizing fonts, it is only available with xelatex
 
\setmainfont{Microsoft Yahei UI}
 
 \title{Sample font document}
 \author{Hubert Farnsworth}
 \date{this month, 2014}
 
\begin{document}
 
 \maketitle
 
 This an example of document compiled 
 with \textbf{xelatex} compiler. LuaLaTeX should 
 work fine also.

 可以看到，中文也是可以正常编译的
 
\end{document}
```

用 `xelatex example.tex` 编译后就能看到想看到的结果了。`LuaLaTeX` 是一个和 `XeLaTeX` 类似的项目，用 Lua 编写，不过相对少见一些。只要在的 `\setmainfont` 后输入一些包含中文的字体，中文就能够编译出来的。但是这个中文的支持并不完全，很多中文的细节问题没有完善的处理，例如标点距离压缩，空格控制等等，稍后会详细介绍这些问题及解决方法。

# bibTeX
学术写作的一个很重要的部分就是参考文献，在 LaTeX 中并没有直接的参考文献支持，bibtex 就是为了解决这个问题所用的工具。LaTeX 使用 .bib 文件来保存参考文献信息，下面是一个 .bib 文件的样例：（这里只含有一个条目，一般来说应该会有很多条目的）

```
@article{koji_midsummer_2001,
	address = {Tokyo},
	title = {Midsummer night obscenity},
	isbn = {114514-810-893},
	language = {jp},
	number = {24},
	publisher = {COAT CORPORATION},
	journal = {Babylon},
	author = {Koji Tadokoro},
	year = {2001},
}
```

把上面的文件保存为 `ref.bib` ，在同一个目录下我们再来创建一个 `example.tex` ：

```latex
\documentclass{article}
\begin{document}

    \cite{koji_midsummer_2001} is something good. 
    \bibliographystyle{acm}
    \bibliography{ref}
 
\end{document}
```

其中 \bibliographystyle{acm} 指的是一个参考文献的格式，它保存在一个 acm.bst 的文件里面，这个文件位于 MikTeX 的某个内部目录。

输入 `latex example.tex` 后按照惯例可以得到 aux, dvi, log 文件，但是输出的 dvi 文件里并没有输出参考文献。查看 .log 文件后可以发现有这样的警告：

```
LaTeX Warning: Citation `koji_midsummer_2001' on page 1 undefined on input line
 4.

No file example.bbl.
[1] (example.aux)

LaTeX Warning: There were undefined references.
```

为了得到最后的结果，我们输入 `bibtex example`，bibtex 的作用是分析 .aux 文件里面出现的 cite 信息，输出两个文件：`example.bbl, example.blg`，其中 .bbl 文件是综合 .aux 文件和 .bib 文件后得出的一个 tex 代码片段，用于插入到我们的 tex 文件中，它的示例如下：

```latex
\begin{thebibliography}{1}

\bibitem{koji_midsummer_2001}
{\sc Tadokoro, K.}
\newblock Midsummer night obscenity.
\newblock {\em Babylon}, 24 (2001).

\end{thebibliography}
```

.blg 文件保存 bibtex 的日志文件，用来 debug. 我们再次运行 `latex example.tex` ，这时候 latex 还是会提示我们存在未定义的引用，最后再运行一次 `latex example.tex` 就能够得到我们最终想要的结果了。

# Latexmk
可以看到，按照上面的步骤，要想编译出来一个合格的输出文件是一件很繁琐的事情，Latexmk 正是为了解决这些问题而诞生的。Latexmk 使用 perl 编写，它的用途就是整合上面的组件，完成一键式编译流程。在[这里](https://mg.readthedocs.io/latexmk.html)可以看到 Latexmk 的文档，这个文档还是相当友好的（相对于上面介绍的组件来说）。

由于上面的文档实在过于友好，这里就不逐一介绍它的用法了。我只会在后面介绍 LaTeX workshop 配置文件的时候简要提及一下各个选项的含义。

# LaTeX 发行版
上面的组件如果要逐一下载配置，必然是一件很麻烦的事情，为了能够快速搭建开发环境，有人将这些组件（以及众多的 LaTeX 宏包）整合起来发布，这样的东西就称为 LaTeX 发行版。常见的发行版包括 Windows 平台上的 MikTeX, TeXLive，MacOS 上的 MacTeX，以及 Linux 上的 TeXLive 等等。它们的安装比较简单，这里就不详述了。

下一篇中我们将介绍 LaTeX 在 VSCode 中的具体配置问题。希望不要鸽太久吧。