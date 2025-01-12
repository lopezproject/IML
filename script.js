document.addEventListener("DOMContentLoaded", () => {
  const frames = document.querySelectorAll(".frame");

  frames.forEach((frame) => {
    frame.addEventListener("mouseover", () => {
      const description = frame.getAttribute("data-description");
      const text = frame.querySelector("p");
      text.textContent = description;
    });
  });
});

