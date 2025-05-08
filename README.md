<h1> What are some differences between interfaces and types in TypeScript? </h1>

1-interface is good for making object shapes.

2-type can do more things, like union (A | B) and intersection (A & B).

3-You can extend interface with other interface, like inheritance.

4-type also can extend, but little different way.

5-interface works better with classes.

<h1> What is type inference in TypeScript? Why is it helpful? </h1>

#  Type Inference in TypeScript

This project is very small. It show how **TypeScript guess types** when you no tell it.

##  What is Type Inference?

When you make variable, TypeScript can guess the type.  
You no need always say `: string`, `: number`, etc.  
It look at value and think, “Ah, I know this!”

Example:


let name = "Alice"; 
let age = 30;       

## Why It Helpful?
You type less, but code still smart

It catch mistake (like wrong type)

Code look more clean

Less boring to write


