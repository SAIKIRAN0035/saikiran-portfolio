document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav ul li a");
    
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetPage = this.getAttribute("href");
            if (targetPage) {
                window.location.href = targetPage;
            }
        });
    });
    
    // Toggle dark mode
    const toggleButton = document.createElement("button");
    toggleButton.innerText = "Toggle Dark Mode";
    toggleButton.style.position = "fixed";
    toggleButton.style.top = "10px";
    toggleButton.style.right = "10px";
    toggleButton.style.padding = "10px";
    toggleButton.style.backgroundColor = "#333";
    toggleButton.style.color = "white";
    toggleButton.style.border = "none";
    toggleButton.style.cursor = "pointer";
    document.body.appendChild(toggleButton);

    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

    // Dark mode styles
    const darkModeStyle = document.createElement("style");
    darkModeStyle.innerHTML = `
        .dark-mode {
            background-color: #222;
            color: white;
        }
        .dark-mode section {
            background-color: #333;
        }
        .dark-mode a {
            color: lightblue;
        }
    `;
    document.head.appendChild(darkModeStyle);

    // Section scroll animation
    const sections = document.querySelectorAll("section");
    
    const revealSection = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const triggerBottom = window.innerHeight * 0.85;

            if (sectionTop < triggerBottom) {
                section.classList.add("show");
            }
        });
    };

    window.addEventListener("scroll", revealSection);
    revealSection(); // Call once to show sections already in view
});
