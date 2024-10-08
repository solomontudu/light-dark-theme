const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

// dark or light images
function imageMode(mode) {
  image2.src = `img/undraw_proud_coder_${mode}.svg`;
  image1.src = `img/undraw_feeling_proud_${mode}.svg`;
  image3.src = `img/undraw_conceptual_idea_${mode}.svg`;
}

// dark mode fn
function darkMode() {
  nav.style.backgroundColor = "rgb(0 0 0 / 50%)";
  textBox.style.backgroundColor = "rgb(255 255 255 / 50%)";
  toggleIcon.children[0].textContent = "Dark Mode";
  toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
  imageMode("dark");
}

// dark mode fn
function lightMode() {
  textBox.style.backgroundColor = "rgb(0 0 0 / 50%)";
  nav.style.backgroundColor = "rgb(255 255 255 / 50%)";
  toggleIcon.children[0].textContent = "Loght Mode";
  toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  imageMode("light");
}

// switch theme dynamically
function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    darkMode();
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    lightMode();
  }
}

// event listner
toggleSwitch.addEventListener("change", switchTheme);

// check local storeage for theme
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    darkMode();
  }
}
