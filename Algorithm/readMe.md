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
        - it focus on the bigger without getting caught up in a minute details.

Example:

    ```
        function summation(n) {
            let sum=0; ----------------------------- exec: 1 time

            for(let i=1; i<=n; i++) {
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

O(1) - constant
O(n) - linear
O(log n) - Log

best to worst: o(1) < O(log n) < O(n) < O(n log n) < O(n^2) ....

# Object -Big -O

An object is a collection of key value pair

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

IMP # Big O Guide

Calculation not dependent on input size - O(1)

=> 1 loop - O(n)
=> 2 nested loops - O(n^2)
\*\* input size reduced by half - log n

# Algorithm design techniques

1. Bruce force: simple and exhaustive technique that evaluate every possible outcome to find the best soln: Ex: linear search
2. Greedy: choose the best option at the current time, without any consideration for the future. ex: dijkstra's algo, prim's algo and kruskal's algo
3. divide and conquer: divide the problem into smaller sub-problem. each sub problem is then solved and the partial soln are recombined to determine the overall soln. ex: binary search, quick sort, merge sort and tower of hanoi
4. dynamics programming": divide the problem into smaller sub problem. break it down into smaller but overlapping sub problem. store the result and reuse it for the same sub-problem. this is call memorization and is a optimization technique that improve the time complexity of algo. ex: fib number and climbing staircase.

# Next step

some more problem:

- finding the GCD using euclidean algo
- finding permutation and combination of the list of number
- finding the longest common substring in a given string
- knapsack problem
