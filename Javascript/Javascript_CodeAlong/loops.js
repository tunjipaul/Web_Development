//for loop.
//do while loop
//. while loop
//. for of loop.
//. forEach loop.

// /in loops, there's a code ICI, initialization, condition, increment.

//count from 1 to 5, 

console.log("Count from 1 to 5; ");
// here , i= 1 is the initialization stating that i equals 1, and i should be less than or equal to 5 because we are counting to 5, then the increment to count from 1.
for (i = 1; i <= 5; i++){
     console.log("Count: ", i);
}

//count backwards.
console.log("------------")
//here, i = 5, i is going to 1, so from 5 to 1, since it is 5 initially, we are counting to 1 and it should stop at 1 and it'll give all values of i between 5 and 1, then the -- is used to decrement it to achieve the condition.
for (i = 5; i >= 1; i--){
    console.log("Count:", i)
}

//using loops with calculations.
console.log("Multiplication table for 3:");
for (let i = 1; i <= 10; i++) {
    let result = 3 * i;
    console.log(`3 × ${i} = ${result}`);
}
//here what happens is that we count firstly from 1- 10, then we multiply each of the result of the count by 3.
//- so we save a variable for the result to be 3 times the value of count- i from 1 to 10
// the for loop allows this process to repeat.

// Loop with different step sizes
console.log("Even numbers from 2 to 10:");
for (let i = 2; i <= 10; i += 2) {  // i += 2 means i = i + 2
    console.log("Even number:", i);
}
//the increment i+= 2, increases the step by 2 , since na even number.


// Loop through an array using index
let colors = ["red", "green", "blue", "yellow"];
console.log("Colors in the array:");
for (let i = 0; i < colors.length; i++) {
    console.log(`Color ${i + 1}: ${colors[i]}`);
}
//looping through the array iinvolves setting the array to 0 which is the initial index of the array, then 
// the condition is to compare it with the length of the array, so it won't be an infinite loop, then increment to count, in step of 1.

//for of loop and array processing.
//an easier way to go through array items.
console.log("-----------------")
for (color of colors){
    console.log("Each Color:", color)
}
