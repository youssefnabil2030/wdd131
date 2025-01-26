// Smooth scroll functionality for navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1); // Remove '#' from the href
      const targetElement = document.getElementById(targetId);
      
      window.scrollTo({
        top: targetElement.offsetTop - 50, // Adjust for navigation bar height
        behavior: 'smooth'
      });
    });
  });
  
  // Optional: Toggle the navigation bar visibility on smaller screens (mobile responsiveness)
  const navLinks = document.querySelector('.nav-links');
  const logo = document.querySelector('.logo');
  
  let isNavOpen = false;
  logo.addEventListener('click', () => {
    isNavOpen = !isNavOpen;
    navLinks.style.display = isNavOpen ? 'flex' : 'none'; // Toggle nav display
  });
  