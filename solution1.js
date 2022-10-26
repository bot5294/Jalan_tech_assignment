/*
Write a program that takes as input a sorted array of numbers. The objective is to return the array arranged in an 
alternate order such that max value is followed by min value in a descending fashion, so that the 1st element is the 
max value, 2nd element is the min value, 3rd element is the second max value, 4th element is the second min value & 
so on.

Example: For an input array [2, 4, 6, 8, 10], 
the expected result would be [10, 2, 8, 4, 6]
Note: The solution should modify the original array itself.

*/
function alternateOrder(arr, n) {
  let ssize = 0;
  let gsize = 0;
  if (n % 2 == 0) {
    ssize = gsize = n / 2;
  } else {
    ssize = Math.ceil(n / 2);
    gsize = Math.floor(n / 2);
    console.log(n, ssize, gsize);
  }
  let srr = new Array(ssize);
  let grr = new Array(gsize);
  for (let i = 0; i < ssize; i++) {
    srr[i] = arr[i];
  }
  for (let i = gsize; i < n; i++) {
    grr[i - gsize] = arr[i];
  }
  let gp = n % 2 == 0 ? gsize - 1 : gsize;
  let sp = 0;
  for (let i = 0; i < n; i++) {
    if (i % 2 == 0) {
      arr[i] = grr[gp];
      gp--;
    } else {
      arr[i] = srr[sp];
      sp++;
    }
  }
  return arr;
}

let arr = [2, 4, 6, 8, 10];
arr = alternateOrder(arr, arr.length);
console.log(arr);

// Time Complexity O(n)
// Space Complexity O(n)
