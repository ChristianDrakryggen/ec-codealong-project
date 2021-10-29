let menuOpen = false;
const menuBtn = document.querySelector(".menu-button");
const menu = document.querySelector(".mobile-menu");
const links = document.getElementsByClassName("mobile-link");

function toggleMenu() {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
    menu.style.right = "0%";
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
    menu.style.right = "-100%";
  }
}

window.addEventListener("load", function () {
  menuBtn.addEventListener("click", toggleMenu);
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", toggleMenu);
  }
});
