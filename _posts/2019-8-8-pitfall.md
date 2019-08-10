---
title: 关于博客搭建过程的一些总结和吐槽
tags: [杂谈]
layout: article
---

前些日子看到Github pages的一些介绍（虽然之前就知道了），再加上想复习一下CSS，于是便<del>脑子一热</del>萌发了使用Github pages搭建blog的想法，写了几天代码<del>CSS</del>，算是把基本功能都完成了. 这里总结一些搭建过程中遇到的问题. 

# Jekyll
Jekyll用于将html模板（使用Liquid模板引擎）和markdown（使用kramdowm方言）解析成浏览器能够直接显示的html文件，是一个用ruby编写的博客生成工具，被Github pages原生地支持. 在使用gem安装之后，使用`jekyll build`能够完成一次当前目录的构建，使用`jekyll serve`能够使jekyll在检测到文件更新时自动重新构建，并且在`localhost:3000`运行一个本地html服务器，便于调试. 

Jekyll由于使用ruby编写，配置文件一般通过yaml文件提供，并且在需要当成模板渲染地文件开头书写yaml文件头. 

Jekyll的官方文档很友好，搜索功能也比较高效，有国人维护的一个中文翻译网站，不过遗憾的是中文翻译网站不支持搜索功能. 

# Math & Code
to be continued
