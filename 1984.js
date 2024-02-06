var minimumDifference = function(nums, k) {
    const arr=[]
    for(i=0;i<nums.length;i++){
        for(j=i+1;j<nums.length;j++){
            arr.push(nums[i]-nums[j])
            
        }
    }

    return arr
    
};

console.log(minimumDifference([9,4,1,7],2))