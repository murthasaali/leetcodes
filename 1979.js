var findGCD = function(nums) {

    const small=Math.min(...nums)
    const large=Math.max(...nums)
    console.log(small,large)
    var arr=[]
   for (let i = 1; i <=small; i++) {
    if (large%i===0&&small%i===0) {
         arr.push(i)
         
        }
        
    }
    console.log(arr)
    // console.log()
    return Math.max(...arr)
    
};
console.log(findGCD([2,5,6,9,10]))