const contentInput = document.getElementById('content-input');
const characterCount = document.getElementById('character-count');
const remainingCharacterCount = document.getElementById('remaining-character-count');

let characterCountValue;

contentInput.addEventListener('keyup', updateCounters);


function updateCounters() {
    characterCountValue = contentInput.value.length;

    characterCount.textContent = characterCountValue;
    remainingCharacterCount.textContent = contentInput.getAttribute('maxlength') - characterCountValue;
}

updateCounters();