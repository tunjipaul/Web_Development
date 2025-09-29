//scope examples.

//globalMessage -> available everywhere.

let globalMessage = "I'm available everywhere";

function demonstrateScope(){
    //function scope; only available in this function;
    let functionMessage = "I'm available in this function only."

console.log("Inside Function:")
console.log('global message', globalMessage);

//can access global.

console.log('FunctionMessage:', functionMessage);

//can access local
}

