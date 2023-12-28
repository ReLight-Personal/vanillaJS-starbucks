const searchEl = document.querySelector(".search");
const searchInpuEl = searchEl.querySelector("input");

searchEl.addEventListener("click", () => {
  searchInpuEl.focus();
});

searchInpuEl.addEventListener("focus", () => {
  searchEl.classList.add("focused");
  searchInpuEl.setAttribute("placeholder", "통합검색");
});

searchInpuEl.addEventListener("blur", () => {
  searchEl.classList.remove("focused");
  searchInpuEl.setAttribute("placeholder", "");
});

const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();
