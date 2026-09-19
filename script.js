const title = document.querySelector(".wavy");
if (title) {
  title.innerHTML = [...title.textContent].map((char, i) => {
    const safe = char === " " ? "&nbsp;" : char;
    return `<span style="animation-delay:${i * 0.06}s">${safe}</span>`;
  }).join("");
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = `${i * 0.08}s`;
        entry.target.classList.add("reveal");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll("section, .polaroid").forEach((el) => observer.observe(el));
