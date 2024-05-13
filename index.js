const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const multiply = function(nums) {
  const res = nums.reduce((total, currentItem) =>{
    return total *= currentItem;
  },1);
  return res;
};

const divide = function(a,b) {
  return a/b;
};