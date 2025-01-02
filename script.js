// Calculator


const display = document.getElementById("display");

function appendValue(input) {
    display.value += input;
}

function clear() {
    display.value= "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}