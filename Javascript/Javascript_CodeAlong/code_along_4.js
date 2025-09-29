// let student = {
//     name: "alice",
//     age: 20,
//     grade: 85
// };

// console.log("Object:");
// console.log("Student Object:", student);
// console.log("Student Name:", student.name);
// console.log("student age:", student.age);
// console.log("student grade:", student.grade);

// console.log("") //empty line.

// //objects are much cleaner for related data

// let car = {
//     make: "toyota",
//     model: "camry",
//     year: 2020,
//     color: "blue"
// };

// console.log("car info:");
// console.log(`car: ${car.year} ${car.make} ${car.model} ${car.color}`);

// //creating objects 
// let person = {
//     firstName: "john",
//     lastName: "Doe",
//     age: 30,
//     city: "boston"
// };

// let product = {
//     name: "laptop",
//     price: 999,
//     inStock: true,
//     category: "electronics"
// };

// console.log("Person Object:", person);
// console.log("Product Object:", product);

// //two ways to access properties:

// //1. dot notation (most common)
// console.log("using dot notation:");
// console.log("first name:", person.firstName);
// console.log("Product name:", product.name);
// console.log("Product Price:", product.price);

// console.log(""); //empty line

// //2. bracket notation (for dynamic access)
// console.log("Using bracket notation:");
// console.log("last name:", person["lastName"]);
// console.log("In stock:", product["inStock"]);

// //bracket notation useful for dynamic property names

// let propertyName = "city";
// console.log("City: ", person["propertyName"]);

// console.log("") //empty line.

// //building strings with object properties

// console.log("formatted output:");

// console.log(`${person.firstName} ${person.lastName} is ${person.age} years old and lives in ${person.city}.`);

// console.log(`The ${product.name} costs $${product.price} and is ${product.inStock ? "available" : "out of stock"}. `);

// //modifying objects 
// console.log("")// empty line.
// //creating a book object
// let book ={
//     title: "javascript basics",
//     author: "jane smith",
//     pages: 200,
//     isRead: false
// };

// console.log("Original Book:", book);

// console.log("") //empty line

// //modifying existing properties

// book.pages = 250; // update page count
// book.isRead = true; // mark as read
// book.author = "Jane Doe"; //update author

// console.log("After Modification:", book);

// console.log("") //empty line

// //adding new properties

// book.genre = "programming"; //add genre
// book.rating = 4.5; // add rating
// book.publisher = 2023; //add publish year


// console.log("After adding properties:", book);
// console.log("") //empty line

// //removing properties
// delete book.isRead; //remove the isRead property

// console.log("After removing isRead:", book);
// console.log("") //empty line

// //working with a user profile

// let user = {
//     username: "john_doe",
//     email: "john@example.com"
// };

// console.log("Initial user:", user);

// //add more user info

// user.firstName = "john";
// user.lastName = "doe";
// user.age = 25;
// user.isActive = true;

// console.log("Update user:", user);

// //update email
// user.email = "john.doe@newcompany.com";
// console.log("User with new email:", user);

// //keypoints
// //objects are mutable - you can change them after creation.
// //use = to modify or add properties.
// // -use "delete" to remove properties.
// //use flexible for changing data

//object methods(functions)
// let calculator ={
//     brand: "BasicCalc",
//     //method to add 2 numbers
//     add: function(a,b){
//         return a + b;
//     },
//    //modern shorthand syntax (no, "function" keyword)
//    subtract(a, b){
//     return a - b;
//    },

//    multiply(a, b){
//     return a * b;
//    },
   
//    //method that uses object's own properties

//    getBrand(){
//     return this.brand; //'this' refers to the calculator object
//    }


// };

// console.log("Calculator Brand:", calculator.getBrand());
// console.log("5 + 3 =", calculator.add(5, 3));
// console.log("5 - 3 =", calculator.subtract(5, 3));
// console.log("5 x 3 =", calculator.multiply(5, 3));
// console.log("Brand: ", calculator.getBrand())
// console.log(""); //empty line

// more practical example - a student object with methods

// let student = {
//     name: "alice johnson",
//     scores: [85, 92, 78, 96],

//     //method to add new score
//     addScore(score){
//         this.scores.push(score);
//         return `Added score: ${score}. Total scores: ${this.scores.length}`;
//     },

//     //method to calculate average
//     getAverage(){
//         let total = 0;
//         for (let score of this.scores){
//             total += score;
//         }
//         return total / this.scores.length;
//     },
    
//     //method to get student info

//     getInfo(){
//         let average = this.getAverage();
//         return `${this.name}: Average ${average.toFixed(1)}% (${this.scores.length} tests)`;
//     }



// };

// console.log("Student Info:", student.getInfo());
// console.log(student.addScore(89));
// console.log("Update info:", student.getInfo());
// console.log("All scores:", student.scores);

// console.log("")


//bank account example.

// let account ={
//     holderName: "sarah wilson",
//     balance: 1000,

//     deposit(amount){
//         if (amount > 0){
//             this.balance += amount;
//             return `Deposited $${amount}. New balance: $${this.balance};`
//         }
//         return "Invalid deposit amount";
//     },


//     withdraw(amount){
//         if (amount > 0 && amount <= this.balance){
//             this.balance -= amount;
//             return `Withdrew $${amount}. New balance:
//             $${this.balance};`
//         }
//         return "Invalid withdrawal";
//     },
//     getBalance(){
//       return `${this.holderName}'s balance:
//       $${this.balance}`;
//     }

// };

// console.log(account.getBalance());
// console.log(account.deposit(250));
// console.log(account.withdraw(100));
// console.log(account.getBalance());

//arrays of objects

//array of student objects - very common pattern

let students = [
    {
        name: "alice",
        age: 20,
        grade: 85,
        major: "computer science"
    },
    {
        name: "bob",
        age: 19,
        grade: 92,
        major: "mathematics"
    },
    {
        name: "charlie",
        age: 21,
        grade: 78,
        major: "physics"
    }
];

// console.log("All students:", students);
// console.log("") //empty line.

// //display each student

// console.log("Student List:");
// for (let student of students){
//     console.log(`${student.name}: ${student.grade}% (${student.major})`);
// }

// console.log(""); //empty line

//find students with high grades
let highPerformers = [];
for (let student of students){
    if (student.grade >= 85){
        highPerformers.push(student);
    }
}

console.log("High performers (>=85%):");
for (let student of highPerformers){
    console.log(` ${student.name}: ${student.grade}%`);
}

console.log("") //empty line

//calculate average grade

let totalGrade = 0;
for (let student of students){
    totalGrade += student.grade;
}

let averageGrade = totalGrade / students.length;
console.log(`Class Average: ${averageGrade.toFixed(1)}%`);

console.log("") //empty line.

//add a new student

let newStudent = {
    name: "diana",
    age: 20,
    grade: 88,
    major: "chemistry"
};

students.push(newStudent);
console.log(`Added ${newStudent.name}. Total Students: ${students.length}`);

console.log(""); //empty line

//update a student's grade

for (let student of students){
    if (student.name === "charlie"){
        student.grade = 85; //charlie improved!
        console.log(`Updated ${student.name}'s grade to ${student.grade}%`);
        break;
    }
}

console.log("updated student list:");
for (let student of students){
    console.log(`${student.name}: ${student.grade}%`);
}