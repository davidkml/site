---
layout: post
title: "The Heart of a Matrix"
date: 2019-11-26
edited: 2018-12-30
excerpt: A re-introduction to linear algebra, framed in terms of matrix action.
---

If you were to come across a basic algebraic function, such as $$f(x) = x^2 + 4x + 3$$, what images would come to mind?

Most would visualize its parabolic shape. Through inspection, one might immediately recognize that the function crosses the vertical axis at the value 3. And those who are quick with arithmetic might recognize that the function can be factorized into a product of two simpler polynomials: $$x + 1$$ and $$x + 3$$. Through this factorization, the roots of the function immediately become apparent. And those who want to go even further might consider differentiating the function, allowing them to identify stationary points, quantify intervals of change, and quantify curvature. 

This problem is, of course, trivial for most. However, the spirit underlying this example is subtly profound. Through processes such as these, we were able to uncover the function’s shape and tendencies which give insight into the _action_ of the function when applied to arbitrary inputs. And, importantly, we queried all of this information without creating any plots or visualizations that, for functions with which are less familiar, are generally available only through the evaluation of the function over a large, if not infinite, range of inputs. 

For simple problems such as these, the significance of this analytical practice may not be apparent; nonetheless, it is worth noting that analogous notions may be applied to the cases of vector-valued functions and inputs as well, many of which are impossible to visualize. 

So, I introduce this notion because it provides a surprisingly elegant model for how one might effectively consider high-dimensional problems which appear ubiquitously in applications in machine learning and other quantitative fields inside and outside of science and engineering. 

Linear algebra is fundamentally important for building representions of many of these problems. So, through this post I would like to establish several grounding principles and perspectives in the subject before moving into more advanced discussions. 

One of the core insights in linear algebra is that matrices can be interpreted as representations of linear operators. In other words, matrices are functions, and they encode linear mappings from one vector space to another. Under this interpretation, matrix-vector products encode the applications of the linear transformation to vector-valued inputs, and matrix-matrix products encode the compositions of linear transformations with each other. 

This interpretation is simple, yet profound. It means that we can begin to consider the _action_ of the matrix in a manner analogous to how we had considered the action of the elementary algebraic function discussed previously. 

One way we might begin to develop intuition for the action of a matrix is through _matrix decomposition_, a powerful family of techniques for factorizing a matrix into matrix products which expose valuable information regarding the geometry of a transformation. They can also be used to improve computational efficiency. 

Two of the most important matrix decompositions are the _singular value decomposition_ (SVD) and _eigendecomposition_. These topics are too important to condense into a single post, so I will reserve their extended discussion for a future post. However, to motivate their study, I will leave you with an applied example that inspired the current post.

Last week, I had the pleasure of listening to a seminar by Dr. Philip Long, a Research Scientist at Google. His talk was about his current research characterizing the singular values of the convolutional layers of a deep neural network. To summarize, a fundamental obstacle to the effective training of deep neural networks are the exploding and vanishing gradients of propagated signals. A key insight is that because the layers of a neural network can be interpreted as a composition of feature transformations, the factor by which a layer increases or decreases the magnitude of a signal is bounded by the singular values of the matrix associated with the transformation. This insight leads to an approach for regularizing the layers by performing a projection that effectively “clips” the singular values, which is very cool.

His research also derives an efficient algorithm for computing the SVD applicable to the particular shape of the linear transformations associated with the convolutional layers, which enables the the practical application of this approach.

For those who are interested in reading about his research in full, you can find his paper on the topic [here](https://arxiv.org/abs/1805.10408){:target="_blank"}.

I want this to be a gentle reminder that regardless of how you apply linear algebra— that is, whether you view matrices as representation of relationships, networks, physical systems, or objects, matrices are more than just containers for data. At the heart of every matrix, there is structure, and understanding their underlying forms allows for more thoughtful and perceptive approaches to problem-solving.
