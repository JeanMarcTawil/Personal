// image slider
$(document).ready(function () {
    $('.image-slider-container').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true
    });
});


function toggleNav() {
    var nav = document.getElementById("sideNav");
    var overlay = document.getElementById("overlay");
    var body = document.body;
    
    nav.classList.toggle("active");
    overlay.classList.toggle("active");

    if (nav.classList.contains("active")) {
        body.classList.add("no-scroll");  // Add a CSS class to prevent scrolling
    } else {
        body.classList.remove("no-scroll"); // Remove class when closing
    }
}


function toggleContent(element) {
    let parent = element.parentElement;
    parent.classList.toggle("open");
}

function toggleContentById(contentId) {
    const content = document.getElementById(contentId);
    
    if (content) {
        const allTitles = document.querySelectorAll(".congregationTitle");
        
        // Remove sticky from all titles
        allTitles.forEach(title => title.classList.remove("sticky"));

        // Toggle the 'open' class
        content.classList.toggle("open");

        // If opened, make the title sticky
        if (content.classList.contains("open")) {
            content.querySelector(".congregationTitle").classList.add("sticky");
        }
    }
}



document.addEventListener("DOMContentLoaded", function () {
    let navLinks = document.querySelectorAll(".nav-content-container a");
    let currentPage = window.location.pathname.split("/").pop(); // Get current page filename

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active"); // Add the 'active' class to the matching link
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    function updateLogo() {
        let logo = document.querySelector("#imgML-Logo img");
        if (window.innerWidth < 600) {
            logo.src = "Images/LogoAR - Copy.png";
            document.getElementById('imgML-Logo').style.maxWidth = "45px";  
        } else {
            logo.src = "Images/LogoAR.png";
            document.getElementById('imgML-Logo').style.maxWidth = "250px"; 
        }

        let logoFooter = document.querySelector("#imgML-Logo-footer img");
        if (window.innerWidth < 600) {
            logoFooter.src = "Images/LogoAR - Copy.png";
            document.getElementById('imgML-Logo-footer').style.maxWidth = "45px";  
        } else {
            logoFooter.src = "Images/LogoAR.png";
            document.getElementById('imgML-Logo-footer').style.maxWidth = "250px"; 
        }
    }

    // Run the function on page load
    updateLogo();

    // Listen for window resize events
    window.addEventListener("resize", updateLogo);
});


document.addEventListener("DOMContentLoaded", () => {
    const searchBtn = document.querySelector(".search-dropdown-btn");
    const filterSection = document.querySelector(".filter-section");

    const toggleFilterSection = () => {
        if (window.innerWidth <= 768) {
            filterSection.style.display = filterSection.style.display === "block" ? "none" : "block";
        }
    };

    searchBtn.addEventListener("click", toggleFilterSection);

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            filterSection.style.display = "flex"; // Always show on larger screens
        } else if (filterSection.style.display !== "block") {
            filterSection.style.display = "none"; // Hide if not open
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("loaded"); // This prevents FOUC
});


// Select all elements with the class 'fade-in'
const elements = document.querySelectorAll('.fade-in, .fade-slide-up, .fade-slide-left, .bounce-in, .zoom-in, .flip-in-x, .fade-slide-right, .scale-up');

// Create the observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated'); // Add class when visible
            observer.unobserve(entry.target); // Stop observing after animation
        }
    });
}, { threshold: 0.2 }); // Trigger when 20% of the element is visible

// Observe each element
elements.forEach(el => observer.observe(el));


document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");

    function toggleActive(event) {
        event.preventDefault(); // Prevent unintended behavior on touch devices

        // Toggle active class on the clicked button
        this.classList.toggle("active");

        // Remove active class from other buttons (except the clicked one)
        filterButtons.forEach(btn => {
            if (btn !== this) {
                btn.classList.remove("active");
            }
        });
    }

    filterButtons.forEach(button => {
        button.addEventListener("click", toggleActive);
        button.addEventListener("touchstart", toggleActive, { passive: true });
    });
});





document.addEventListener("DOMContentLoaded", function () {
    const toggleButtons = document.querySelectorAll(".toggle-btn");

    toggleButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Remove 'active' class from all buttons
            toggleButtons.forEach(btn => btn.classList.remove("active"));

            // Add 'active' class to the clicked button
            this.classList.add("active");
        });
    });
});
