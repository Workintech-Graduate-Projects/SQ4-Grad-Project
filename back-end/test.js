var lengthOfLIS = function (nums) {
  let newArr = smallest(removeDup(nums));
  console.log(newArr);
  return newArr;
};
const smallest = (nums) => {
  if (nums.length == 1) {
    return [...nums[0]];
  }
  let index = 0;
  let value = nums[0];
  let howManyBiggerMax = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    let howMany = 0;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > nums[i]) {
        howMany++;
      }
      if (howManyBiggerMax < howMany) {
        index = i;
        value = nums[i];
        howManyBiggerMax = howMany;
      }
    }
  }
  let returnNums = nums.slice(index);
  return [value, ...smallest(returnNums)];
};
let removeDup = (nums) => {
  let i = 0;
  while (i < nums.length) {
    if (nums[i] == nums[i + 1]) {
      nums.splice(i + 1, 1);
    } else {
      i++;
    }
  }

  return nums;
};
