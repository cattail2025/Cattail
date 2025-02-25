// Smooth Scroll for Anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Image Carousel Functionality
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;

function showImage(index) {
    images.forEach((image, i) => {
        image.style.display = (i === index) ? 'block' : 'none';
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    showImage(currentIndex);
}

document.querySelector('.next-btn').addEventListener('click', nextImage);
document.querySelector('.prev-btn').addEventListener('click', prevImage);

// Automatically change image every 5 seconds
setInterval(nextImage, 5000);

showImage(currentIndex); // Initial call to display the first image

// Sticky Header on Scroll
const header = document.querySelector('header');

window.onscroll = function() {
    if (window.pageYOffset > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
};

// AOS (Animate on Scroll) - Auto Initialization
AOS.init({
    duration: 1000, // Time taken for the animation
    easing: 'ease-in-out', // Easing function
    once: true, // Run animation only once
});

// Live Chat Button Toggle
const chatButton = document.querySelector('.chat-button');
const chatWindow = document.querySelector('.chat-window');

chatButton.addEventListener('click', function() {
    chatWindow.classList.toggle('open');
});

// Custom Cursor Effect
const cursor = document.createElement('div');
cursor.style.position = 'fixed';
cursor.style.width = '20px';
cursor.style.height = '20px';
cursor.style.backgroundColor = 'black';
cursor.style.borderRadius = '50%';
cursor.style.pointerEvents = 'none';
cursor.style.transition = 'transform 0.1s ease';
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.pageX - 10}px`;
    cursor.style.top = `${e.pageY - 10}px`;
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

if (localStorage.getItem("dark-mode") === "enabled") {
    body.classList.add("dark-mode");
}

darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("dark-mode", "enabled");
    } else {
        localStorage.setItem("dark-mode", "disabled");
    }
});

// Hamburger Menu Toggle
function toggleMenu() {
    const menu = document.querySelector('.nav-menu');
    const toggleButton = document.querySelector('.menu-toggle');

    menu.classList.toggle('active');
    toggleButton.classList.toggle('active');

    // Adding smooth transition to the menu visibility
    if (menu.classList.contains('active')) {
        menu.style.transition = "transform 0.3s ease-in-out";  // Smooth sliding effect
        menu.style.transform = "translateX(0)"; // Slide in
    } else {
        menu.style.transition = "transform 0.3s ease-in-out"; // Smooth sliding effect
        menu.style.transform = "translateX(100%)"; // Slide out
    }
}

<script>
  document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.best-seller-card');
    
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');  // Add 'visible' class when in view
          observer.unobserve(entry.target); // Stop observing once the card has been revealed
        }
      });
    }, { threshold: 0.5 });  // Trigger when 50% of the card is in view

    cards.forEach(card => observer.observe(card));  // Observe each card
  });
</script>

