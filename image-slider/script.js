const images = [
    "./assests/image.png",
    "./assests/image1.png",
    "./assests/image2.png"
];

let currentIndex = 0;
const slider = document.getElementById("slider");
slider.src = images[currentIndex];

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    slider.src = images[currentIndex];
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    slider.src = images[currentIndex];
}