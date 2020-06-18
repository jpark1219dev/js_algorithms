const twoSum = (nums, target) => {
	let answer = [];
	nums.forEach((num, i) => {
		let matchingNum = target - num;
		if (nums.includes(matchingNum) && i !== nums.indexOf(matchingNum)) {
			answer[1] = i;
			answer[0] = nums.indexOf(matchingNum);
		}
	})
	if (answer.length > 0) return answer;
	return false;
}

