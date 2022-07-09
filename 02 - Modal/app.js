const openBtn = document.querySelector("#btn-open");
const modalContainer = document.querySelector("#modal-container");
const closeBtn = document.querySelector(".btn-close");

openBtn.addEventListener(
  "click",
  () => (modalContainer.style.display = "block")
);

closeBtn.addEventListener(
  "click",
  () => (modalContainer.style.display = "none")
);

window.addEventListener("click", (e) => {
  if (e.target === modalContainer) modalContainer.style.display = "none";
});
