//Perintah ketika di scroll munculkan kelas / hapus class navbar-fixed
window.onscroll = function () {
  const head = document.querySelector("header");
  const patokan = head.offsetTop;
  const totop = document.querySelector("#totop");

  if (patokan < window.pageYOffset) {
    head.classList.add("navbar-fixed");
    totop.classList.remove("hidden");
    totop.classList.add("flex");
  } else {
    head.classList.remove("navbar-fixed");
    totop.classList.remove("flex");
    totop.classList.add("hidden");
  }
};
//ini bagian hamburger
const hamburger = document.querySelector("#hamburger");
const navbarMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navbarMenu.classList.toggle("hidden");
});

// click diluar hamburger
window.addEventListener("click", function (e) {
  if (e.target !== hamburger) {
    hamburger.classList.remove("hamburger-active");
    navbarMenu.classList.add("hidden");
  }
});

// dark mode toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// pintasan toggle sesuai mode
if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  document.documentElement.classList.add("dark");
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}
