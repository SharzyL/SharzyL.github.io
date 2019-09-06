---
title: 一个猜想的证明
subtitle: 立方体图子图的最大度
tags: [math]
---

最近看到一篇[文章](https://www.quantamagazine.org/mathematician-solves-computer-science-conjecture-in-two-pages-20190725/)，讲述了一个几十余年历史的猜想近日被证明的事情。令人惊讶的是[论文](https://arxiv.org/abs/1907.00847)中的这个证明主题居然只有不到两页，并且只用到了基本的线性代数，遂记录之。

## Hypothesis
这个猜想可以是在研究 Bool 函数的“敏感性"时被提出来的，其内容可等价叙述如下：
> 设  $Q_n$ 表示  $n$  维立方体图（即顶点为立方体的顶点，两点连有一条无向边当且仅当其在立方体上相邻），求证对于这个图的任意一个包含  $2^{n-1} + 1$  个顶点的诱导子图，它的最大度数不小于 $\sqrt{n}$ .

## Sketch of proof

证明概述如下

### Step 1
称一个实对称矩阵 $M$ 是某个图 $G$ 的伪邻接矩阵，如果 $\lvert a_{ij}\rvert = 1$ 当且仅当 $G$ 中的第 $i$ 个顶点和第 $j$ 个相邻，且矩阵除此以外的项均为零. 归纳构造矩阵 $A_n$ ，使得

$$A_{1}=\left[\begin{array}{ll}{0} & {1} \\ {1} & {0}\end{array}\right] \quad A_{n}=\left[\begin{array}{cc}{A_{n-1}} & {I} \\ {I} & {-A_{n-1}}\end{array}\right]$$

归纳易证 $A_n$ 是 $Q_n$ 的伪邻接矩阵，且 $A_n$ 的特征向量中恰有 $2^{n - 1}$ 个为  $\sqrt{n}$ ， $2^{n - 1}$ 个是  $\sqrt{n}$ . 

### Step 2
证明一个图的最大度数不小于它的伪邻接矩阵的任何一个特征根. 

### Step 3
Cauchy interlace lemma：若 $A$ 是一个 $n$ 阶实对称矩阵， $B$ 是它的一个主子阵，
设 $\lambda_1 \geq \lambda_2 \geq \cdots \geq \lambda_n$ ， $\mu_1 \geq \mu_2 \geq \cdots \mu_m$ 分别是它们的全部特征根，则对于每个 $i\ (1 \leq i \leq m)$ ，均有

$$ \lambda_i \geq \mu_i \geq \lambda_{i + n - m} $$

### Step 4
考虑 $Q_n$ 的某个 $2^{n - 1} + 1$ 阶子图，它对应于 $A_n$ 的一个主子阵，由于 $A_n$ 的前 $2^{n - 1}$ 个特征根均为 $\sqrt{n}$ ，根据 Step 3 ，它的最大特征根是 $\sqrt{n}$ ，带入 Step 2 即可得到待证结论. 

## Details

### Step 1
事实上，归纳易证 $A_n^2 = nI_n$ ，故 $A_n$ 的特征根必为 $\pm \sqrt{n}$ ，再注意到 $A_n$ 的迹为 0，故 $A_m$ 必有一半的特征根为 $\sqrt{n}$ ，另一半为 $-\sqrt{n}$ .

### Step 2
设 $\lambda_1$ 是 $G$ 的伪邻接矩阵 $A$ 的一个特征值， $\vec{v}_1$ 是它对应的特征向量，则

$$
\left|\lambda_{1} v_{1}\right|=\left|(A \vec{v})_{1}\right|=\left|\sum_{j=1}^{m} A_{1, j} v_{j}\right|=\left|\sum_{j \sim 1} A_{1, j} v_{j}\right| \leqslant \sum_{j \sim 1}\left|A_{1, j}\right|\left|v_{1}\right| \leqslant \Delta(H)\left|v_{1}\right|
$$

### Step 3
事实只需证明下面这个特殊情形
> 若 $A$ 是一个 $n$ 阶实对称矩阵， $B$ 是它的一个 $n - 1$ 阶主子阵，设 $\lambda_1 \geq \lambda_2 \geq \cdots \geq \lambda_n$ ， $\mu_1 \geq \mu_2 \geq \cdots \mu_{m - 1}$ 分别是它们的全部特征根，则对于每个 $i\ (1 \leq i \leq m)$ ，均有
> 
> $$ \lambda_1 \geq \mu_1 \geq \lambda_2 \geq \mu_2 \geq \cdots \geq \mu_{n - 1} \geq \lambda_n $$ 

注意到这个引理
> 若 $f, g$ 分别是 $n, n-1$ 阶的实多项式， $\lambda_1 \geq \lambda_2 \geq \cdots \geq \lambda_n$ ， $\mu_1 \geq \mu_2 \geq \cdots \mu_{m - 1}$ 分别是它们的全部根，则
> 
> $$ \lambda_1 \geq \mu_1 \geq \lambda_2 \geq \mu_2 \geq \cdots \geq \mu_{n - 1} \geq \lambda_n $$ 
> 
> 当且仅当 对于任意实数 $\alpha$ ， $f + \alpha g$ 的根均为实根. 

引理的证明是简单的

不妨设 $B$ 由 $A$ 的前 $n - 1$ 行和列构成，即

$$
A=\left(\begin{array}{c|c}{B} & {c} \\ \hline c^{*} & {d}\end{array}\right)
$$

从而

$$
\left\lvert\begin{array}{c|c}
    {B - xI} & {c} \\ \hline 
    c^* & {d - x + \alpha}
\end{array}\right\rvert =
%
\left\lvert\begin{array}{c|c}
    {B - xI} & {c} \\ \hline 
    c^* & d - x 
\end{array}\right\rvert + 
%
\left\lvert \begin{array}{c|c}
    {B - xI} & {c} \\ \hline
    c^* & \alpha 
\end{array}\right\rvert
 $$

 注意到等式左边是一个实对称矩阵，右边是 $\lvert A - xI_n\rvert + \alpha \lvert B - xI_{n - 1} \rvert = f + \alpha g$ ，这便表明了 $f + \alpha g$ 的根均为实数. 
