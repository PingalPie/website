+++
title = "A question posted on story of @jeesimplified on ig"
date = "2024-12-15"
+++

# Solution
I might've made mistake in moduluses, but this was the fastest way i could've done right now.
It took me about 2-3 minutes to solve it out.

```


|\log{x.x1}| + |log(x.x2)| + |log(x.x3)| + .... + |log(x.xn)|
+ |log(x/x1)| + |log(x/x2)| + |log(x/x3)| + .... + |log(x/xn)|
= |log(x1) + log(x2) + log(x3) + .... + log(xn)|

=> using log(a.b) = log(a) + log(b) and log(a/b) = log(a) - log(b)

=> |log(x)| + |log(x1)| + |log(x)| + |log(x2)| + .... + |log(x)| + |log(xn)|
   + |log(x)| - |log(x1)| + |log(x)| - |log(x2)| + .... + |log(x)| - |log(xn)|
   = |log(x1.x2.x3.....xn)|
=> 2*n*|log(x)| = |log(x1.x2.x3....xn)|

=> using n*log(x) = log(x^n)

=> |log(x^(2*n))| = |log(x1.x2.x3....xn)|
=> log(x^2n) = log(x1.x2.x3.....xn)   OR   log(x^2n) = -1*log(x1.x2.x3....xn)

=> x^2n = x1.x2.x3.....xn             OR   x^2n = (10^-1)*x1.x2.x3.x4...xn      ANS


```
