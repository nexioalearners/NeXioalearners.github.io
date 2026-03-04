function goToPage(page) {
  document.body.style.opacity = "0";
  document.body.style.transition = "0.4s ease";

  setTimeout(() => {
    window.location.href = page;
  }, 300);
}
/* ===============================
   AUTO GENERATE MULTIPLE BUBBLES
================================ */

const neonBg = document.querySelector(".neon-bg");

for (let i = 0; i < 65; i++) {   // change number for more bubbles
  const bubble = document.createElement("div");
  bubble.classList.add("floating-bubble");

  const size = Math.random() * 50 + 30; // size between 20px - 80px
  bubble.style.width = size + "px";
  bubble.style.height = size + "px";

  bubble.style.top = Math.random() * 100 + "%";
  bubble.style.left = Math.random() * 100 + "%";

  bubble.style.animationDuration = (Math.random() * 10 + 10) + "s";
  bubble.style.animationDelay = Math.random() * 5 + "s";

  neonBg.appendChild(bubble);
}
