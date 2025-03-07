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
        // Toggle the 'open' class to show/hide the content
        content.classList.toggle("open");
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
            document.getElementById('imgML-Logo').style.maxWidth = "50px";  
        } else {
            logo.src = "Images/LogoAR.png";
            document.getElementById('imgML-Logo').style.maxWidth = "250px"; 
        }

        let logoFooter = document.querySelector("#imgML-Logo-footer img");
        if (window.innerWidth < 600) {
            logoFooter.src = "Images/LogoAR - Copy.png";
            document.getElementById('imgML-Logo-footer').style.maxWidth = "50px";  
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