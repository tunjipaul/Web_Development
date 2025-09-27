let names = [];
let grades = [];
function addStudent(name, grade) {
  names.push(name);
  grades.push(grade);

  console.log(`Student Name: ${name}, Grade: ${grade}`);
  console.log("Student Names:", names);
  console.log("Student Grades:", grades);
}

addStudent("paul", 45);
addStudent("yinka", 67);

function calcAverage(grades) {
  let totalGrade = 0;
  for (let grade of grades) {
    totalGrade += grade;
  }

  let averageGrade = totalGrade / grades.length;
  console.log("Average Class Grade:", averageGrade);
  return averageGrade;
}


function highestAndLowestGrade(grades) {
  let highestGrade = Math.max(...grades);
  let lowestGrade = Math.min(...grades);
  console.log("Class Highest Grade: ", highestGrade);
  console.log("Class Lowest Grade: ", lowestGrade);
  return {highestGrade, lowestGrade}
}




function letterGrade(grade){
    if (grade === 100){
        return "A+";
    }
    else if (grade >= 90){
        return "A-";
    }
     else if (grade >= 80){
        return "A";
    }
     else if (grade >= 70){
        return "B";
    }
     else if (grade >= 60){
        return "C";
    }
     else if (grade >= 55){
        return "D";
    }
    else{
        return "F";
    }
    

}

function gradeCategorizer(names, grades) {

    
  for (i = 0; i < grades.length; i++) {
    let name = names[i]
    let grade = grades[i];
    let letter = letterGrade(grade); 
    console.log(`Hi ${name}, Your score -> ${grade}, Grade -> ${letter} `); 
}
  
}

gradeCategorizer(names, grades);


