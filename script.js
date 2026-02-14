document.addEventListener("DOMContentLoaded", () => {
  // --- DOM Elements ---
  const navbar = document.getElementById('navbar');
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const navLinksItems = document.querySelectorAll('.nav-link');
  const backToTopButton = document.querySelector(".back-to-top");
  const skillsSection = document.getElementById('skills');
  const skillProgressBars = document.querySelectorAll(".skill-progress");

  // --- Mobile Menu ---
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });

  // Close menu when a link is clicked
  navLinksItems.forEach((link) => {
    link.addEventListener("click", (e) => {
      // Smooth scroll
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetPosition = document.querySelector(targetId).offsetTop - 70;
      window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
      });

      // Close menu
      navLinks.classList.remove("active");
      menuToggle.classList.remove("active");
    });
  });

  // --- Scroll-based Functions ---
  let skillsAnimated = false;
  const handleScroll = () => {
    // Sticky Navbar
    if (window.scrollY > 50) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }

    // Back to Top Button
    if (window.scrollY > 300) {
      backToTopButton.classList.add('active');
    } else {
      backToTopButton.classList.remove('active');
    }

    // Animate skills on scroll (runs only once)
    if (!skillsAnimated) {
      const sectionTop = skillsSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (sectionTop < windowHeight - 100) {
        skillProgressBars.forEach((bar) => {
          const percent = bar.getAttribute("data-percent");
          bar.style.width = percent + "%";
        });
        skillsAnimated = true; // Prevents re-animation
      }
    }
  };

  window.addEventListener("scroll", handleScroll);

  // --- Back to Top Button Click ---
  backToTopButton.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });

  // Initial check on page load
  handleScroll();
});
