const background = document.querySelector("body");
const toggle = document.querySelector(".toggle");
toggle.style.transform = "rotate(0)"; // offset initial rotation
toggle.addEventListener("click", () => {
  toggle.removeAttribute("style");
  toggle.classList.toggle("toggled");
  background.classList.toggle("toggledBg");

  setTimeout(() => {
    toggle.style.transform = "rotate(0)";
  }, 600);
});
