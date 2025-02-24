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

document.addEventListener('DOMContentLoaded', function() {
  const visitorNumber = document.getElementById('visitor-number');
  const targetNumber = 28; // Final number

  let currentNumber = 0;
  let interval = setInterval(function() {
    if (currentNumber < targetNumber) {
      currentNumber++;
      visitorNumber.textContent = currentNumber;
    } else {
      clearInterval(interval); // Stop the interval when the number reaches the target
    }
  }, 100); // Adjust speed by changing the interval time
});

document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".service-slider");
    const container = document.querySelector(".service-container");
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", (e) => {
        isDown = true;
        slider.classList.add("active");
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener("mouseleave", () => {
        isDown = false;
        slider.classList.remove("active");
    });

    slider.addEventListener("mouseup", () => {
        isDown = false;
        slider.classList.remove("active");
    });

    slider.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
    });

    // Touch support
    let touchStartX;
    let touchScrollLeft;

    slider.addEventListener("touchstart", (e) => {
        touchStartX = e.touches[0].clientX;
        touchScrollLeft = slider.scrollLeft;
    });

    slider.addEventListener("touchmove", (e) => {
        e.preventDefault();
        const touchX = e.touches[0].clientX;
        const walk = (touchX - touchStartX) * 2;
        slider.scrollLeft = touchScrollLeft - walk;
    });
});
