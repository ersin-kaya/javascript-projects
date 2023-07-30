const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

const imageContainer = document.querySelector('.image-container');
const imgCount = document.querySelectorAll('.image-container img').length;

let currentImage = 1;
let timeout;

prevButton.addEventListener('click', () => {
    currentImage--;
    clearTimeout(timeout);
    updateImage();
});

nextButton.addEventListener('click', () => {
    currentImage++;
    clearTimeout(timeout);
    updateImage();
});

function updateImage() {
    if (currentImage > imgCount) {
        currentImage = 1;
    } else if (currentImage === 0) {
        currentImage = imgCount;
    }
    imageContainer.style.transform = `translateX(-${(currentImage - 1) * 700}px)`;
    timeout = setTimeout(() => {
        currentImage++;
        updateImage();
    }, 4000);
};

updateImage();