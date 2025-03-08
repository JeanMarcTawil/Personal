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

