---
layout: post
title: Experieces
---


一些学习 CS 的个人经验

## 语言

- C++
    - 几乎是必学的，高性能，坑比较多，静态强类型
    - 开发环境：
        1. Visual Studio 2019 Community（功能强大，体积庞大，适合做大型项目和桌面应用开发）
        2. Clion：有一定上手门槛（需购买许可证或使用盗版，需要学习cmake的使用，需要手动安装编译器）但是上手之后比较好用
        3. VSCode：也需要手动安装编译器（推荐clang），使用比较灵活，轻量化
        4. 不推荐使用上古IDE，如dev c++，VC等
    - 入门：`C++程序设计教程第二版 - 钱能`
    - 巩固：`C++ Primer`
    - 进阶：`Effective C++`
    - 上面的书里面讲的都很少涉及现代C++（C++ 11之后）的内容，可以看`Effective Modern C++`了解一下
- python
    - 入门比较简单，代码简洁，库很多，可以做各种各样的工作，性能较差，数据分析 / 收集、机器学习常用语言，动态强类型
    - 环境：Python 3 + PyCharm Community
    - 入门：[廖雪峰Python教程](https://www.liaoxuefeng.com/wiki/1016959663602400)（后面讲异步，多线程的部分有点难，可以跳过），[Python Cookbook](https://python3-cookbook.readthedocs.io/zh_CN/latest/preface.html)（比较全面的教程）
    - 进阶：`Fluent Python`
    - [Python官方文档](https://docs.python.org/3/)比较友好，有一部分已经有汉化
- JavaScript (js)
    - 它和Java一点关系也没有
    - web（网页）标准语言，web编程（即编写网页）必备，几乎是脚本语言中性能最好的，动态弱类型（坑稍微有点多）
    - 环境：Chrome 或 FireFox浏览器 + 编辑器（再次推荐VSCode），或者考虑盗版WebStorm（能买正版更好，功能比vscode强不少）
    - 入门：[廖雪峰js教程](https://www.liaoxuefeng.com/wiki/1022910821149312)
    - 进阶：`JavaScript权威指南`， [ECMAScript 6 入门](http://es6.ruanyifeng.com/)（主要介绍js的新版本 ECMAScript6 的新特性）
    - 写网页还要会写HTML和CSS，它们都可以在 [w3school](http://www.w3school.com.cn/)学。[MDN](https://developer.mozilla.org/zh-CN) 是个很好的参考网站
    - 有兴趣可以学学TypeScript（强类型版本的js，近年比较流行）或CoffeeScript（让js的语法变好看一些）
    - JavaScript本来只能运行在浏览器上的，但是node.js使得它能够在浏览器外运行，并且由于它的异步特性成为了服务器编程的很好的语言。使用Electron甚至可以用它来开发桌面应用，基于Web的特性很大程度地缩短了开发时间，同时也便于跨平台（但是性能和程序体积不太好）
- Haskell
    - 非必修，纯函数式编程语言，虽然用的人不多，但是学起来相当有意思和有挑战性
    - 环境：可以直接安装 Haskell Platform
    - 资料：[WikiBooks](https://en.wikibooks.org/wiki/Haskell)，虽然后面有一部分还没写完，但前面的内容已经很多了
    - 纯函数式可以写出非常优雅的代码（下文是一个用筛法产生所有素数的代码）

        primes = filterPrime [2..]
          where filterPrime (p:xs) = p : filterPrime [x | x <- xs, x `mod` p /= 0]

- Java
    - 语法严谨~~啰嗦~~，性能较好，适用于开发大型项目，也用于开发服务器程序，同时也是Android开发的标准语言
    - 开发环境：IntelliJ Idea Community，极其强大
- Go
    - 非常现代化的语言，设计理念比较先进，性能较好，常用于开发服务器程序
    - 开发环境：Vscode / Goland二选一

## 算法

- 入门：`Algorithm, Roberts Sedgewick & Kevin Wayne`
- 进阶：`算法导论`
- 可以去[洛谷](https://www.luogu.org/)去学习/刷题，洛谷上的资源还挺多的，可以看看模板题的题解，洛谷日报。也可以把从题解上找到的关键词用搜索引擎搜索一下，可以看到一些人写的博客有算法/数据结构的详解（OI风格的代码如果不熟悉算法的话还是挺难读的，为了节约时间总是取很短的变量名，用宏不用const，为了节约 I/O时间还有一些奇技淫巧…)
- 算法（尤指OI方面的）的东西挺杂的，而且需要很多练习，对于没有OI基础的还是不太友好的
- [这个repo](https://github.com/enkerewpo/OI-Public-Library)里面有一些电子书籍可供阅读

## 工具链

- 编辑器：VSCode，扩展多，使用方便
- IDE：注意 JetBrain 旗下的 IDE （包括CLion, PyCharm, GoLand, IntelliJ Idea, WebStrom 等等）均有学生优惠，可凭教育邮箱获取
- 编辑器：Vim，Linux 标配编辑器，纯键盘操作，入门难，编辑效率高
- 版本管理：Git
    - 入门：依然是[廖雪峰教程](https://www.liaoxuefeng.com/wiki/896043488029600)
    - 进阶/参考：[Pro Git 中文版](https://progit.bootcss.com/)
- 文档写作：Markdown
    - 极易学习，使用方便
    - 环境：VSCode + Markdown Preview Enhanced 插件，或者直接用 Typora
    - 格式转换：Pandoc
- 专业文档写作：LaTeX
    - 环境：VSCode + LaTex Workshop 插件 + MikTex，或者用 TexStudio, CTex之类的IDE
    - 资料：`LaTeX 2e 科技排版指南`

## 计算机科学的其它部分

- 网络
    - `Computer Networking：A Top-Down Approach`
    - `TCP/IP协议详解 - 卷一`
- 数据库
    - 喵？
- 操作系统
    - `Computer Systems: A Programmer's Perspective`（讲的比较全面，有些地方不太友好）
    - `Computer Systems: Three easy pieces`（着重讲了三个主要部分：虚拟化，并发和持久化，不是很系统，但是挺有好的，深入浅出，无中文版）
- 编译原理
    - 龙书虎书任选
- AI / ML
    - 可以参考[这个repo](https://github.com/apachecn/AiLearning)
- Linux
    - 基础： `鸟哥的Linux私房菜`（一股浓重的台湾腔，但讲的还不错）
    - 环境搭建方法：
        - 双系统：需要折腾，有一定风险，不太方便
        - 虚拟机：比较占内存，对配置有一定要求
        - wsl：非常方便，但是系统组件用不少删减，配合vscode的wsl插件使用效果极佳