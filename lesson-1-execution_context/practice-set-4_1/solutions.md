# Practice Set 4.1 Solutions

1. `window`

2. `global`

3. `10`. Initializing an undeclared variable creates a property on the `window` object, since the global object is the implicit context for evaluating expressions.

4. `100`: Declaring a variable with `var` in a global scope adds that variable as a property of the global object.

5. 
      ```javscript
      undefined
      undefined
      ```
      Variables defined with `let`/`const` do not become properties of the global object.

6. `Uncaught ReferenceError: b is not defined`. This code throws a `ReferenceError`, because the variable declaration on line 2 (which is executed when `func` is invoked on line 5) occurs in function scope. As a result, it isn't made into a property on the global object and is inaccessible outside of the function.

7. `1`. Unlike in the previous problem, we don't declare `b`; rather, we simply initialize it. As a result, `b` is created as a property on the global object, despite the fact that it's initialized in function scope.

8. `Window {...}`: The return value of `func`, which is assigned to `context`, is `Window` because `func` is invoked as a function, and the implicit execution context for a function is the global object.

9. `{func: function}`: Unlike problem 8, this code outputs the object `obj`. This happens because `func` is invoked as a method, and as such, its execution context refers to the object holding the property that references the function.

10. 
  ```javascript
  20
  0
  ```
  As in question 3, the key detail here is that the first invocation of `add` is as a function, while the second invocation is as a method. In the function invocation, on line 14, this resolves to the global object, and the property `a` to the value `10`. In the method invocation, however, `this` resolves to the object `c`, and the property `a` to the value `-10`. In both cases, `b` references the variable `b` declared in the global scope.

11. 
  ```javascript
  bar.add.call(foo); // 3
  ```
  Since we are invoking `call` on `bar.add` and supplying the object `foo` as the explicit context, `foo`'s properties `a` and `b`, rather than `bar`'s, will be referenced during execution, returning a value of `3`.

12. The `bind()` method creates a new function that, when called, has its `this` keyword set to the provided value.

13. Nothing. Unlike `call` and `apply`, `bind` doesn't invoke the receiver function. Rather, it returns a new function that is permanently bound to the context argument.

14. 
  ```javascript
  5
  50
  ```
  We declare a variable `bar` and assign it a value of the function returned when `foo` is bound to the object `obj1`. Thus, when we call that function (`bar()`), `this` resolves to `obj1`.  On the last line of the program, we define `this` explicitly to be `obj2`. Thus, `this.a` returns `20` and `this.b` returns 30.

15. `Amazebulous!`: Once a function has been bound to an execution context with `bind`, its context can't be changed, even explicitly. Thus, even though we attempt to call `bar` with the explicit context of `otherObj`, `bar` references a bound function and its context cannot be changed.

16. We won't know the context of a function until execution time. Thus, we don't know what the context is here.

17. `window`: **Function calls set the execution context to the global object.**

18. Since we call `method` on object `obj`, `this` is the object `obj`.

19. `2`: Line 11 calls method `foo` with its context set to `obj` since the execution context for any method invocation, the context is the owning object.
