---
title: 多边形的三角形剖分结构及其应用
tags: math paper algorithm
---

本文为我的写作与沟通课程的短文终稿。主要介绍了关于三角形剖分的一些问题和应用。

**由于可能的版权问题，此文保留一切权利**

# Abstract
三角剖分问题在理论研究和实际问题中都有大量应用，因此也产生了众多相关的研究。本文介绍了其中的一些重要的问题和结果。

本文主要选取了三方面的内容。第一方面是三角形剖分的应用，包括在理论上的应用，例如组合几何中的美术馆问题，
以及更加实际的应用，例如 3D 图形建模和渲染，揭示了它们和三角形剖分问题的重要联系。
第二方面是关于三角形剖分的算法，简要介绍了平面三角形剖分算法从$O(n^2)$算法到$O(n)$算法的发展过程，
以及一些优化曲面三角形剖分的一些方法。 第三方面是关于三角形剖分在高维情形，特别是三维情形的推广，
说明了多面体的四面体剖分的不可行性和判定方法的困难性。

# Table of Content
- 引言
- 三角形剖分的应用
  - 美术馆问题
  - 图形渲染问题
- 三角形剖分的算法
  - 平面上的三角形算法
  - 三角形剖分的优化
- 讲三角形推广到四面体的困难性
- 结论
  

# Document
[pdf file](/assets/doc/art-gallary.pdf)

# References
[1] Peter Giblin. “Computational geometry: algorithms and applications (2nd edn.)” In: The Mathematical Gazette
85.502 (2001), pp. 175–176.

[2] Steve Fisk. “A short proof of Chvátal’s Watchman Theorem”. en. In: Journal of Combinatorial Theory, Series
B 24.3 (June 1978), p. 374.

[3] V Chvátal. “A combinatorial theorem in plane geometry”. en. In: Journal of Combinatorial Theory, Series B
18.1 (Feb. 1975), pp. 39–41.

[4] Joseph O’Rourke. Art gallery theorems and algorithms. en. The International series of monographs on computer
science 3. New York: Oxford University Press, 1987.

[5] Donald Hearn, M Pauline Baker, et al. Computer graphics with OpenGL. Upper Saddle River, NJ: Pearson
Prentice Hall, 2004.

[6] Michael R. Garey et al. “Triangulating a simple polygon”. en. In: Information Processing Letters 7.4 (June
1978), pp. 175–179.

[7] Robert E. Tarjan and Christopher J. Van Wyk. “An O(nloglogn)-Time Algorithm for Triangulating a Simple
Polygon”. en. In: SIAM J. Comput. 17.1 (Feb. 1988), pp. 143–178.

[8] Kenneth L. Clarkson, Robert E. Tarjan, and Christopher J. Van Wyk. “A fast las vegas algorithm for triangu-
lating a simple polygon”. en. In: Discrete Comput Geom 4.5 (Oct. 1989), pp. 423–432.

[9] Bernard Chazelle. “Triangulating a simple polygon in linear time”. en. In: Discrete Comput Geom 6.3 (Sept.
1991), pp. 485–524.

[10] William J Schroeder, Jonathan A Zarge, William E Lorensen, et al. “Decimation of triangle meshes.” In:
Siggraph. Vol. 92. 1992, pp. 65–70.

[11] Boris Delaunay et al. “Sur la sphere vide”. In: Izv. Akad. Nauk SSSR, Otdelenie Matematicheskii i Estestvennyka
Nauk 7.793-800 (1934), pp. 1–2.

[12] Der-Tsai Lee and Bruce J Schachter. “Two algorithms for constructing a Delaunay triangulation”. In: Interna-
tional Journal of Computer & Information Sciences 9.3 (1980), pp. 219–242.

[13] Jim Ruppert and Raimund Seidel. “On the difficulty of triangulating three-dimensional Nonconvex Polyhedra”.
en. In: Discrete Comput Geom 7.3 (Mar. 1992), pp. 227–253.

[14] F. Bagemihl. “On Indecomposable Polyhedra”. en. In: The American Mathematical Monthly 55.7 (Aug. 1948),
pp. 411–413.

[15] Cristopher Moore and Stephan Mertens. The nature of computation. OCLC: ocn180753706. Oxford [England]
; New York: Oxford University Press, 2011.

# PS
这篇文章本身没有花太多时间（大概一整天吧），但是各种微调花了挺久。比如说折腾 LaTeX 的格式，特别是参考文献，图片 caption，脚注之类的，
使得它表现上和老师给的 word 模板一样，（实际上要好看不少）。在画图上也花了一些功夫。图中一些矢量图是用 Adobe Illustrator 画的
（后来发现可以用 tikz 画出更符合我想法的图，不过这都是写完文章之后的事情了，日后可以写一下关于 tikz 的一些笔记）。关于推广到四面体那一个
section，我画了两张三维图，一张立方体美术馆的图是用一个很简单方便的 3D 工具 MagicalVoxel 做的。另外一张是 Schönhardt polyhedron
的三维渲染图（见下）是用一个全能的 3D 建模/动画软件 Blender 做的，本来是想放到文章里面去的，但是由于图片的背景怎么也调不成纯白的，遂作罢。

![3d_schon](https://i.loli.net/2019/11/17/XWqSrvPaziMeGuc.jpg)