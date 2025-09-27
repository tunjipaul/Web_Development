//1. shopping List
//an array of shopping items.
let shoppingList = ["milk", "egg", "maggi", "oil", "rodo"];
//adding an item to the end of the list using .push() method in arrays.
let newItem = shoppingList.push("hypo");
console.log(shoppingList);
//removing an item from the front using .shift() method in arrays.
let removedItem = shoppingList.shift();
console.log(shoppingList);
console.log(removedItem);

//display the total number of items.
totalItems = shoppingList.length;
console.log(totalItems);

for (let i = 0; i < shoppingList.length; i++) {
    console.log(`Item ${i + 1}: ${shoppingList[i]}`);
}

// 2. students grade analyzer.


let grades = [];


function getAverage(grades) {

    let totalGrade = 0;
    for (let grade of grades) {
        totalGrade += grade; //this means total = total + grade; i.e. add all the grade in grades to get the total grades
    }

    let averageGrades = totalGrade / grades.length;
    console.log(`Average Grades: ${averageGrades}`);
}
getAverage(grades);

function getHighest(grades) {
    let highestGrade = Math.max(...grades);
    console.log(highestGrade);
}

getHighest(grades);

function getLowest(grades) {
    let lowestGrades = Math.min(...grades);
    console.log(lowestGrades)
}

getLowest(grades);

function getPassRate(grades){
    let passing = 0;
    for (let grade of grades){
         if (grade >= 50){
          passing++;
         }
    }
    console.log(`Passed Grades: ${passing}`)
    let passRate = 0;
    passRate = (passing/grades.length) * 100
    console.log(`PassRate: ${passRate}%`);
}

getPassRate(grades)

// MovieRatingSystem


let movies = [];

let ratings = [];

function addMovie(movie, rating){

 movies.push(movie);
 ratings.push(rating);
 console.log("Added movies with rating:", movie, ':', rating)

 console.log("Movies:", movies)
 console.log("Ratings:", ratings)
}

addMovie('KotoAye', 9.4);
addMovie('GOT', 9.9)



function getAverageRating(){
    let totalRating = 0;
    for (let rating of ratings){
        totalRating += rating;
    }
    console.log(`TotalRating: ${totalRating}`);
    let averageRating = (totalRating/ratings.length)
    console.log(`Average Rating: ${averageRating}`);
}

function getTopMovie(){
    let highestRated = Math.max(...ratings);
    console.log(highestRated);
}


function getSummary(){
    console.log("Movie Summary:")
    for (i = 0; i < movies.length; i++){
        console.log(movies[i], "-", ratings[i]);
    }
}

getSummary()

