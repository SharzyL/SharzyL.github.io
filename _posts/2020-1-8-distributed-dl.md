---
title: "Distributed System for Deep learning Training: A Survey"
tags: AI paper
---

某奇妙课程的期末论文。主要介绍分布式深度学习的架构和技术。

# Abstract

Recent years have witnessed a growth in computation requirement to train modern deep neural networks with massive data volume and model size. Distributed systems are widely employed to accelerate the training process. In this article, we survey the principle and technology to construct such a system. Data parallelism and model parallelism are two fundamental strategies to parallelize the training process. Data parallelism separate training data to different nodes, while model parallelism partition the model. We summarize the architecture to utilize these strategies and how to minimize communication overhead and reach high scalability. Besides some compression techniques to accelerate data transmission are investigated in detail. 

# Table of Content

- Introduction
- Data Parallelism
  - Parameer Server
  - Synchronous SGD 
  - Asynchronous SGD 
  - Allreduce architecture
  - Transmission Optimization 
- Model Parallelism
  - Compression Techniques
  - Lower Arithmetic Precision 
  - Sparsification

# Document

[pdf file](/assets/doc/survey-final.pdf)

# References

Alham Fikri Aji and Kenneth Heafield. Sparse Communication for Distributed Gradient
Descent. Proceedings of the 2017 Conference on Empirical Methods in Natural Language
Processing, pages 440–445, 2017. doi: 10.18653/v1/D17-1045.

Andrew Gibiansky. Bringing HPC Techniques to Deep Learning. http://research.
baidu.com/bringing-hpc-techniques-deep-learning/, 2017.

Karanbir Chahal, Manraj Singh Grover, and Kuntal Dey. A Hitchhiker’s Guide On Distributed Training of Deep Neural Networks. arXiv:1810.11787 [cs, stat], October 2018.

Jianmin Chen, Xinghao Pan, Rajat Monga, Samy Bengio, and Rafal Jozefowicz. Revisiting
Distributed Synchronous SGD. arXiv:1604.00981 [cs], March 2017.

Trishul Chilimbi, Yutaka Suzue, Johnson Apacible, and Karthik Kalyanaraman. Project
Adam: Building an Efficient and Scalable Deep Learning Training System. page 13, 2014.

Matthieu Courbariaux, Yoshua Bengio, and Jean-Pierre David. Training deep neural networks with low precision multiplications. arXiv:1412.7024 [cs], September 2015.

Jeffrey Dean, Greg Corrado, Rajat Monga, Kai Chen, Matthieu Devin, Mark Mao,
Marc’aurelio Ranzato, Andrew Senior, Paul Tucker, Ke Yang, Quoc V Le, and Andrew Y
Ng. Large Scale Distributed Deep Networks. page 9, 2012.

Jia Deng, Wei Dong, Richard Socher, Li-Jia Li, Kai Li, and Li Fei-Fei. ImageNet: A large-scale hierarchical image database. In 2009 IEEE Conference on Computer Vision and Pattern Recognition, pages 248–255, Miami, FL, June 2009. IEEE. ISBN 978-1-4244-
3992-8. doi: 10.1109/CVPR.2009.5206848.

Suyog Gupta, Ankur Agrawal, Kailash Gopalakrishnan, and Pritish Narayanan. Deep
Learning with Limited Numerical Precision. page 10, 2015.

Xianyan Jia, Shutao Song, Wei He, Yangzihao Wang, Haidong Rong, Feihu Zhou, Liqiang Xie, Zhenyu Guo, Yuanzhou Yang, Liwei Yu, Tiegang Chen, Guangxiao Hu, Shaohuai Shi, Xiaowen Chu, Tencent Inc, and Hong Kong Baptist University. Highly Scalable Deep
Learning Training System with Mixed-Precision: Training ImageNet in Four Minutes.
page 9, 2018.

Peter H. Jin, Qiaochu Yuan, Forrest Iandola, and Kurt Keutzer. How to scale distributed deep learning? arXiv:1611.04581 [cs], November 2016.

Jin Kyu Kim, Qirong Ho, Seunghak Lee, Xun Zheng, Wei Dai, Garth A. Gibson, and Eric P. Xing. STRADS: A distributed framework for scheduled model parallel machine learning. In Proceedings of the Eleventh European Conference on Computer Systems - EuroSys ’16, pages 1–16, London, United Kingdom, 2016. ACM Press. ISBN 978-1-4503-4240-7. doi:10.1145/2901318.2901331.

Alex Krizhevsky. One weird trick for parallelizing convolutional neural networks.
arXiv:1404.5997 [cs], April 2014. Alex Krizhevsky, Ilya Sutskever, and Geoffrey E. Hinton. ImageNet classification with deep convolutional neural networks. Commun. ACM, 60(6):84–90, 2012. ISSN 00010782. doi: 10.1145/3065386.

Mu Li, Li Zhou, Zichao Yang, Aaron Li, Fei Xia, David G Andersen, and Alexander Smola. Parameter Server for Distributed Machine Learning. page 10, 2013.

Yujun Lin, Song Han, Huizi Mao, Yu Wang, and William J Dally. Deep Gradient Com-
pression: Reducing the Communication Bandwidth for Distributed training. page 13,

Azalia Mirhoseini, Hieu Pham, Quoc V. Le, Benoit Steiner, Rasmus Larsen, Yuefeng Zhou, Naveen Kumar, Mohammad Norouzi, Samy Bengio, and Jeff Dean. Device Placement Optimization with Reinforcement Learning. arXiv:1706.04972 [cs], June 2017.

Diego Ongaro and John Ousterhout. In Search of an Understandable Consensus Algorithm. page 16, 2014.

