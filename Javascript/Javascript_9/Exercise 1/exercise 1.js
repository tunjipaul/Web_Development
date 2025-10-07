function tellJoke(){
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve("😂 Here's a funny joke!")
        }, 3000);
    });
}

//using the promise
tellJoke()
.then(function(result){
 console.log("IS it funny:", result)
})
.catch(function(error){
    console.log("Error:", error);
});

console.log("This runs while waiting...");