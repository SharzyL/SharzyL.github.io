---
title: LaTeX Programming Done Wrong
tags: [latex]
---

我们最开始使用 LaTeX，也许是开始于某些奇奇怪怪的教程。例如，从

````
\documentclass{article}
\begin{document}
	Hello world!
\end{document}
````

开始，这一切看起来似乎都很正常。但是美好的幻觉很快就被打破了：在网上抄下来的代码稍微改一下就会报出不知所云的错误信息；想要做出一些不太常规的排版效果，但是对于如何实现没有任何头绪；试图写一个宏来减少自己的重复代码，但是宏展开出来的效果却总是让人困惑。

本文旨在提供一个纲要：当我们无法理解 LaTeX 的行为的时候，我们应该求诸于何物？

## Where is the documentation?

当我们无法理解一个程序的时候，别人可能会问：为什么不去看文档呢？很遗憾的是，大部分 LaTeX 教程并不会告诉我们文档应该去哪里看。

当我们使用 LaTeX 的宏包（package）的时候，大部分时候我们都可以在 [Ctan](https://ctan.org/) 上找到这个宏包，而 Ctan 的对应页面上就存放着宏包的文档。例如，amsmath 宏包的文档就可以在 https://ctan.org/pkg/amsmath 找到。和我们所熟悉的许多编程语言不同，绝大部分 LaTeX 宏包的文档都以 pdf 格式给出。因此我们能够从中感受到原汁原味的 TeX 气息。

当我们需要频繁查看宏包的文档的时候，离线查看文档能够大大提高效率。一些 LaTeX 发行版提供了离线查看文档的工具。例如，TeXLive 提供了命令行工具 `texdoc`，当宏包的文档下载到本地之后，可以通过这个命令快速定位某一个宏包对应的文档。关于 `texdoc` 如何安装，请咨询对应平台发行版的文档。例如，对于 ArchLinux 用户，[ArchWiki](https://wiki.archlinux.org/index.php/TeX_Live#Package_documentation) 提到，`texlive-most-doc` 这个 AUR 包提供了我们所需要的东西。

## What is LaTeX doing?

排版系统不太容易通过封装来掩盖其本身的复杂度，因此当我们试图用 LaTeX 来做一些更复杂的事情，而这个事情并没有宏包可以完美完成的时候，对于其内部工作原理的了解就变得很有必要。我们能够在一个 LaTeX 文档里能够使用的命令（或者说宏）基本可以分为五部分：TeX 的命令（这一部分经常被称为 plain TeX），LaTeX 的命令，编译器的命令，宏包的命令以及用户的命令。

TeX 是实际生成文档的工具，它提供了一些最基础的命令。它非常稳定，很少更新——Knuth 偶尔会修 TeX 的小 bug 并且发布新版本，在 TeXlive 的仓库里面可以看到它的[源码](https://tug.org/texlive/devsrc/Build/source/texk/web2c/tex.web)。而 LaTeX 在 TeX 基础上提供了一些对用户更加友好的命令集——它的开发还在活跃进行，在 [latex3/latex2e](latex3/latex2e) 和 [latex3/latex3](https://github.com/latex3/latex3) 这两个 GitHub 仓库可以看到它的源码。原始的 TeX 编译器，不一定能够满足我们的要求（例如它生成的现在几乎无人使用的 `.dvi` 文件，它也不支持现代字体格式），因此我们通常使用一些 `tex` 的扩展来编译我们的文档，例如 `pdftex`, `xetex`, `luatex`（以及它们对应的 `latex` 版本），这些编译器提供了一些它们特有的指令。

关于 TeX 是如何工作的，Knuth 所著的 The TeXbook 是唯一权威。TeX 的核心概念，category code, token stream, box, glue, horizontal / vertical mode, macro 等在书中得到了详细的解释，同时这本书也为所有 TeX 的原始命令提供了参考资料。除了 Knuth 的书，Victor Eijkhout 所著的 TeX by Topic 一书提供了不错的复习材料。

LaTeX 和 TeX 的「本质」区别在于，当 LaTeX 编译文档的时候，它会先读取一个文件（对于 Linux 上的 TeXLive，这个文件可能位于 <span style="line-break: anywhere">/usr/share/texmf-dist/tex/latex/base/latex.ltx</span>），这个文件包含了所有 LaTeX 特有宏的定义。关于这个文件，它的文档可以在 https://ctan.org/pkg/source2e 上找到。顺带一提，这个页面我找了很久才找到，因为几乎没有地方会提及它，但是它对于理解 LaTeX 又是极度重要的<del>，可见 LaTeX 生态的扭曲</del>。

关于 TeX 的扩展（称它们为 alternative TeX engine 似乎更合适），它们的文档同样可以在 Ctan 上找到，例如 [luatex](https://ctan.org/pkg/luatex)。现代 TeX 引擎通常以 `.pdf` 作为生成的目标，因此这些引擎能够使用的特性和 pdf 的标准息息相关。Adobe 的[文档](https://www.adobe.com/devnet/pdf/pdf_reference_archive.html)提供了 pdf 的标准。[PDF101](https://github.com/angea/PDF101) 这个仓库提供了教人如何手写 pdf 的教程。

如果用现代编程语言的角度审视 LaTeX，人们就会发现它是如此混乱：算数运算的 API、宏展开的顺序控制、指令的命名规范，都让人难以捉摸。LaTeX3 旨在提供一个更加现代化的 LaTeX 语言，它提供了一套更加规范、可预期的 API，让开发者能够在开发宏包时更加舒适。LaTeX3 的开发持续了很多年，时至今日，它已经趋于成熟。关于 LaTeX3 的介绍，可以参见项子越的[这篇博客](https://www.alanshawn.com/tech/2020/10/04/latex3-tutorial.html)。LaTeX3 的文档可以在 Ctan 页面 [l3kernel](https://ctan.org/pkg/l3kernel) 上找到。

在使用 LaTeX 的过程中，用户可能会积攒起自己的一套宏集和配置。比较好的管理方法是将这些宏集和配置包装成宏包或者文档类，而为了让编译器能够找到这些文件，我们需要把它们放在特定的目录里面。LaTeX 开发者们造了一个轮子，称为 Kpathsea，它可以在被称为 texmf 的目录下搜索宏包、文档集和字体文件。为了加速搜索，Kpathsea 会生成一个名为 `ls-R` 的数据库文件来储存 texmf 目录下文件的索引（从这个文件名不难猜出文件的内容，是的，你没有猜错）。当在 texmf 下的目录发生修改时，需要使用 `mktexlsr` 这个命令来更新索引。Kpathsea 的[文档](https://tug.org/texinfohtml/kpathsea.html)提供了关于这套系统的详细说明。

Knuth 推崇 literate programming （文学编程）原理。简而言之，literate programming 就是将代码和文档合并在同一个文件之中，可以通过特定的工具将代码和文档分离出来。例如前文提到的 TeX 的源码，就是 Knuth 用自己造的轮子——WEB 语言所写的，我们可以通过 `weave` 和 `tangle` 两个命令分别从中分离出 pascal 代码和 `.tex` 文档。这一传统也继承到了 LaTeX 以及 LaTeX 宏包上。LaTeX 本身的源代码，以及许多宏包的源代码都是以 `.dtx` 格式给出。`doctrip` 是 LaTeX 社区所创造的另外一个轮子，它能够更加精准灵活地控制代码如何分离，我们可以用它来将 `dtx` 中提取出单纯的代码（例如得到 `.sty` 宏包文件），同时生成排版精良的 `.pdf` 文档。在发行版当中，`docstrip` 一般是封装在 `latex` 命令当中。若要了解 `docstrip` 如何工作，可以参考 Ctan 上的 [doc](https://www.ctan.org/pkg/doc) 和 [docstrip](https://www.ctan.org/pkg/docstrip) 页面。

## But it keeps throwing errors!

很遗憾，LaTeX 本身的语言特性决定了它报出来的错误经常让人难以理解。LaTeX 也不像我们所熟悉的许多编程语言一样提供能够进行所谓「断点调试」的工具。不过幸运的是，我们还是有一些——虽然不多——能够调试 LaTeX 的手段。TeX 提供了一些指令，这些指令能够让 `tex` 在运行的时候向日志文件（即 `*.log`）文件中输出一些调试信息，这些指令包括 `\tracingmacros`, `\tracingstats`, `\tracingparagraphs`, `\tracingpages`, `\tracingoutput`, `\tracinglostchars`, `\tracingcommands`, `\tracingrestores`。关于这些指令的用法，可以在 The TeXbook 中找到。此外，如果你想得知某个宏（例如 `\foo`）的定义，你可以在文档中输入 `\the\foo`，然后你就可以在日志中看到 `\foo` 的定义了。

[ChkTeX](https://www.ctan.org/pkg/chktex) 是一个 LaTeX 的静态检查器，它能够有效检测出来一些常见的语法错误，以及提供一些风格上的建议，来提醒你修正一些排版问题，例如使用了不恰当的引号，使用了不建议使用的命令。但是由于 TeX 本身的灵活性，静态检查器很难提供更多的东西。

很多时候，我们会发现这些错误来自不同宏包之间的冲突。由于 LaTeX 并没有提供一个足够健壮的封装机制，这样的冲突并不罕见。遇到这种情况，你也许只能去翻看源码，然后找到宏包之间到底哪里出了问题。如果翻看源码的时候发现最近一次更新是 10 年前，但是代码里面还有 10 个 `TODO`，你也应当相信这是正常现象，并且捏着鼻子继续研究如何修改源码。手动修改源码并不是好文明，因为它会破坏包管理器的更新机制（如果作者某一天打算重新开始维护的话）。好在 TeX 支持我们用一些比较 meta-programming 的方法来在宏包的外部修改宏的定义。例如 [etoolbox](https://ctan.org/pkg/etoolbox) 提供了许多指令来修改一个宏的定义，包括在宏定义前面和后面插入代码，以及通过字符串搜索的方式来替换修改宏的定义等等。虽然很野蛮，但是许多时候还是挺有效的。

## Afterword

Knuth 在 1978 年开发了 TeX。那是个人电脑尚处于襁褓期的年代——例如，Apple II 在 1977 年才发布。当今和 1978 年相比，计算机的能力发生了翻天覆地的变化，但是近半个世纪过去了，TeX 仍然是学术文字排印的核心工具。相比之下 Knuth 另外造的一些轮子，例如说 WEB，以及字体格式 METAFONT，现在已经几乎无人使用了。虽然社区一直在努力让 TeX 相关的工具链更加现代化，但是其中浓厚的历史痕迹仍然是无法掩盖的。

幸运的是，我们因此拥有了一套足够自由、灵活、可编程的系统来完成精良的文字排印。不幸的是，我们会经常被它所折磨。

