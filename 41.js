var firstMissingPositive = function(nums) {
    const positiveSet = new Set(nums.filter(item => item > 0));

    let index = 1;
    while (positiveSet.has(index)) {
        index++;
    }

    return index;
};

console.log(firstMissingPositive([1, 2, 0, 5, 8, 3]));  // Output: 4
console.log(firstMissingPositive([3, 4, -1, 1]));        // Output: 2
console.log(firstMissingPositive([2514515151]));    // Output: 1
