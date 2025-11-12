function threeSum(arr, target) {
  let maxi = Infinity;
	let result = [];
	for(let i=0;i<=arr.length-3;i++){
		for(let j=i+1;j<=arr.length-2;j++){
			let sum = arr[i]+arr[j];
			for(let k=j+1;k<=arr.length-1;k++){
				sum+=arr[k];
				if(Math.abs(sum-target)<maxi){
					result = [arr[i],arr[j],arr[k]];
				}
			}
		}
	}
	return result;
}

module.exports = threeSum;
