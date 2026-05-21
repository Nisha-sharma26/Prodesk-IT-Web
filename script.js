document.addEventListener("DOMContentLoaded", () => {

  // Hamburger Menu
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Dark / Light Mode
  const toggleBtn =
    document.getElementById("theme-toggle");

  toggleBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
      toggleBtn.innerHTML = "☀️";
    } else {
      toggleBtn.innerHTML = "🌙";
    }

  });

  // Get Started Button
  const btn =
    document.querySelector(".cta-btn");

  btn.addEventListener("click", () => {

    document.getElementById("services")
      .scrollIntoView({
        behavior:"smooth"
      });

  });

});