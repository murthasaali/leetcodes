// console.log("namaste")

// setTimeout(function () {
//     console.log("js")
    
// }, 5000);
// console.log("season 2")


// callbackHell🤬, pyramid of dooom

const cart=["shoe","pant","kurta"]

api.craeteOredr(cart,function() {
    api.proceedToPayment(function () {
        api.showSummary(
            function () {
                api.updateWallet()
                
            }
        )
        
    })
    
})

