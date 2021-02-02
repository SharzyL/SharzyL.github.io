---
title: "Theoretical Analysis of Multi-layer Neural Network: A Survey"
tags: [AI paper]
preview: Though multi-layer neural network has been used in a wide range of areas, the explanation about how it works well is still insufficient. This survey primarily focus on the theoretical analysis about the approximation ability and training process of neural network. 
---

本文是我在人工智能入门课上的期中论文。主要介绍关于多层神经网络的一些理论方面研究，包括可表达性，收敛性等。

## Abstract
Though multi-layer neural network has been used in a wide range of areas, the explanation about how it works well is still insufficient. This survey primarily focus on the theoretical analysis about the approximation ability and training process of neural network. For approximation ability, researches show that it can be arbitrarily strong with the increase of network complexity. Qualified relationship between such ability and width/depth has been partially constructed. For training, we investigates the SGD algorithm. To analysis its performance, the trajectory around loss surface critical points are surveyed, and some theoretical results about SGD instances are summarized. 

## Table of Content
- Introduction
- Approximation
  - Universal approximation theorem
  - Width for approximation
  - Depth for approximation
- Training
  - The obstacle of SGD
  - Instance analysis
- Conclusion

## Document
[pdf file](/assets/doc/survey_midterm.pdf)

## References

[1]  Zeyuan Allen-Zhu, Yuanzhi Li, and Zhao Song. A Convergence Theory for Deep Learning
via Over-Parameterization. arXiv:1811.03962 [cs, math, stat] , June 2019. 120.

[2]  A.R. Barron. Universal approximation bounds for superpositions of a sigmoidal function.
IEEE Transactions on Information Theory, 39(3):930–945, May 1993. ISSN 0018-9448,
1557-9654. doi: 10.1109/18.256500. 2398.

[3]  Avrim Blum and Ronald L Rivest. Training a 3-Node Neural Network is NP-Complete.
page 8.

[4]  G Cybenkot. Approximation by superpositions of a sigmoidal function. page 12, 1989.


[5]  Yann Dauphin, Razvan Pascanu, Caglar Gulcehre, Kyunghyun Cho, Surya Ganguli, and
Yoshua Bengio. Identifying and attacking the saddle point problem in high-dimensional
non-convex optimization. arXiv:1406.2572 [cs, math, stat] , June 2014.

[6]  Ronen Eldan and Ohad Shamir. The Power of Depth for Feedforward Neural Networks.
page 34, 2016.

[7] Johan Ha, Benjamin Rossman, Rocco A Servedio, and Li-Yang Tan. An average-case depth
hierarchy theorem for Boolean circuits. Journal of the ACM, 9(4):29, 2016.

[8] Kaiming He, Xiangyu Zhang, Shaoqing Ren, and Jian Sun. Deep Residual Learning for Im-
age Recognition. In 2016 IEEE Conference on Computer Vision and Pattern Recognition
(CVPR), pages 770–778, Las Vegas, NV, USA, June 2016. IEEE. ISBN 978-1-4673-8851-1. doi: 10.1109/CVPR.2016.90.2. 

[9] Kurt Hornik, Maxwell Stinchcombe, and Halbert White. Multilayer feedforward net-
works are universal approximators. Neural Networks, 2(5):359–366, January 1989. ISSN 08936080. doi: 10.1016/0893-6080(89)90020-8. 17000.8936081.  

[10] Kenji Kawaguchi. Deep Learning without Poor Local Minima. page 9, 2016.
Yuanzhi Li and Yang Yuan. Convergence Analysis of Two-layer Neural Networks with ReLU
Activation. page 11, 2017. 172.

[11] Tomaso Poggio, Hrushikesh Mhaskar, Lorenzo Rosasco, Brando Miranda, and Qianli Liao.
Why and when can deep-but not shallow-networks avoid the curse of dimensionality: A
review. Int. J. Autom. Comput., 14(5):503–519, October 2017. ISSN 1751-8520. doi:
10.1007/s11633-017-1054-2. part1.

[12] B. D. Ripley. Neural Networks and Related Methods for Classification. Journal of the Royal
Statistical Society. Series B (Methodological), 56(3):409–456, 1994.

[13] Maxwell Stinchcombe and Halbert White. Universal approximation using feedforward net-
works with non-sigmoid hidden layer activation functions — the Research Networking
System. 1989. 321.

[14] Matus Telgarsky. Benefits of depth in neural networks. page 23, 2016.

[15] X.-H. Yu. Can backpropagation error surface not have local minima. IEEE Trans. Neural
Netw., 3(6):1019–1021, Nov./1992. ISSN 10459227. doi: 10.1109/72.165604.

## PS
本文是我迄今为止写文章最肝的一次了。我选的这个 subarea 的论文非常杂，里面还有很多奇怪的 math，导致看进度论文缓慢。某些同学两天写完，我写了接近一个星期还只写了三分之二（关于 generalization 的问题本来想写的，但是时间所限，被我魔改删掉了）。可以预见的是，今后还会有很多更肝的事情即将发生。