var twoSum = function(nums, target) {
let d = 0
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            
            // console.log(nums[j],nums[i])
            
            if(nums[i]+nums[j] === target){
               const firsatindex=i
               const secondindex=j
               const arr= [firsatindex,secondindex]
              return arr
            }
        }
        
    }
    return arr

};
const nums = [2,6,11,7], target = 9
twoSum(nums,target)