// async
// it will always return a Promise
// suppose i return a value(watever)
// it wrap function and return a new promise
// its used to handle promise
// await is a keyword ,its only used inside anasync function

// const promise=new Promise((resolve,reject)=>{
//     resolve("promise resolve value")

// })

// async function getData(){
//     return promise

// }

// const dtapromise = getData()

// dtapromise.then((res)=>console.log(res))


const p=  new Promise((res,rej)=>{
setTimeout(() => {
    res("souban fundaaaah")  

},10000 );})

async function getFunda(){
    // js engine wa waiting for promise to resolved😂 
    const val= await p
    console.log("ali")
    console.log(val)

}

getFunda()
// function getdata(){
//     p.then((res)=>console.log(res))
//     console.log("namste")

// }
// getdata()
