const counters = [
  { id: "universities", value: 50, suffix: "+" },
  { id: "courses", value: 200, suffix: "+" },
  { id: "admissions", value: 1500, suffix: "+" },
  { id: "satisfaction", value: 99, suffix: "%" }
];

let started = false;

function animateCounter(id, target, suffix = "", duration = 2000) {
  const el = document.getElementById(id);
  let start = 0;
  const stepTime = 20;
  const increment = target / (duration / stepTime);

  const interval = setInterval(() => {
    start += increment;
    if (start >= target) {
      el.textContent = target + suffix;
      clearInterval(interval);
    } else {
      el.textContent = Math.floor(start) + suffix;
    }
  }, stepTime);
}

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}

window.addEventListener("scroll", () => {
  const container = document.querySelector(".counter-container");
  if (!started && isInViewport(container)) {
    counters.forEach(counter => {
      animateCounter(counter.id, counter.value, counter.suffix);
    });
    started = true;
  }
});