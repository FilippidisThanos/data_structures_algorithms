function slowMaxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }

  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }

    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) {
    return null;
  }

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

// Tests
const testCases = [
  { args: [[ 2, 6, 9, 2, 1, 8, 5, 6, 3], 3], output: 19 },
];

for (let test of testCases) {
  console.log('Test', test);
  console.assert(slowMaxSubarraySum(...test.args) === test.output);
  console.assert(maxSubarraySum(...test.args) === test.output);
}

export default {
  maxSubarraySum,
  slowMaxSubarraySum,
};
