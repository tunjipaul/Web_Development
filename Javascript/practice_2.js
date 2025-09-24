// // let score = {
// //     "90"
// // }
// function getGrade() {
//     let score = Number(prompt("What is your score: "));
//     if (score === 100) {
//         console.log(`Score: ${score} -> "Outstanding! Grade: A+"`);
//     } else if (score >= 90 && score <= 99) {
//         console.log(`Score: ${score} -> "Grade: A"`);
//     } else if (score >= 80 && score <= 89) {
//         console.log(`Score: ${score} -> "Grade: B`);
//     } else if (score >= 70 && score <= 79) {
//         console.log(`Score: ${score} -> "Grade: C"`);
//     } else if (score >= 60 && score <= 69) {
//         console.log(`Score: ${score} -> "Grade: D"`);
//     } else {
//         console.log(`Score: ${score} -> "Grade: F"`);
//     }
// }

function calculatePrice() {
    let isFirstPurchase =
        prompt(
            "Is this your first time purchasing with us(yes/no): "
        ).toLowerCase() === "yes";
    let price = Number(prompt("What is the price: "));
    let customerType = prompt(
        "Are you a student/Senior/employee: ").toLowerCase();
    let discount = 0;

    if (customerType === "student") {
        discount = 0.1;
    } else if (customerType === "senior") {
        discount = 0.15;
    } else if (customerType === "employee") {
        discount = 0.2;
    }
    if (isFirstPurchase) {
        discount += 0.05;
    }
    let finalPrice = price * (1 - discount);
    console.log(`Price calculation: for ${customerType}`);
    console.log(`Original: $${price}"`);
    console.log(`Discount: ${discount * 100}%`);
    console.log(`Final price: $${finalPrice.toFixed(2)}`);

    //jesus be a shield!!!!!!!!

}

// function weatherAdvice(){
//     let temperature = Number(prompt("What is your temperature: "));
//     let isRaining = false;
//     if(temperature<=50){
//         isRaining = prompt("Is it raining?(true/false ").toLowerCase() === 'true';
//     }
 
   
//     if (temperature < 32 && isRaining){
//         console.log("Freezing Rain! Stay Inside!")
//     }
//     else if(temperature < 32 && !isRaining) {
//         console.log("Very cold, wear a heavy coat.")
//     }
//     else if(temperature >= 32 && temperature <= 60 && !isRaining){
//         console.log("Chilly, bring a jacket.")
//     }
//     else if(temperature >= 60 && temperature <= 80 && !isRaining){
//         console.log("Nice Weather!")
//     }
//     else{
//         console.log("It's hot, stay hydrated!")
//     }

//  console.log("Advice: ", isRaining ? "Bring an Umbrella" : "No umbrella needed")  

   
// }

// function atm(balance, action, amount){
// let action = prompt("do you want to withdraw/deposit: ").toLowerCase();
// let amount = prompt(`how much do you want to ${action}:` ).toLowerCase();
//    if (action === "withdraw"){
//      if (balance >= amount){
//         balance -= amount;
//         return`Withdrawal successful. New balance: $${balance}`
//      }
//      else{
//         return`Insufficient Funds, Available Balance: $${balance}`
//      }
     
//    }
//    else if (action === "deposit"){
//     balance += amount;
//     return `Transfer Successful, New Balance: $${balance}`
//    }else{
//     return `Invalid Code`
//    }

// } if (action === "withdraw"=== amount){

// }
// // console.log(atm(`${balance}, withdraw, 500`))