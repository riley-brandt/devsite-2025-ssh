// =========== NEW RESPONSIVE NAV BAR =============

function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
  const overlay = document.getElementById("overlay");
  overlay.style.display = "block";

}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
  const overlay = document.getElementById("overlay");
  overlay.style.display = "none";
}
