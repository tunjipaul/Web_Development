class Student {
  constructor(name, age, grades) {
    this.name = name;
    this.age = age;
    this.grades = grades;
  }

  calculateAverage() {
    if (this.grades.length === 0) return 0;
    let total = this.grades.reduce((sum, grade) => sum + grade, 0);
    return total / this.grades.length;
  }

  getDetails() {
    let avg = this.calculateAverage();
    let status = avg < 50 ? " Failed" : " Passed";
    return `Student: ${this.name}, Age: ${this.age}, Average: ${avg.toFixed(
      2
    )} -->> ${status}`;
  }
}

let student1 = new Student("Alice", 16, [70, 85, 90]);
let student2 = new Student("Bob", 17, [40, 45, 30]);

console.log(student1.getDetails());
console.log(student2.getDetails());
