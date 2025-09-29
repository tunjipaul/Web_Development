//apply common function patterns


// isStrongPassword()



function isStrongPassword(password) {
    let numberIncluded = false;
    let specialCharacters = "_-=+!@#$%^&*(),.?\":{}|<>'/[]";
    let specialPresent = false;

    for (char of password) {
        if (!isNaN(char)) {
            numberIncluded = true;

        }
        if (specialCharacters.includes(char)) {
            specialPresent = true;
        }

        if (numberIncluded && specialPresent) {
            break;
        }



    } if (password.length < 8) {
        console.log("Your password is too short, it must be at least 8 characters.")
    }
    else if (numberIncluded === false && specialPresent === false) {
        console.log("Weak Password! Your Password must have at least a number and special character")
    }
    else if (numberIncluded === false) {
        console.log("Weak Password, Your password must contain at least number")
    }

    else if (specialPresent === false) {
        console.log("Your Password must contain at least a special character")

    }
    else {
        console.log("Strong Password!! Welcome.")
    }





}

//only God can can!!!!!!!!!!!



//create a formatter function!!
function formatPercentage(value) {
    console.log(`${value.toFixed(1)}%`)
}

//create a calculator function.
function calculateCompoundInterest(principal, rate, years) {
    console.log(`Amount: ${principal * (1 + rate / 100) ** years}`)
}

//create a decision maker function
function canGraduate(credits, gpa) {
    if (typeof (credits) !== "number" || typeof (gpa) !== "number") {
        console.log("You have inputed an invalid input")
    }
    else if(gpa < 0.0 || gpa > 7.0){
        console.log("GPA cannot be lower or higher than 0.0 or 7.0 respectively ")
 
    }
    else if (credits < 120 || gpa < 2.0) {
        console.log("You do not have the required results to graduate.")
    }
    else {
        console.log(`Your credit is: ${credits} and gpa is: ${gpa}
            Happy Convocation!!!!!`)
    }
}



//utility function.
 function reverseWords(sentence){
    let reversedString = "";
    for(let i = sentence.length-1; i >= 0; i--){
        reversedString += sentence[i];
    } 
    console.log(reversedString[0].toUpperCase() + reversedString.slice(1)); 


 }


