// Initialization
const display = document.getElementById("display");

// Functions
function appendValue(input) {
    display.value += input;
}

function clearDisplay() {
    display.value= "";
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}