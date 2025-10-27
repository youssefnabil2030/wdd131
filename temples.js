 // Smooth scroll functionality for navigation links
    document.querySelectorAll('.nav-links a').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
          top: targetElement.offsetTop - 50,
          behavior: 'smooth'
        });
      });
    });

    // Toggle navigation bar on smaller screens
    const navLinks = document.querySelector('.nav-links');
    const logo = document.querySelector('.logo');
    let isNavOpen = false;

    logo.addEventListener('click', () => {
      isNavOpen = !isNavOpen;
      navLinks.style.display = isNavOpen ? 'flex' : 'none';
    });