Pitch Patarasuk and Xin Yuan. Bandwidth Efficient All-reduce Operation on Tree
Topologies. In 2007 IEEE International Parallel and Distributed Processing Sympo-
sium, pages 1–8, Long Beach, CA, USA, 2007. IEEE. ISBN 978-1-4244-0909-9. doi:
10.1109/IPDPS.2007.370405.

Pitch Patarasuk and Xin Yuan. Bandwidth optimal all-reduce algorithms for clusters of workstations. Journal of Parallel and Distributed Computing, 69(2):117–124, February 1. ISSN 07437315. doi: 10.1016/j.jpdc.2008.09.002.

Olga Russakovsky, Jia Deng, Hao Su, Jonathan Krause, Sanjeev Satheesh, Sean Ma,
Zhiheng Huang, Andrej Karpathy, Aditya Khosla, Michael Bernstein, Alexander C.
Berg, and Li Fei-Fei. ImageNet Large Scale Visual Recognition Challenge. Int
J Comput Vis, 115(3):211–252, December 2015. ISSN 0920-5691, 1573-1405. doi:
10.1007/s11263-015-0816-y.

Frank Seide, Hao Fu, Jasha Droppo, Gang Li, and Dong Yu. 1-Bit Stochastic Gradient Descent and its Application to Data-Parallel Distributed Training of Speech DNNs. page 5,

Alexander Sergeev and Mike Del Balso. Horovod: Fast and easy distributed deep learning in TensorFlow. arXiv:1802.05799 [cs, stat], February 2018.

Nikko Ström. Sparse Connection and Pruning in Large Dynamic Artificial Neural Networks. page 4, 1997.

Nikko Strom. Scalable Distributed DNN Training Using Commodity GPU Cloud Computing. page 5, 2015.

Rajeev Thakur, Rolf Rabenseifner, and William Gropp. Optimization of Collective Communication Operations in MPICH. The International Journal of High Performance
Computing Applications, 19(1):49–66, February 2005. ISSN 1094-3420, 1741-2846. doi:
10.1177/1094342005051521.

Jinliang Wei, Wei Dai, Aurick Qiao, Qirong Ho, Henggang Cui, Gregory R. Ganger,
Phillip B. Gibbons, Garth A. Gibson, and Eric P. Xing. Managed communication and
consistency for fast data-parallel iterative analytics. In Proceedings of the Sixth ACM
Symposium on Cloud Computing - SoCC ’15, pages 381–394, Kohala Coast, Hawaii, 1. ACM Press. ISBN 978-1-4503-3651-2. doi: 10.1145/2806777.2806778.

Hao Zhang, Zhiting Hu, Jinliang Wei, Pengtao Xie, Gunhee Kim, Qirong Ho, and Eric Xing. Poseidon: A System Architecture for Efficient GPU-based Deep Learning on Multiple Machines. arXiv:1512.06216 [cs], December 2015a.

Hao Zhang, Zeyu Zheng, Shizhen Xu, Wei Dai, Qirong Ho, Xiaodan Liang, Zhiting Hu,
Jinliang Wei, Pengtao Xie, and Eric P Xing. Poseidon: An Effcient Communication
Architecture for Distributed Deep Learning on GPU Clusters. page 15, 2017.

Ruiliang Zhang and James T Kwok. Asynchronous Distributed ADMM for Consensus
Optimization. page 9, 2014.

Sixin Zhang, Anna Choromanska, and Yann LeCun. Deep learning with Elastic Averaging SGD. page 9, 2015b.

Shuxin Zheng, Qi Meng, Taifeng Wang, Wei Chen, Nenghai Yu, Zhi-Ming Ma, and
Tie-Yan Liu. Asynchronous Stochastic Gradient Descent with Delay Compensation.
arXiv:1609.08326 [cs], August 2019.

# Postscript

果然比期中的时候肝多了。这次的内容相比上次来说没有那么艰深（几乎没有什么 math），但是作为偏向工程的问题，其中涉及大量的技术细节，读起来比较费劲。此外，将这么一大坨庞杂的技术进行一个分类确实是比较有挑战性的事情。

在读文献的时候发生了一些让我有点头疼的事情。在阅读 A Hitchhiker’s Guide On Dis-
tributed Training of Deep Neural Networks 这篇文章的时候，作者提到了几种 allreduce 的架构，首先介绍的是 ring allreduce 架构，然后介绍 recursive halfing and doubling 和 binary blocks 架构，并且声称生成后面两种架构在时间复杂度上可以从 $O(n)$ 提升到 $O(\ln n)$ 级别的提升。但是前文又说 ring allreduce 架构的时间复杂度是 theoretically optimal 的。这让我非常迷惑。在看了一遍算法之后，我发现后面两种算法实际上比原来的算法慢了 $O(\ln n)$ 倍。这导致我在文中只能尴尬的解释道

> These algorithms are simpler than Ring Allreduce but slower when $N$ is large, thus appropriate for smaller systems. 

还有一个奇妙的问题是，distributed DL 的主要技术有两个 model parallelism 和 data parallelism，这两个技术从各种方面上来说都是非常平衡的关系 —— 除了文献里面介绍它们的内容以外。data parallelism 里面有各种技术分类和优化技巧，而 model parallelism 几乎很少有介绍技术细节的，就算某些 framework 使用了 model parallelism ，一般也只提效果不提实现。唯一一篇讲的比较详细的文章 STRADS: A distributed framework for scheduled model parallel machine learning 里面讲得有点一眼难尽，不知道它在说啥。最后只能非常把 data parallelism 写了 5 个 subsection，model parallelism 写了一面多。