---
title: 小数部分均匀分布的初等（大概）证明
layout: article
tags: [math]
---

$\\{n\alpha\\}$的均匀分布性是一个非常方便好用的命题，之前我一直只知道使用Wyle判据的证明方法，但是这一证明方法需要用到稍深入的分析学，包括Weierstrass定理。今天我正在思考另外一个和小数部分有关的命题，突然想到了一个均匀分布性的证明，于是用markdown记录下来了. 

# Theorem

$\alpha \in [0, 1] \cap \mathbb{R} \backslash \mathbb{Q}$，求证对于任何一个区间$I \in [0, 1]$，均有

$$
\lim_{n \to \infty }\frac{\#\{i \in \mathbb{Z} \mid 1 \leq i \leq n, \{i\alpha\} \in I\}}{n} = \mid I\mid
$$

# Proof

对任何一个实数$a$，记 $a^* = \\{a + n \mid n \in \mathbb{Z}\\}$ 

对任意一个$\mathbb{R}$上的区间$I$和正整数$n$，记$f(I, n) = \sum_{i = 0}^n \mid (n\alpha)^*\cap I\mid$ ，称$I$是好的，如果

$$
\lim_{n \to \infty}\frac{f(I, n)}{n} = \mid I\mid
$$

其中$\mid I\mid$表示$I$的长度. 则结论等价于证明任何一个区间都是好的. 

任取$u\in \mathbb{R}$，注意到

$$
\begin{align*}
[-1, 1]\ni &\{n\alpha\ - u\} - \{-u\} = \sum_{i = 1}^n(\{i\alpha - u\} - \{(i - 1)\alpha - u\})\\
= &n\alpha - \#\{i = 1, 2, \ldots, n\mid \{i\alpha - u\}<\alpha\}\\
= &n\alpha - f([u, u+\alpha], n)
\end{align*}
$$

取$n\to \infty$，得

$$
\lim_{n\to \infty}\frac{f([u, u + \alpha], n)}{n} = 1/\alpha
$$

这表明$[u, u + 1/\alpha]$是好的. 由于$u$是任取的，故任何一个长为$\alpha$的区间都是好的. 

注意到如下事实：

1. 如果有限个好区间不交，那么它们的并是好的

2. 如果一个好区间是另一个的子集，那么这两个区间的差也是好的. 

3. 长为整数的区间是好的. 

根据上面的第一点，所有长度为$\alpha$的倍数的区间都是好的，结合第二点和第三点，可以得到任何长度形如$n\alpha - k\ (n, k \in \mathbb{Z})$的区间都是好的，记$K = \\{n\alpha - k \mid n, k \in \mathbb{Z}\\}$，熟知$K$是稠密的. 

最后，对于任何一个区间$I$和正实数$\epsilon$，由上面的结论知存在两个区间$I_1, I_2$，使得$I_1 \subseteq I \subseteq I_2$，$\mid I_2 \backslash I\mid <\epsilon$，$\mid I\backslash I_1\mid < \epsilon$，且$I_1, I_2$是好的. 因此

$$
\limsup_{n \to \infty}\frac{f(I, n)}{n} \geq \limsup_{n \to \infty}\frac{f(I_1, n)}{n}
= \lim_{n \to \infty}\frac{f(I_1, n)}{n} = \mid I_1\mid > \mid I\mid - \epsilon
$$

由于$\epsilon$是任取的，故

$$\limsup_{n \to \infty}\frac{f(I, n)}{n} \geq \mid I\mid$$

同理

$$\liminf_{n \to \infty}\frac{f(I, n)}{n} \leq \mid I\mid$$

故$\lim\limits_{n \to \infty} \frac{f(I, n)}{n} = \mid I\mid$，即$I$是好的. 证毕. 

