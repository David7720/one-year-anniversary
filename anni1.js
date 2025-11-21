/* PAGE SWITCHING */
const buttons = document.querySelectorAll(".sidebar button");
const pages = document.querySelectorAll(".page");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    let target = btn.getAttribute("data-page");

    // hide all
    pages.forEach(p => p.classList.remove("active"));

    // show chosen
    let page = document.getElementById(target);
    page.classList.add("active");

    // restart fade animation
    page.classList.remove("fade");
    void page.offsetWidth;
    page.classList.add("fade");
  });
});


/* FALLING PETALS */
function createPetal() {
  const petal = document.createElement("div");
  petal.classList.add("petal");

  petal.style.left = Math.random() * window.innerWidth + "px";
  petal.style.animationDuration = 4 + Math.random() * 5 + "s";

  document.body.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 9000);
}

setInterval(createPetal, 700);
