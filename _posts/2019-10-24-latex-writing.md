---
title: LaTeX 学术写作最佳实践尝试
tags: [CS, LaTeX]
---
$\TeX$作为Kunth为了 TAOCP 所开发的排版工具（typesetting system），它专注于生成高质量的学术排版效果，秉持着高度的 Do not repeat yourself 原则，是我日常作业/文章写作的最佳选择之一。$\LaTeX$ 的输出主要是 pdf 文件，这意味着它能够在各种设备上保持相同的显示效果（这和注重自适应式布局的 web 型格式，例如 markdown, html 不同。对于没有较强排版需求的情况下，例如笔记，发言稿等等，我会使用 Typora 来写 Markdown。

由于我之前对于$LaTeX$的使用限于普通的写题目，解答等等，因此在进行比较规范的学术写作时遇到了一些困难，并且摸索出了一些最佳实践，在此备忘如下。

# 开发环境

我目前（在windows上）使用的是MikTeX作为发行版，使用 XeLaTeX 进行编译（XeLaTeX 对于自定义字体和非拉丁语的支持比较好）。MikTeX的一个特点是它可以使用精简版，精简版几乎没有第三方的 package 和 document，因此体积很小，在需要 package 时可以自动下载（但是会弹出一个 Windows 的警告窗口，比较烦人）。

由于 VSCode 的方便性和高度的可扩展性，我选择使用 VSCode 作为我的 $\LaTeX$ 编辑器。LaTeX Workshop 是 VSCode 的一个 $\LaTeX$ 插件，能够对 $\LaTeX$ 提供良好的支持。

在介绍 LaTeX Workshop 文件的编写之前，我们先来了解一下 $\LaTeX$ 工具链。

# LaTeX 工具链
$\TeX$ 有众多组件，这些组件虽然看起来相似，但是实际使用过程中会发现很多不同，因此认识和辨别它们是很重要的。下面介绍一些常用的组件和相关的术语。

## TeX
$\TeX$ 是 Kunth 最开始所发明的工具，wiki 称它是一个 typesetting system，它非常接近底层，提供了一些基础的命令可以使用，以宏为主要的编程工具。下面是一个 $\TeX$ 的示例

```latex
The quadratic formula is $-b \pm \sqrt{b^2 - 4ac} \over 2a$
\bye % \bye means the end of compilation unit
```

将上面的文件保存为 `example.tex` 后用 `tex example.tex` 编译之后就可以得到一个名为`example.dvi`的二进制文件。用MikTeX自带的Yap可以打开它。可以用一些工具来来将dvi转换为pdf。

$\TeX$ 提供的命令非常底层，例如它没有我们常用的 `\begin{document} \end{document}`或`\documentclass{article}` 的语句。比起写作，它更加主要的目的是提供排版方面的工具。例如它的很重要的工作之一就是提供自动化的断行，连字等操作。这使得它具有很高的使用门槛，为了更加方便我们进行写作，需要对 $\TeX$ 进行封装，形成更高级的命令。

一般把用纯粹的 $\TeX$ 写的文件称为 Plain TeX。

$\TeX$ 的版本以圆周率的前若干位小数命名，例如我当前的 $\TeX$ 版本为 $3.14159265$。

## LaTeX
$\LaTeX$ 是 $\TeX$ 的一个封装。Leslie Lamport 于 1983 年发明了它。wiki 称它是一个 document preparation system。相比起朴素的$\TeX$，$\LaTeX$有更多更高级的命令，更加贴近于我们的日常生活（雾），下面是一个简单的示例

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

保存成 `example.tex` 后用 `latex example.tex` 编译后依然会得到一个 `example.dvi` 的文件。如果我们加上编译选项，用 `latex --output-format=pdf example` 编译后，就可以得到 `example.pdf` 文件了。

在上面的文件中，`\documentclass{article}` 是一个核心的语句，它意味着引入了 $\LaTeX$ 中一个叫做 article 的格式文件（format file, .cls），所有命令，例如 `section`，`\maketitle`等等，都是由这样的格式文件提供的。我们也可以把 article 这个格式文件扩展，写出自己的格式文件。从某这意义上这和 web 方向所提倡的格式于内容分离有相似之处。

但是 $\LaTeX$ 还是存在一些问题，例如它对于参考文献，交叉引用，多语言的支持不够好，为了解决这些问题，一些 $\LaTeX$ 的变种产生了。

$\LaTeX2\epsilon$ 是目前的 $\LaTeX$ 版本，它取代了 1994 年的 $\LaTeX~2.09$。$\LaTeX3$作为$\LaTeX2\epsilon$的继任者，早在上世纪九十年代就已经开始开发了，它的主要目的之一在于给$\LaTeX$提供更高的灵活性，更好的简洁性，更加现代化的接口和界面，但是要开发出一个能够革新当前的$\LaTeX$的系统面临着巨大的技术困难，同时由于$\LaTeX$的开发完全依赖于社区，没有商业支持，因此 $\LaTeX 3$ 目前仍然处于不成熟的状态，距离它的最终完成仍然遥遥无期。这里是$\LaTeX3$的 [github repo](https://github.com/latex3/latex3)。

## pdfTeX
pdfTeX 是一个对于 `tex` 指令的直接封装，它的主要目的在于生成 pdf 文件而不是 dvi 文件。pdflatex 与之类似，是对于 `latex` 命令的封装。

## XeTeX
XeTeX 是对于 $TeX$ 的改进。

## bibTeX

## Latexmk
