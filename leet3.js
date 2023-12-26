function maxArea(height) {
    let maxWater = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        const h = Math.min(height[left], height[right]);
        const w = right - left;
        const area = h * w;
        maxWater = Math.max(maxWater, area);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
}

// Test cases
const height1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log("Max water trapped:", maxArea(height1)); // Output: 49

const height2 = [8,7,5,2,9];
console.log("Max water trapped:", maxArea(height2)); // Output: 1
