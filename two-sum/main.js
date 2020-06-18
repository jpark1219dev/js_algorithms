const twoSum = (nums, target) => {
	let answer = [];
	let found = false;
	nums.forEach((num, i) => {
		let matchingNum = target - num;
		if (!found && nums.includes(matchingNum) && i !== nums.indexOf(matchingNum)) {
			answer.push(i);
			answer.push(nums.indexOf(matchingNum));
			found = true;
		}
	})
	if (found) return answer;
	return false;
}
