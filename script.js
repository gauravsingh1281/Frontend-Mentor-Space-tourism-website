const showMobileNavBtn = document.getElementById("mobile-nav-show-btn");
const closeMobileNavBtn = document.getElementById("mobile-nav-close-btn");
const mobileNav = document.querySelector(".mobile-nav-link ");

showMobileNavBtn.addEventListener("click", () => {
  mobileNav.classList.remove("hidden");
  mobileNav.classList.add("flex");
});
closeMobileNavBtn.addEventListener("click", () => {
  mobileNav.classList.add("hidden");
  mobileNav.classList.remove("flex");
});
