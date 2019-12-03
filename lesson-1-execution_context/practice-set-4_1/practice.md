# Unit 4 Lesson 1 Practice Set
## Function Execution Context

1. In the browser, what serves as the global object?

2. In the Node.js environment, what serves as the global object?

3. In the browser environment, what does the following log?
      ```javascript
      a = 10;

      console.log(window.a);
      ```      
4. What does the following code log? Why?
      ```javascript
      var b = 100;

      console.log(window.b);
      ```
5. What does the following code log? Why?
      ```javascript
      let c = 9;
      const d = 11;

      console.log(window.c);
      console.log(window.d);
      ```

6. What does the following code log? Why?
      ```javascript
      function func() {
        var b = 1;
      }

      func();

      console.log(b);
      ```

7. What does the following code log? Why?
      ```javascript
      function func() {
        b = 1;
      }

      func();

      console.log(b);
      ```

8. What does the following code log? Why?
      ```javascript
      function func() {
        return this;
      }

      let context = func();

      console.log(context);
      ```

9. What will the code below output? Explain the difference, if any, between this output and that of problem 8.
      ```javascript
      const obj = {
        func: function() {
          return this;
        },
      };

      let context = obj.func();

      console.log(context);
      ```

10. What will the following code produce? Why? 
      ```javascript
      var a = 10;
      var b = 10;
      var c = {
        a: -10,
        b: -10,
      };

      function add() {
        return this.a + b;
      }

      c.add = add;

      console.log(add());
      console.log(c.add());
      ```

11. In the code below, use `call` to invoke `add` as a method on `bar` but with `foo` as execution context. What will this return?
      ```javascript
      const foo = {
        a: 1,
        b: 2,
      };

      const bar = {
         a: 'abc',
         b: 'def',
         add: function() {
           return this.a + this.b;
         },
      };
      ```

12. What does the `Function.prototype.bind()` method return?

13. What does the following code log to the console?
      ```javascript
      var obj = {
        message: 'JavaScript',
      };

      function foo() {
        console.log(this.message);
      }

      foo.bind(obj);
      ```

14. What will the following code produce and why? 
      ```javascript
      const obj1 = {
        a: 2,
        b: 3,
      };

      const obj2 = {
        a: 20,
        b: 30,
      };

      function foo() {
        return this.a + this.b;
      }

      let bar = foo.bind(obj1);
      console.log(bar());

      console.log(foo.call(obj2));
      ```

15. What will the following code log? Why?
      ```javascript
      const obj = {
        a: 'Amazebulous!',
      };
      const otherObj = {
        a: "That's not a real word!",
      };

      function foo() {
        console.log(this.a);
      }

      let bar = foo.bind(obj);

      bar.call(otherObj);
      ```

16. What does this point to in the code below?

      ```javascript
      function whatIsMyContext() {
        return this;
      }
      ```

17. What does this point to in the code below?
      ```javascript
      function whatIsMyContext() {
        return this;
      }

      whatIsMyContext();
      ```

18. What does this point to in the code below?
      ```javascript
      const obj = {
        count: 2,
        method: function() {
          return this.count;
        },
      };

      obj.method();
      ```
19. What does the following code log? Why?
      ```javascript
      window.a = 1;

      function bar() {
        console.log(this.a);
      }

      const obj = {
        a: 2,
        foo: bar,
      };

      obj.foo();
      ```

20. **Bonus:** We expect the following code to log `34000` but instead we are getting `35000`. What is the bug and how can we fix it?
      ```javascript
      const computer = {
        price: 30000,
        shipping: 2000,
        total: function() {
          var tax = 3000;
          function specialDiscount() {
            if (this.price > 20000) {
              return 1000;
            } else {
              return 0;
            }
          }

          return this.price + this.shipping + tax - specialDiscount();
        }
      };

      console.log(computer.total());
```
