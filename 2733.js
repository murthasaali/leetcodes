var findNonMinOrMax = function(nums) {
    const max=Math.max(...nums)
    const min=Math.min(...nums)
    const arr= nums.filter((item)=>(item !==max && item !==min))
    if(arr.length==0){
        return -1
    }
    return  result= Math.min(...arr)
   
};

console.log(findNonMinOrMax([3,2,1,4]))