const cover = document.querySelector('.cover');
const images = ['download (1).jpeg', 'download (2).jpeg']; // List of images to cycle through
let currentIndex = 0;

function changeBackground() {
    cover.style.opacity = 1; // Start by fading out the cover
    setTimeout(() => {
        cover.style.backgroundImage = `url('${images[currentIndex]}')`; // Change background image
        currentIndex = (currentIndex + 1) % images.length; // Cycle through images
    }, 500); // Wait for 0.5 seconds (duration of transition) before changing the image
}


setInterval(changeBackground, 2000); // Change background every 2 seconds
