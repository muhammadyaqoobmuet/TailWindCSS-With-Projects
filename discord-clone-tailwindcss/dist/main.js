const sideMenu = document.querySelector("#sideMenu");
const menuBtn = document.querySelector("#menuBtn");
const closeBtn = document.querySelector("#closeBtn");

menuBtn.addEventListener("click", function () {
  sideMenu.style.width = "288px";
});

closeBtn.addEventListener("click", function () {
  sideMenu.style.width = "0";
});

