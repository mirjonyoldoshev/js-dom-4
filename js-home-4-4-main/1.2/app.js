const body = document.querySelector("body");
const sidebar = document.querySelector(".sidebar")

body.addEventListener("click", () => {
     sidebar.classList.toggle("shrink")
})