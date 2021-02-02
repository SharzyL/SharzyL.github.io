---
title: LaTeX Writing Workflow
tags: [latex]
---
之前的文章中介绍了 LaTeX 的工具链的相关内容。在这一节中，我将根据我当前微小的经验，记录一下我目前使用 LaTeX 写出一篇完整的论文所需要的工具和工作流。

## Bibliography

参考文献是论文中重要的一环，但是如果手动输入参考文献的话，无论是编写的复杂度（手动输入非常麻烦，而且 Reference 的不同信息的字体可能不一样，需要不停切换），还是维护的复杂度（尤其是对于带序号的参考文献，加一个参考文献需要改一堆），都无疑是灾难性的。而在这一点上，LaTeX 做的比较到位，它将收集文献（创建 .bib 文件）、使用文献（`\cite`命令）、排版文献（`\bibliographystyle`命令，.bst 文件）的过程完全解耦，达到高度自动化的效果。

基本的参考文献使用在之前的文章中已经介绍过了。当然这个过程还不够自动化，尤其是 .bib 文件的创建和维护上，手动填写表项显然时比较浪费时间的事情。此外，如何定制化参考文献的样式以及引用的格式也是一个重要的问题。由于目前主要使用的是 BibTeX 工具链，因此介绍的时候以 BibTeX 为主。BibLaTeX 是另一个给 LaTeX 提供的参考文献工具，它相比 BibTeX 而言更加现代化，如果以后有时间的话会写一下它。

市面上有若干成熟的参考文献管理工具，出于免费和开放的角度我目前使用的是 Zotero。这里简要介绍一下我目前摸索出来的 Zotero 的用法。

首先介绍一下 Zotero 的基本模型。Zotero 的基本对象是 item，一个 item 可以有若干种类型，包括 Journal Article, Book, Presentation, Bill, Webpage 等等。根据 item 的不同，它会记载多种 metadata。例如，Journal Article 就包含有 Title, Author, Abstract, Publication, Volume, Issue, DOI 等多个 metadata。除此之外，还可以给每个 Item 添加 tags 和 related items。

每个 Item 中可以下属一些 attachement，例如 pdf 文件，网页，Notes 之类的。这些 attachment 可以直接通过拖动来进行添加。例如，将一个 pdf 文件拖到一个 Journal Article Item 下，这个文件就会自动成为这个 Item 的 attachment。对于 Notes，这是 Zotero 内部所提供的功能。可以通过 Zotero 自带的富文本编辑器进行添加。这个功能目前我还不太常用，尚不太了解。

而关于如何管理 Items，Zotero 提供了两个主要层级：Library 和 Collection。Library 默认只有一个 My Library，这个是指本地的 library。可以将 Library 利用 Zotero 账号进行同步，或者在线协作。免费 Zotero 账号有 200 MB 的空间可以进行同步，可以通过付费解锁更多（不过是买断制的，比较良心）。Collection 是管理 Items 的主要层级，它支持无限层级细分（创建 Subcollection, Subsubcollection 等）。

<img src="https://i.loli.net/2020/01/09/OZsj9VtRaClgrpD.png" alt="image.png" style="max-width:15em;" />

**添加 Item**：Zotero 提供了若干种方式添加 Item，下面列出比较常用的几类：

1. 浏览器插件：主流浏览器均有支持，可以直接将网页添加为 Item，对于部分学术出版物的网页，Zotero 可以识别这个 Item 的部分 metadata 并将其添加到 Item 的 metadata 中。值得注意的是，这样添加的 Item 会带有一个类型为 URL 的 attachment。当双击这个 Item 的时候，就会自动打开这个网页。
2. 拖拽文件：可以通过拖拽文件到 Zotero 中直接添加一个不属于任何 Item 的 attachment。对于一些 attachment，例如 pdf 文件，可以自动识别出这个 attachment 的类型、metadata，当可以做到这一点时，Zotero 会创建一个相应的 Item，并自动把这个文件作为 attachment 添加到 Item 中。顺带一提，attachment 文件会被复制到 Zotero 的一个内部目录中，并且将它重命名为一个比较规整的名字。这是我最常用的一种方式，因为它的识别率还是比较高的。同时这样创建的 Item 非常方便，双击就可以打开对应的 pdf 文件。
3. 手动添加：手动创建一个 Item，然后手动填写 metadata 表项，手动添加 attachment，一切都在你的掌控之中。
4. 从 metadata 添加：Zotero 支持输入 DOI, ISBN, PMDI, Arxiv ID 来自动创建相应的 Item，不过 attachment 还是需要自己添加。
5. 从剪切板添加：File > Import from clipboard. 这个我一般用来从文献网站提供的 bibtex 文本来创建 Item。

