// In sports.js
const gallery = document.querySelector('.image-gallery');
const images = gallery.querySelectorAll('img');
let currentImageIndex = 0;

function showImage(index) {
    images.forEach((image, i) => {
        if (i === index) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}

function showPreviousImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
}

// Initialize with the first image displayed
showImage(currentImageIndex);

// Add event listeners for next and previous buttons
document.getElementById('next-button').addEventListener('click', showNextImage);
document.getElementById('prev-button').addEventListener('click', showPreviousImage);
