function palindrome(text){
    if (typeof text==="string") {
        const arr =text.split("")
        const text1=arr.toString()
        const arr1=arr.reverse().toString()
        if(text1===arr1)
        {
            console.log("palindrom")
        }
        else{
            console.log("not palindrok")
        } 
    }else{
       const d= text.toString()
        const arr=d.split("")
        const text1=arr.toString()
        const arr1=arr.reverse().toString()
        if(text1===arr1)
        {
            console.log("palindrom")
        }
        else{
            console.log("not palindrok")
        }

    }

    
}
text="malayalam"
palindrome(text)