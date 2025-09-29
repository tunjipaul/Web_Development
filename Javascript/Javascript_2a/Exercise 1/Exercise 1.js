//function to get grades.
function getGrade() {
    let score = Number(prompt("What is your score: "));
    if (score === 100) {
        console.log(`Score: ${score} -> "Outstanding! Grade: A+"`);
    } else if (score >= 90 && score <= 99) {
        console.log(`Score: ${score} -> "Grade: A"`);
    } else if (score >= 80 && score <= 89) {
        console.log(`Score: ${score} -> "Grade: B`);
    } else if (score >= 70 && score <= 79) {
        console.log(`Score: ${score} -> "Grade: C"`);
    } else if (score >= 60 && score <= 69) {
        console.log(`Score: ${score} -> "Grade: D"`);
    } else {
        console.log(`Score: ${score} -> "Grade: F"`);
    }
}