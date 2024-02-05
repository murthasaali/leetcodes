var maximumNumberOfStringPairs = function(words) {
    let count=0
   
    for (let index = 0; index < words.length; index++) {
       for (let j = index+1; j < words.length; j++) {
        
        if(words[index]===words[j]||words[index]===words[j].split("").reverse().join("")){
            count++
            console.log(words[index])
        }
        
       }
        
    }
    return count
};
console.log(maximumNumberOfStringPairs(["cd","ac","dc","ca","zz"]))