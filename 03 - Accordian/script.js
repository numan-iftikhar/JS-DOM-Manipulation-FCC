const accordian = document.querySelectorAll(".content");

accordian.forEach((el) => {
  el.addEventListener("click", () => el.classList.toggle("active"));
});
