// // shoppingList = ["Rope", "Belt", "Cigar", "Coke", "Powder"];

// // shoppingList.push("water");
// // console.log(shoppingList)
// // shoppingList.shift();
// // console.log(shoppingList)
// // console.log("Total Number of Shopping List:", shoppingList.length)

// // for (let i = 0; i < shoppingList.length; i++) {
// //     console.log(`Item ${i+1}: ${shoppingList[i]}`)
    
// // }

// // function formatList(list){
// //     let formatted = "";
// //     for (let i = 0; i < list.length; i++) {
// //         formatted += (`${(i+1)}.${list[i]}\n`)
// //     }
// //     return formatted;
   
// // }

// // console.log(formatList(shoppingList));

// grades = [];

// function getAverageGrades(grades) {
//     let total = 0;
//     for (let grade of grades) {
//         total += grade;
//     }
//     return total/grades.length;
// }

// function getHighest(grades){
//     let highestGrade = Math.max(...grades)
//     return highestGrade;
// }

// function getLowestGrade(grades){
//     let getLowestGrade = Math.min(...grades);
//     return getLowestGrade;
// }

// function getPassRate(grades){
//     let highScore = [];
//     for (let grade of grades) {
//         if (grade >= 50) {
//             highScore.push(grade);
//         }
        
//     }
    
//     let percentagePassed = (highScore.length/grades.length) * 100;
//     return `Percentage of those who passed: ${percentagePassed.toFixed(2)}%` ;
// }

// console.log(getPassRate([12, 34, 67]))

movies = [];
ratings = [9, 8, 7];

function addMovie(movie, rating){
    movies.push(movie);
    ratings.push(rating);
}

function getAverageRating(){
     let totalRating = 0;
     for (let r of ratings) {
        totalRating += r;
     }

     return `Average Rating: ${totalRating/ratings.length.toFixed(2)}`;
}

console.log(getAverageRating())
