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
