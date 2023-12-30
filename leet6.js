var nums = [3, 30, 34, "hi", 5, 9];

var largestNumber = function(nums) {
    nums = nums.filter(item => typeof item === 'number'); // Filter out non-numeric elements
    nums.sort((a, b) => {
        let sa = a.toString();
        let sb = b.toString();
        return parseInt(sa + sb) > parseInt(sb + sa) ? -1 : 1;
    });
    if (nums[0] === 0) return '0';
    return nums.join('');
};

console.log(largestNumber(nums)); // Output: "9534330"
