function threeSum(arr, target) {
  let closestSum = Infinity;
  let minDiff = Infinity;

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        let sum = arr[i] + arr[j] + arr[k];
        let diff = Math.abs(sum - target);
        if (diff < minDiff) {
          minDiff = diff;
          closestSum = sum;
        }
      }
    }
  }

  return closestSum;
}

module.exports = threeSum;
