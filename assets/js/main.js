const text = document.querySelector(".text");

document.addEventListener("mousemove", () => {
  text.textContent += "Stop moving your mouse! ";
});
