
    var finalString = function(s) {
        const index=s.indexOf("i")
        let count=0

    for (let index = 0; index < s.length; index++) {
       if (s[index]==="i") {
        count++
       }
        
    }
    if (count%2!==0) {
         prefix=(s.slice(0,index).split("").reverse().join("")+s.slice(index)).replace(/i/g,"")
    }
    else{
        prefix=(s.slice(0,index)+s.slice(index)).replace(/i/g,"")
    }
   
   return prefix
    
};

console.log(finalString("striiing"))
    