const sections = document.getElementsByClassName("accordion");

for (const section of sections) {
  section.onclick = function() {
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("show");
  }
}
