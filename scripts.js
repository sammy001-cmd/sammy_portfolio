// Menu toggle
const burger = document.getElementById('hamburger');
const links = document.getElementById('links');
burger.addEventListener('click', ()=> links.classList.toggle('open'));

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Scrollspy for active underline
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.links a');
const spy = () => {
  let cur = '';
  sections.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 120;
    const height = sec.offsetHeight;
    if (top >= offset && top < offset + height) cur = sec.getAttribute('id');
  });
  navLinks.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === '#' + cur) a.classList.add('active');
  });
};
window.addEventListener('scroll', spy);
spy();


  const toggleBtn = document.getElementById("toggleProjects");
  const projectGrid = document.getElementById("projectGrid");

  toggleBtn.addEventListener("click", () => {
    projectGrid.classList.toggle("show-all");
    
    if (projectGrid.classList.contains("show-all")) {
      toggleBtn.textContent = "Show Less";
    } else {
      toggleBtn.textContent = "Show More";
    }
  });

