/**
 * Problem: Given two finite non-empty set, find their cartesian product..
 * In mathematics, specially set theory, the cartesian product of two sets A and B, denoted AxB, is the set of all ordered pair(a,b) where a is in A and b is in B.
 *
 * const A= [1,2];
 * const B = [3,4]
 *
 * AxB = [[1,3],[1,4],[2,3], [3,4]]
 *
 */

function cartesianProduct(arr1, arr2) {
  const product = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      product.push([arr1[i], arr2[j]]);
    }
  }

  return product;
}

//Big-O = O(mn) // depended on length.both arr1 and arr2 , same length give O(n^2).