**导出 Item**：为了让这些 Item 能够被转化为方便我们使用的 .bib 文件，Zotero 提供了相应的功能。对于任意一个 Collection（包括 Subcollection），Zotero 支持将这个 Collection 导出成各种各样的格式。当然，对于我们来说，BibTeX 是最需要关注的一个格式）。我们将这个导出之后，会得到一个文件夹，里面包含我们想要的 .bib 文件。

但是如果要持续写作的话，这个显得还不够方便：每次添加一个新的 Item 的时候，都必须重新导出一次。这无疑是非常繁琐的。好在 Zotero 提供了丰富的插件功能，而 Better BibTeX 就是一个专门为 LaTeX 设计的插件，它的安装详见[官网](https://retorque.re/zotero-better-bibtex)。只需要在导出 Collection 的时候选择 “keep updated” 这个选项，就可以当每次对 Collection 进行修改时，自动更新对应的 .bib 文件。

![image.png](https://i.loli.net/2020/01/09/1UXgw7iSuELyeKB.png)

当创建好 .bib 文件后，只需要在 .tex 文件中使用 \cite 或相关命令就可以进行引用了。参考文献的输出一般有很多种格式，无论是 bibtex 还是 biblatex 都提供了一些预设的格式，也可以使用对应的语法自己写新的格式，这些内容超出了本文的范畴，这里就不介绍了。

## Writing

目前主流的写 LaTeX 的工具大概有如下几类

1. IDE：例如 TeXStudio, TeXWorks, WinEdt 等。这类 IDE 由于是针对 LaTeX 写作，一般都非常方便和一键化。缺点是这些 IDE 一般都是个人开发，UI / 扩展性 / 更新频度 一般都不太理想。
2. Online service：目前已经有了一些基于浏览器的 web 服务，可以提供在线的 LaTeX 编写 / 编译服务。Overleaf 是目前最主流的 LaTeX online service。它另外一个主要的 feature 在于可以多人协作，也就是类似于目前的在线文档的模式，每个人控制一个光标进行编辑，免费账号支持最多两人同时编辑，付费可以解锁更多。它的体验还是比较好的，编译速度也比本地的要快一些。
3. Editor + Extension：主流的编辑器一般都支持用户开发插件，通过为 LaTeX 编写的插件，用户可以方便地在编辑器内编写 / 编译 LaTeX，同时还能享受到编辑器的其它插件的便利。由于我常用的编辑器是 VSCode，而 VSCode 含有一个比较成熟的 LaTeX 插件 `LaTeX Workshop`，因此这里以介绍 VSCode + LaTeX Workshop 为主。

VSCode + LaTeX workshop 的安装过程就不赘述了。有一定门槛的是 LaTeX workshop 的配置。关于LaTeX Workshop 的功能和文档可见这个 [GitHub repo](https://github.com/James-Yu/LaTeX-Workshop/)。下面提供一下我关于 LaTeX workshop 的配置项：

```json
"latex-workshop.latex.tools": [
    {
        "name": "latexmk",
        "command": "latexmk",
        "args": [
            "-synctex=1",
            "-interaction=nonstopmode",
            "-file-line-error",
            "-shell-escape",
            "%DOCFILE%",
            "-xelatex",
        ]
    },
    {
        "name": "xelatex",
        "command": "xelatex",
        "args": [
            "-synctex=1",
            "-interaction=nonstopmode",
            "-file-line-error",
            "-shell-escape",
            "%DOCFILE%",
        ]
    },
    {
        "name": "pdflatex",
        "command": "pdflatex",
        "args": [
            "-synctex=1",
            "-interaction=nonstopmode",
            "-file-line-error",
            "%DOCFILE%"
        ]
    },
    {
        "name": "bibtex",
        "command": "bibtex",
        "args": [
            "%DOCFILE%"
        ]
    },
    {
        "name": "biber",
        "command": "biber",
        "args": [
            "%DOCFILE%"
        ]
    }
],
"latex-workshop.latex.recipes": [
    {
        "name": "latexmk",
        "tools": [
            "latexmk"
        ]
    },
    {
        "name": "xelatex + bibtex + 2*xelatex",
        "tools": [
            "xelatex",
            "bibtex",
            "xelatex",
            "xelatex"
        ]
    },
    {
        "name": "xelatex + biber + 2*xelatex",
        "tools": [
            "xelatex",
            "biber",
            "xelatex",
            "xelatex"
        ]
    }
],
"latex-workshop.latex.clean.fileTypes": [
    "*.aux",
    "*.bbl",
    "*.blg",
    "*.idx",
    "*.ind",
    "*.lof",
    "*.lot",
    "*.out",
    "*.toc",
    "*.acn",
    "*.acr",
    "*.alg",
    "*.glg",
    "*.glo",
    "*.gls",
    "*.ist",
    "*.fls",
    "*.log",
    "*.fdb_latexmk",
    "*.gz",
    "*.xdv",
    "_minted*"
],
"latex-workshop.view.pdf.viewer": "external",

"latex-workshop.view.pdf.external.viewer.command": "<your-path>/SumatraPDF.exe",
"latex-workshop.view.pdf.external.viewer.args": [
    "-forward-search",
    "%TEX%",
    "%LINE%",
    "%PDF%"
],
"latex-workshop.view.pdf.external.synctex.command": "<your-path>/SumatraPDF.exe",
"latex-workshop.view.pdf.external.synctex.args": [
    "-forward-search",
    "%TEX%",
    "%LINE%",
    "-reuse-instance",
    "-inverse-search",
    "code -r -g \"%f:%l\"",
    "%PDF%",
],
"latex-workshop.view.pdf.internal.synctex.keybinding":"double-click",
```

为了应用这些配置项，`ctrl + P` 输入 `settings.json` 进入设置界面，将上面的 json 代码复制进去。由于这是一部分的配置项，所以需要把它们放在一个大括号里面才能生效。此外，上述代码中的`"<your-path>/SumatraPDF.exe"`需要自行修改成 Sumatra 阅读器的路径。

进行完上面的配置之后，打开 VSCode 侧边栏的 TeX 栏，就可以看到这样的一些选项了：

<img src="https://i.loli.net/2020/01/09/mDIPWjiz34ZlgQE.png" alt="image.png" style="max-width:20em;" />

如果了解了上一篇文章中提到的 LaTeX 工具链的相关内容的话， 上面配置文件的 `"latex-workshop.latex.tools"`和`latex-workshop.latex.recipes`部分应该比较容易理解。这里解释几个命令行参数的含义，其它的命令行参数可以自行参看相关文档。

1. `-synctex=1`：这个命令表示生成 synctex 文件。这种文件的扩展名为 `.synctex.gz`，它的作用在于创建一个 pdf 文件和 tex 文件之间的对应关系。这样的话就可以在 pdf 文件和 tex 文件之间进行同步的穿梭了。使用方法下述。
2. `-shell-escape`：表示处理转义字符的方式。这个命令行参数主要是在使用 minted 这个代码高亮宏包的时候用到，由于在处理其它语言代码的时候，会违背普通 tex 的转义规则，因此这个参数在使用 minted 宏包的时候是必须的。

完成上面这些配置之后，只需要点 `Recipe: latexmk`，就可以使用 latexmk 来编译当前的 .tex 文档了，当文档发生变化时，它会自动重新编译。某些情况下，我们可能需要手动控制编译，这个时候可以使用另外的两个 recipe。

需要浏览生成的 pdf 文件时，可以在 `View LaTeX PDF` 中打开对应的阅读器。虽然市面上有许多 PDF 阅读器，但是对于 LaTeX 编写而言， VSCode 内置的 VSCode tab 和开源的 Sumatra 依然是最好用的两个。Sumatra 作为开源的 PDF 阅读器，它的许多功能都是针对程序员或 LaTeX 写作者设计的。例如，它的 H, J, K, L 快捷键功能显然是从 vim 一流继承下来的，此外，它提供许多命令行参数，提供文本式的配置编辑。

LaTeX Workshop 的一个重要功能就是在 .pdf 文件和 .tex 文件之间的双向同步跳转，也就是说，我们可以在浏览 pdf 文件时，快速跳转到 .tex 文件中的对应位置，反之同理。这个功能对于 VSCode Tab 是默认生效的，使用方法详见文档。对于 Sumatra 来说，为了启用这个功能，需要打开 Sumatra 的设置，将 “设置反向搜索命令行” 设置为 `"<your-path>\Code.exe" -r -g "%f:%l"`，其中 `<your-path>` 是 VSCode 的路径。设置完之后，双向同步功能应该就可以正常使用了：在使用 VSCode 编辑 .tex 文件的时候，使用快捷键 `ctrl + alt + J` 之后就可以在阅读器中高亮相应的段落。而在使用阅读器阅读 PDF 文件时，双击某处即可自动跳转到 .tex 文件的对应段落。

LaTeX Workshop 提供了许多其它的便捷功能和快捷键，这些可以在 [GitHub wiki](https://github.com/James-Yu/LaTeX-Workshop/wiki) 中看到。这里就不重复了。

为了使用 lint （语法检查）功能，需要先安装 chktex （大部分发行版应该都会提供，如果没有提供的话可以用对应的包管理器安装，在命令行输入 chktex 可以检查是否安装完成）。然后在 `settings.json` 中输入 `"latex-workshop.chktex.enabled": true,`即可启用。chktex 会给你的代码提供一些贴心的建议（笑）。

> 未完待续，之后将会介绍一些宏包的使用，一些本地化的相关内容