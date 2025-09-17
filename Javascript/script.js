var about = document.getElementById("about");
var about_container = document.getElementById("about-container");
var contact = document.getElementById("contact");
var contact_container = document.getElementById("contact-container");
var skills = document.getElementById("skills");
var skills_container =document.getElementById("skills-container");

about.onclick = () =>{
  about_container.style.display = "block";
  contact_container.style.display = "none";
  skills_container.style.display = "none";
}
contact.onclick = () =>{
  about_container.style.display = "none";
  contact_container.style.display = "block";
  skills_container.style.display = "none";
}

skills.onclick = () => {
  about_container.style.display = "none";
  contact_container.style.display = "none";
  skills_container.style.display = "block";
}