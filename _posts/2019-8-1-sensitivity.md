---
layout: post
title: 一个猜想的证明
---

最近看到一篇[文章](https://www.quantamagazine.org/mathematician-solves-computer-science-conjecture-in-two-pages-20190725/)，讲述了一个几十余年历史的猜想近日被证明的事情。令人惊讶的是[论文](https://arxiv.org/abs/1907.00847)中的这个证明主题居然只有不到两页，并且只用到了基本的线性代数，遂记录之。

## Hypothesis
这个猜想可以是在研究 Bool 函数的“敏感性"时被提出来的，其内容可等价叙述如下：
> 设  $Q_n$ 表示  $n$  维立方体图（即顶点为立方体的顶点，两点连有一条无向边当且仅当其在立方体上相邻），求证对于这个图的任意一个包含  $2^{n-1} + 1$  个顶点的诱导子图，它的最大度数不小于 $\sqrt{n}$ .

## Sketch of proof

证明概述如下

(1) 称一个实矩阵 $M$ 是某个图 $G$ 的伪邻接矩阵，如果 $\lvert a_{ij}\rvert = 1$ 当且仅当 $G$ 中的第 $i$ 个顶点和第 $j$ 个相邻，且矩阵除此以外的项均为零. 归纳构造矩阵 $A_n$ ，使得

$$A_{1}=\left[\begin{array}{ll}{0} & {1} \\ {1} & {0}\end{array}\right] \quad A_{n}=\left[\begin{array}{cc}{A_{n-1}} & {I} \\ {I} & {-A_{n-1}}\end{array}\right]$$

归纳易证 $A_n$ 是 $Q_n$ 的伪邻接矩阵，且 $A_n$ 的特征向量中恰有 $2^{n - 1}$ 个为  $\sqrt{n}$ ， $2^{n - 1}$ 个是  $\sqrt{n}$ . 

(2) 证明一个图的最大度数不小于它的伪邻接矩阵的任何一个特征根. 

(3) Cauchy interlace lemma：若 $A$ 是一个 $n$ 阶实对称矩阵， $B$ 是它的一个主子阵，
设 $\lambda_1 \geq \lambda_2 \geq \cdots \geq \lambda_n$ ， $\mu_1 \geq \mu_2 \geq \cdots \mu_m$ 分别是它们的全部特征根，则对于每个 $i\ (1 \leq i \leq m)$ ，均有

$$ \lambda_i \geq \mu_i \geq \lambda_{i + n - m} $$

(4) 考虑 $Q_n$ 的某个 $2^{n - 1} + 1$ 阶子图，它对应于 $A_n$ 的一个主子阵，由于 $A_n$ 的前 $2^{n - 1}$ 个特征根均为 $\sqrt{n}$ ，根据 (3) ，它的最大特征根是 $\sqrt{n}$ ，带入 (2) 即可得到待证结论. 

## Details

待补充

{% highlight ruby %}
def foo
  puts 'foo'
end
{% endhighlight %}

