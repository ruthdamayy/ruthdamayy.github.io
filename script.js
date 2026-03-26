/* =========================
   SMOOTH SCROLL REVEAL
========================= */
const elements = document.querySelectorAll(".work-item, .about, .contact");

function reveal() {
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", reveal);


/* =========================
   PARALLAX HERO
========================= */
const heroBg = document.querySelector(".hero-bg");

window.addEventListener("scroll", () => {
  let offset = window.scrollY;
  heroBg.style.transform = `translateY(${offset * 0.3}px)`;
});


/* =========================
   3D TILT PROJECT
========================= */
const cards = document.querySelectorAll(".work-item img");

cards.forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -(y / rect.height - 0.5) * 10;
    const rotateY = (x / rect.width - 0.5) * 10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
  });
});


/* =========================
   CUSTOM CURSOR
========================= */
const cursor = document.createElement("div");
const outline = document.createElement("div");

cursor.classList.add("cursor");
outline.classList.add("cursor-outline");

document.body.appendChild(cursor);
document.body.appendChild(outline);

let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  cursor.style.top = mouseY + "px";
  cursor.style.left = mouseX + "px";

  outline.style.top = mouseY + "px";
  outline.style.left = mouseX + "px";
});
