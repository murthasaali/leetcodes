// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

function median(arr1,arr2){

 const merge=arr1.concat(arr2)
 console.log(merge);
 console.log(merge.length);
 const total=merge.reduce((a,b)=>a+b)
 console.log(total);
 const medm=total/merge.length
 console.log(medm);
    

}

const num1=[1,3]
const num2=[2,4]

median(num1,num2)