---
layout: post
title: "The Heart of a Matrix"
date: 2019-11-26 8:35:26 -0800
excerpt: A re-introduction to linear algebra, framed in terms of matrix action.
permalink:
---

If on a page, you saw the algebraic function $$f(x) = x^2 + 4x + 3$$, what images might come to mind?

You might imagine its parabolic form. You might recognize that it can be factorized into a product of simpler polynomials $$x + 1$$ and $$x + 3$$ and perhaps use this factorization to identify the function’s roots—points which fix it in place. You might consider its derivatives to identify stationary points, qualify intervals of change, and qualify curvature.

As an exercise, this is something that is trivial for many. But I believe that the spirit underlying what was illustrated in this example is understatedly profound.

Through our exercise, we extracted significant information revealing the shape and tendencies of the function, and as a result we obtained insight into its _**action**_ when it is applied to arbitrary inputs. And importantly, we discovered all of this information without creating a single plot, a visual construction obtainable only by evaluating the function over a possibly infinite range of inputs.

I introduce this notion because it provides a surprisingly elegant mental model for how one might effectively consider comparatively complicated problems in linear algebra. And considering how ubiquitously linear systems and models appear in applications of science, engineering, and other fields, it is a subject that deserves attention. Moreover, this manner of seeing is regrettably something that in my experience is often not sufficiently emphasized in a student’s first encounter with linear algebra.

One of the core insights in the linear algebra is that matrices can be interpreted as representations of linear operators. In other words, matrices are functions, and they encode linear mappings of inputs from one vector space to another. Indeed it is a fact that any linear transformation can be represented as a matrix,

Under this interpretation, matrix-vector products encode linear transformations, and matrix-matrix products encode compositions of linear transformations.

This interpretation is simple yet profound, and it is a starting point for uncovering a great deal of meaning behind much of linear algebra. For example, it means that we can begin to consider the action of a matrix in a manner analogous to what we had achieved with the elementary algebraic function above.

One way we might begin to query and intuit the action of a matrix is through matrix decomposition, another powerful idea in linear algebra. Decomposition is a family of methods for factorizing a matrix into matrix products that expose information about the geometry of a transformation and potentially even improve computational efficiency. Two of the most important decompositions are the _**singular value decomposition**_ and _**eigendecomposition**_, which I will discuss in intuitive terms in a future post.

As I close this inaugural post, I want to express my hope that regardless of how you apply linear algebra—whether, to you, matrices are representation of relationships, networks, physical systems, or objects and their characteristics— this post will serve as a gentle reminder that matrices are more than just containers for data. At the heart of a matrix, there is structure and personality. These give greater insight and meaning to the application, and I am excited to continue exploring these things together.
