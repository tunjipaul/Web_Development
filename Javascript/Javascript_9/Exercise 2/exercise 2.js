function deliverOrder(order){
    return new Promise((resolve, reject) =>{
    setTimeout(() => { 
        let confirmation = Math.random() < 0.5;
         if(confirmation){
         resolve(`✅ Delivered: ${order}`);
         }
         else{
            reject(`❌ Delivery failed: ${order}`)
         }
        
    }, 2000);
    });
}

//use the promise

deliverOrder("Pizza")
  .then((message) => {
    console.log("Success:", message);
  })
  .catch((error) => {
    console.log("Error:", error);
  });