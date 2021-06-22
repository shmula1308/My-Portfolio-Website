const colors = ["#3CC151", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

const numShapes = 50;
const shapes = [];

for (let i = 0; i < numShapes; i++) {
  let shape = document.createElement("div");
  shape.classList.add("shape");
  shape.style.background = colors[Math.floor(Math.random() * colors.length)];
  shape.style.left = `${Math.floor(Math.random() * 100)}vw`;
  shape.style.top = `${Math.floor(Math.random() * 100)}vh`;
  shape.style.transform = `scale(${Math.random()})`;
  shape.style.width = `${Math.random()}em`;
  shape.style.height = shape.style.width;
  shape.style.opacity = "0.1";

  shapes.push(shape);
  document.querySelector(".aside").append(shape);
}

// Keyframes
shapes.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12,
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)", opacity: "0.1" },
      {
        transform: `translate(${to.x}rem, ${to.y}rem)`,
      },
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out",
    }
  );
});

// DAY/NIGHT Mode Switch
document.querySelector(".planet").addEventListener("click", (ev) => {
  document.querySelector(".planet").classList.toggle("day");
  document
    .querySelectorAll(".spots")
    .forEach((spot) => spot.classList.toggle("dissolveSpots"));
  document.querySelector("body").classList.toggle("dayBg");
});

// Portfolio overlays
const projects = document.querySelector(".projects__container");
const overlay = document.querySelector(".overlay");

// When user clicks the portfolio project thumbnail, overlay appears.
projects.addEventListener("click", (event) => {
  const project = event.target.closest(".project");
  const overlay = project.querySelector(".overlay");
  overlay.style.top = "0%";
});

// When use clicks the close button, overlay disappears.
projects.addEventListener("click", (event) => {
  if (event.target.closest(".closeBtn")) {
    const overlay = event.target.parentElement.parentElement;
    overlay.style.top = "100%";
  }
});
