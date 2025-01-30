const images = document.querySelectorAll(".img");
const navBtns = document.querySelectorAll(".nav-btn");

const slide = (index) => {
  [navBtns, images].forEach((el) => {
    el.forEach((el) => {
      el.classList.remove("active");
    });
  });
  [navBtns, images].forEach(() => {
    navBtns[index].classList.add("active");
    images[index].classList.add("active");
  });
};

navBtns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    slide(i);
  });
});
