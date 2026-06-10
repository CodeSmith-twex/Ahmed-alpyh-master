document.addEventListener("DOMContentLoaded", () => {
  // --- DOM Elements ---
  const navbar = document.getElementById("navbar");
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const navLinksItems = document.querySelectorAll(".nav-link");
  const backToTopButton = document.querySelector(".back-to-top");

  // --- Mobile Menu ---
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });

  // --- Smooth Scroll + Close Mobile Menu ---
  navLinksItems.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const targetId = link.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: "smooth",
        });
      }

      navLinks.classList.remove("active");
      menuToggle.classList.remove("active");
    });
  });

  // --- Scroll-based Functions ---
  const handleScroll = () => {
    // Sticky Navbar
    if (window.scrollY > 50) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }

    // Back to Top Button
    if (window.scrollY > 300) {
      backToTopButton.classList.add("active");
    } else {
      backToTopButton.classList.remove("active");
    }
  };

  window.addEventListener("scroll", handleScroll);

  // --- Back to Top Button ---
  backToTopButton.addEventListener("click", (e) => {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Initial check
  handleScroll();

  // --- FAQ Accordion ---
  const questions = document.querySelectorAll(".faq-question");

  questions.forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;

      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
        question.querySelector("span").innerHTML = "+";
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
        question.querySelector("span").innerHTML = "−";
      }
    });
  });
});