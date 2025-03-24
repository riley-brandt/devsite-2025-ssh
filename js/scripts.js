/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
// function menuButtonfunc() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "topnav") {
//     x.className += " responsive";
//   } else {
//     x.className = "topnav";
//   }
// }

// ============== Test Nav Bar ===============

// document.getElementById("nav-toggle").addEventListener("click", function () {
//   document.querySelector(".nav").classList.toggle("active");
// });

// =========== NEW RESPONSIVE NAV BAR =============

const theBody = document.querySelector("body");
const openNav = document.querySelector(".menu-bar button");
const closeNav = document.querySelector(".close-nav button");
const Navbar = document.querySelector(".navbar");

// Hiding body scroll when mobile navigation menu opens
function bodyScroll() {
  if (Navbar.classList.contains("show")) {
    theBody.classList.add("hide-scroll");
  } else if (theBody.classList.contains("hide-scroll")) {
    theBody.classList.remove("hide-scroll");
  }
}

function showHide() {
  Navbar.classList.toggle("show");
  bodyScroll();
}

openNav.onclick = showHide;
closeNav.onclick = showHide;
