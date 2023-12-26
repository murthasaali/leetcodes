// console.log("namaste")

// setTimeout(function () {
//     console.log("js")
    
// }, 5000);
// console.log("season 2")


// callbackHell🤬, pyramid of dooom

// const cart=["shoe","pant","kurta"]

// api.craeteOredr(cart,function() {
//     api.proceedToPayment(function () {
//         api.showSummary(
//             function () {
//                 api.updateWallet()
                
//             }
//         )
        
//     })
    
// })

// fetch functionn will return a promise

// const api="jkhfjhfkhlfhhlkh"
// const user= fetch(api)
// A promise is an object represents the eventual completion of an async operation
// a promise is a returned object  to which you attach callbacks , instead of passing callbacks into a function
// immutable


// const cart=["shoe","pant","kurta"]
const cart=[]
const promise  =  createOrder(cart)// order id 
console.log(promise)
promise.then((orderId)=>console.log(orderId))
.catch((err)=>console.log(err.message))


function validateCart(cart) {
    if(cart.length>0){
        return true
    }else
    {
        return false

    }
    
}

function createOrder(cart) {
    const pr = new Promise((resolve,reject)=>{

        //create an oreder

        //validate cart

        //orderId
        
        if(!validateCart(cart)){
            
            const err=new Error("cart is empty")
            reject(err)
        }

        const orderId="123"
        if(orderId){
            setTimeout(() => {
                
                resolve(orderId)
            }, 2000);
        }

    })
    return pr
    
}
