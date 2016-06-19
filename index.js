'use strict';

/*
 * sigils
 *   n: number
 *   s: sorted
 */

const count = function(A) {
  let sortedArray = A;
  let inversions = 0;

  const n = A.length;

  if (n <= 1) return { sortedArray, inversions };

  const B = A.slice(0, n/2);
  const C = A.slice(n/2);

  const X = count(B);
  const Y = count(C);
  const Z = merge(X.sortedArray, Y.sortedArray);

  sortedArray = Z.sortedArray;
  inversions = X.inversions + Y.inversions + Z.inversions;

  return { sortedArray, inversions };
};

const merge = function(B, C, sD, count) {
  const nB = B.length;
  const nC = C.length;
  const D = sD || [];
  let c = count || 0;

  switch (true) {
    case nB === 0 && nC === 0:
      return { sortedArray: D, inversions: count };
    case nB === 0 && nC !== 0:
      D.push(C[0]);
      return merge([], C.slice(1), D, c);
    case nB !== 0 && nC === 0:
      D.push(B[0]);
      return merge(B.slice(1), [], D, c);
    case B[0] <= C[0]:
      D.push(B[0]);
      return merge(B.slice(1), C, D, c);
    case B[0] > C[0]:
      D.push(C[0]);
      c = c + nB;
      return merge(B, C.slice(1), D, c);
  }
};

module.exports = count;
