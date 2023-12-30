// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

function treeSum(arr){

    var array=[]
    for(var i=0;i<arr.length;i++)
    {
        for (let j = 0; j < arr.length; j++) {
         for (let k =0; k < arr.length; k++) {
            if(arr[i]+arr[j]+arr[k]===0&& i!=j&& i!=k&& j!=k)
            {
              array.push([arr[i],arr[j],arr[k]])
             

            }
            
         }
            
        }

    }
     let result = array.filter((item,index)=>array.indexOf(item)===0||array.indexOf(item)===2)

    return result
    
}

nums = [-1,0,1,2,-1,-4]
console.log(treeSum(nums))