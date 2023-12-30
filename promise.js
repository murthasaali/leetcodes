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

// const cart = ["shoe", "pant", "kurta"];
// // const cart=[]
// const promise = createOrder(cart); // order id
// console.log(promise);

// promise
//   .then((orderId) => {
//     console.log(orderId);
//     return orderId;
//   })
//   .then((orderId) => {
//     return proceedToPayment(orderId);
//   })
//   .then((paymentStatus) => {
//     console.log(paymentStatus); // Log the payment status here
//   })
//   .catch((err) => console.log(err.message));

// function validateCart(cart) {
//   return cart.length > 0;
// }

// function createOrder(cart) {
//   return new Promise((resolve, reject) => {
//     //validate cart
//     if (!validateCart(cart)) {
//       const err = new Error("Cart is empty");
//       reject(err);
//     } else {
//       // orderId generation should be inside the cart validation block
//       const orderId = "123";
//       setTimeout(() => {
//         resolve(orderId);
//       }, 2000);
//     }
//   });
// }

// function proceedToPayment(orderId) {
//   return new Promise((resolve, reject) => {
//     // Simulating payment processing
//     // Assuming the payment is successful
//     resolve("payment successful");
//   });
// }





// promise.all ♨🛎😁

// usecase:- 
// its takes an array of promises 
// [p1,p2,p3] like:-
//  promise.all([p1,p2,p3])
// p1 takes 3 sec to come to the picture
// p2 takes 1 sec to come to the picture
// p3 takes 2 sec to come to the pictur
// all the cases are succuuss, in this case promise.all return [val1,val2,val3]
// after 3 sec the result will be printed 
// if p2 rejected  immediatly return error after 1sec 
// and promise.all not wait not all of them 
// its acts as alll or none 
// it will not wait the other promises


// promise.allsettled()
// if resolve all promises will return the result
// when a promise reject immediatly return the err
//  and move to other promise

// aggregate error

const p1= new Promise((resolve,rej)=>{
setTimeout(() => {
    rej("p1")
    
}, 2000);
})
const p2= new Promise((resolve,rej)=>{
setTimeout(() => {
    rej("p2")
    
}, 1000);
})
const p3= new Promise((resolve,rej)=>{
setTimeout(() => {
    rej("p3")
    
}, 5000);
})


Promise.any([p1,p2,p3]).then(res=>console.log(res)).catch(err=>console.log(err))