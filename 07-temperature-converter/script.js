const celsiusInput = document.getElementById('celsius-input');
const fahrenheitInput = document.getElementById('fahrenheit-input');
const kelvinInput = document.getElementById('kelvin-input');


function calculateTemperature(event) {
    // debugger;
    const currentValue = Number(event.target.value);

    switch (event.target.name) {
        case "celsius-input":
            kelvinInput.value = Number((currentValue + 273.15).toFixed(2)) * 1;
            fahrenheitInput.value = Number((currentValue * (9 / 5) + 32).toFixed(2)) * 1;
            break;
        case "fahrenheit-input":
            celsiusInput.value = Number(((currentValue - 32) * (5 / 9)).toFixed(2)) * 1;
            kelvinInput.value = Number(((currentValue - 32) * (5 / 9) + 273.15).toFixed(2)) * 1;
            break;
        case "kelvin-input":
            celsiusInput.value = Number((currentValue - 273.15).toFixed(2)) * 1;
            fahrenheitInput.value = Number(((currentValue - 273.15) * (9 / 5) + 32).toFixed(2)) * 1;
            break;
        default:
            break;
    }
};

