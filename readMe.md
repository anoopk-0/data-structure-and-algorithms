# Algorithms

An Algorithm is a set of well-defined instructions to solve a particular problem.

    Characteristics:
        - well defined inputs and outputs
        - each step should be clear and unambiguous
        - language independent

# Algorithm analysis

The absolute running time of an algorithm cannot be predicted, since it depends on a number of factors:

        - programming language used to implement the algo
        - computer OS
        - input provided to the program


    IMP: we evaluate the performance of an algo in terms of input size.
        1. Time complexity : Amount of time taken by an algo to run, as function of input size.
        2. Space complexity : Amount of memory taken by an algo to run,     ''

# Big -O Notation

The worst case complexity of an algo is represented using the Big-O notation.
Big-O natation describe the complexity of an algo using algebraic terms.

    It has 2 important characteristics
        - it is expressed in terms of the input.
        - it foucs on the bigger without getting caught up in a minute details.

Example:

    ```
        function summation(n) {
            let sum=0; ----------------------------- exec: 1 time

            for(let i=0; i<=n; i++) {
                sum += i; -------------------------- exec: n time
            }

            return sum ----------------------------- exec: 1 time
        }
    ```
    time complexity: n + 1 + 1 or n+2 which is same is: n =>Big O(n) (it is linear, means as input increases, time complexity also increases)

Example:

    ```
        function summation(n) {
            return (n * (n+1))/ 2 --------------exec: 1 time. (Time complexity is: O(1)(content))
        }
    ```

# Space complexity

O(1) - contant
O(n) - linear
O(logn) - Log

best to worst: o(1) < O(log n) < O(n) < O(n logn) < O(n^2) ....

# Object -Big -O

An object is a colleciton of key value pair

- insert - o(1)
- remove - o(1)
- access - O(1)
- search - o(n)

# Array

An array is an ordered collection of values.
IMP:array acts like a stack.

- insert/remove at end - o(1)
- insert/remove at beginning - O(n)
- access - O(1)
- search - o(n)

push/pop - O(1)
shift/unshit/concat/slice/splice - O(n)
forEach/map/filter/reduce - O(n)

# Big O Guide

Calculation not dependens on input size - O(1)

=> 1 loop - O(n)
=> 2 nested loops - O(n^2)
\*\* input size reduced by half - O(logn)
