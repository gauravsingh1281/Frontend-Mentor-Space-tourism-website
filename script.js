const showMobileNavBtn = document.getElementById("mobile-nav-show-btn");
const closeMobileNavBtn = document.getElementById("mobile-nav-close-btn");
const mobileNav = document.querySelector(".mobile-nav-link ");
const exploreBtn = document.getElementById("explore-btn");
const explorebtnOuterArea = document.getElementById("explore-btn-outer");

showMobileNavBtn.addEventListener("click", () => {
  mobileNav.style.right = "0";
});
closeMobileNavBtn.addEventListener("click", () => {
  mobileNav.style.right = "-100%";
});

exploreBtn.addEventListener("mouseover", () => {
  explorebtnOuterArea.style.opacity = 0.3;
});
exploreBtn.addEventListener("mouseleave", () => {
  explorebtnOuterArea.style.opacity = 0;
});
