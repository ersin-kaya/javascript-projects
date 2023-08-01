const dropdownFrom = document.getElementById('dropdown-from');
const dropdownTo = document.getElementById('dropdown-to');
const fromInput = document.getElementById('from-input');
const toInput = document.getElementById('to-input');
const titleFromDescription = document.querySelector('.title-from-description');
const titleToDescription = document.querySelector('.title-to-description');
const titleToPrice = document.querySelector('.title-to-price');

let price;
let totalPrice;

function updateRate() {
    fetch(`https://v6.exchangerate-api.com/v6/289011e36418286b11f18d7b/latest/${dropdownFrom.value}`)
        .then((res) => res.json().then((data) => {
            price = data.conversion_rates[dropdownTo.value].toFixed(3);
            totalPrice = (price * fromInput.value).toFixed(2);

            toInput.value = totalPrice;

            titleFromDescription.textContent = dropdownFrom.value;
            titleToDescription.textContent = dropdownTo.value;
            titleToPrice.textContent = price;
        }));
}

updateRate();

dropdownFrom.addEventListener('change', updateRate);
dropdownTo.addEventListener('change', updateRate);
fromInput.addEventListener('input', updateRate);
