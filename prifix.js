function prefix(arr){
    const array=[]
    const start=arr[0]
    const start1=start[0]
   for (let i = 0; i < arr.length; i++) {
    if (arr[i].startsWith(start1,0)) {
        array.push(true)
        
    }
}
console.log(array)
if(array.length===arr.length){
    console.log("prifix")

}else{
    console.log("not prifix")
}
}
prefix(["hlex","hfdf","gast"])