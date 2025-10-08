const form = document.getElementById("studentForm");
const tableBody = document.getElementById("studentTable");
const searchInput = document.getElementById("search");

let students = JSON.parse(localStorage.getItem("students")) || [];

// Calculate average and performance
function getPerformance(avg) {
  if (avg >= 75) return { text: "Excellent", class: "excellent" };
  if (avg >= 50) return { text: "Good", class: "good" };
  return { text: "Needs Help", class: "needs-help" };
}

// Render students
function renderTable(data) {
  tableBody.innerHTML = "";
  data.forEach((student, index) => {
    const { name, className, image, average, performance } = student;
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><img src="${image}" alt="photo"></td>
      <td>${name}</td>
      <td>${className}</td>
      <td>${average.toFixed(2)}</td>
      <td><span class="performance ${performance.class}">${performance.text}</span></td>
      <td><button class="delete" onclick="deleteStudent(${index})">Delete</button></td>
    `;
    tableBody.appendChild(row);
  });
}

// Add new student
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value;
  const className = document.getElementById("class").value.trim();
  const image = document.getElementById("image").value.trim();
  const scores = [
    parseFloat(document.getElementById("score1").value),
    parseFloat(document.getElementById("score2").value),
    parseFloat(document.getElementById("score3").value),
  ];

  const average = (scores[0] + scores[1] + scores[2]) / 3;
  const performance = getPerformance(average);

  students.push({ name, age, className, image, average, performance });
  localStorage.setItem("students", JSON.stringify(students));
  form.reset();
  renderTable(students);
});

// Delete student
function deleteStudent(index) {
  students.splice(index, 1);
  localStorage.setItem("students", JSON.stringify(students));
  renderTable(students);
}

// Search filter
searchInput.addEventListener("input", () => {
  const keyword = searchInput.value.toLowerCase();
  const filtered = students.filter((s) => s.name.toLowerCase().includes(keyword));
  renderTable(filtered);
});

// Initial render
renderTable(students);
