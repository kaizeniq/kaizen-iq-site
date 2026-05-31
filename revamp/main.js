const nav = document.getElementById("nav");
const burger = document.getElementById("burger");
const navLinks = document.querySelector(".nav-links");

const syncNavState = () => {
  if (!nav) return;
  nav.classList.toggle("is-scrolled", window.scrollY > 12);
};

syncNavState();
window.addEventListener("scroll", syncNavState, { passive: true });

if (burger && navLinks) {
  const closeMenu = () => {
    burger.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
    navLinks.classList.remove("is-open");
    document.body.classList.remove("nav-open");
  };

  burger.setAttribute("aria-expanded", "false");
  burger.addEventListener("click", () => {
    const isOpen = burger.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", String(isOpen));
    navLinks.classList.toggle("is-open", isOpen);
    document.body.classList.toggle("nav-open", isOpen);
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
  );

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

