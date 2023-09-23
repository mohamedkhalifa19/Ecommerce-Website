const navbar = document.querySelector(".navbar");
const menu = document.getElementById("menu-icon");
menu.addEventListener("click", () => {
  navbar.classList.toggle("open");
  menu.classList.toggle("bx-x");
});

window.addEventListener("scroll", () => {
  navbar.classList.remove("open");
  menu.classList.remove("bx-x");
});
