---
layout: post
title: "A Re-introduction to Linear Algebra"
date: 2019-12-18
excerpt: A return to basics.
---

I recently read a passage that so eloquently captured a common outlook I believe so many students possess. This passage is an excerpt from a longer piece by Anne Fadiman, essayist and Professor of English at Yale, written in memory of her late student Marina Keegan. In her reflection, she wrote:

> “Many of my students sound forty years old. They are articulate but derivative, their own voices muffled by their desire to skip over their current age and experience, which they fear trivial, and land on some version of polished adulthood without passing Go. Marina was twenty-one and sounded twenty-one: a brainy twenty-one, a twenty-one who knew her way around the English language, a twenty-one who understood that there were few better subjects than being young and uncertain and starry-eyed and frustrated and hopeful”

I believe we can all learn from the model Marina exemplified during her life.

Professor Fadiman gave an accurate characterization of the way in which many of us subconsciously experience things through the colored lenses of our ambitions. We saw this perhaps most prevalently during the early years of my collegiate studies when we would frequently be in attendance of classes that contained, in so many ways, more relevant depth than we could have known when experiencing them for the first time. As a result, there is a tendency in these classes to endure and forget as students daydream about what they wish they can be doing instead.

Linear algebra is one of those classes.

For many us, the subject is introduced at a time before a mature notion of mathematics is fully formed; before we would be able to make sense of what a field is, what a vector space is, what a function is. It is introduced to us before we would be able to understand exactly where and how ubiquitously matrices would appear in our daily lives and before we would be able to truly form the mental connection that matrices are functions, as much as they are representations of systems, and that they could be analyzed in ways that are familiar to us.

The field is central to nearly every quantitative discipline. And, yet, few linear algebra classes are structured for students to walk away with much more than a mathematical shorthand for expressing and solving linear equations.

So, I intend that this will be the first in a series of posts to motivate a deeper look into this field which contains the fundamental theories surrounding the language of data.

The idea that matrices simultaneously represent data and linear operators is a powerful one. It means that they have shape and structure. It means that they act on inputs and can be composed in a modular fashion. And it means that to analyze high-dimensional linear transformations, we can use approaches that are analogous to the ways in which we would to analyze, say a polynomial function, such as factorization, root-finding, and differentiation. In fact, some of the most powerful techniques for inquiring into the substance of a matrix are the singular value decomposition (SVD) and eigendecomposition, two methods which factorize matrices into their canonical forms which, broadly speaking, give simpler representations of the original transformation.

I will give a detailed discussion of specific methods for analyzing matrices, as well as their intuitive interpretations, in a future post; however, I will leave you with an example that illustrates a real application of the SVD— an example that inspired, in part, the subject of this post.

Last week, I had the pleasure of attending a talk by Dr. Philip Long, a research scientist at Google. He spoke to us about his current research in controlling the fundamental obstacles that cause numerical instability in the training algorithms for deep neural networks. Matrices are commonly used as representations of the feature transformations that constitute the linear layers of a neural network, and the power of the SVD is that it encapsulates the notion that any matrix can be expressed as a composition of simple geometric transformations. The key insight is that the singular values of a matrix generally capture the extent to which signals are blown up or knocked down. This work, therefore, was about characterizing the singular values of the convolutional layers, leveraging the form of the matrices to formulate a more efficient algorithm for the computation of the SVD, and proposing an approach for regularization by devising a projection that effectively clips the singular values to a restricted range. 

If you are interested in reading about his research in full, you can find his paper on the topic [_here_](https://arxiv.org/abs/1805.10408){:target="_blank"}.



<!-- If you were to come across a basic algebraic function, such as $$f(x) = x^2 + 4x + 3$$, what images would come to mind?

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

I want this to be a gentle reminder that regardless of how you apply linear algebra— that is, whether you view matrices as representation of relationships, networks, physical systems, or objects, matrices are more than just containers for data. At the heart of every matrix, there is structure, and understanding their underlying forms allows for more thoughtful and perceptive approaches to problem-solving. -->
