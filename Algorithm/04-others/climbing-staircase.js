/**
 * Given a stairCase of 'n' steps, count the number of distinct ways to climb to top. you can either climb 1 step or 2 step at a time.
 *
 * n=1, climbingStaircase(1) = 1    |  (1) one way to climb
 * n=2, climbingStaircase(1) = 2    |  (1,1) or (2)
 * n=3, climbingStaircase(1) = 3    |  (1,1,1),(1,2),(2,1)
 *
 * pseudoCode
 * At any given time, you can climb either 1 or 2 steps
 * if you have to climb to step 'n', we can only climb from step 'n-1' or 'n-2'
 * calc the ways we can climb to 'n-1' and 'n-2' steps and add the two
 *
 * climbingStaircase(n) = climbingStaircase(n-1) + climbingStaircase(n-2)
 *
 * so this is fibonacci, series.
 */

function climbingStaircase(n) {
  const noOfWays = [1, 2];

  for (let i = 2; i < n; i++) {
    noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
  }

  return noOfWays[n - 1];
}

climbingStaircase(4); // 5
