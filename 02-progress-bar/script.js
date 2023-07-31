const counter = document.querySelector('.counter');
const progressBarFront = document.querySelector('.progress-bar-front');

let progress = 0;
let progressString;

function updateProgress() {
    progressString = `${progress++}%`;
    counter.textContent = progressString;
    progressBarFront.style.width = progressString;

    if (progress !== 101) {
        setTimeout(updateProgress, 10);
    }
};

updateProgress();

