const display = document.getElementById("display");

function append(value) {
    const lastChar = display.value.slice(-1);
    const operators = "+-*/%";

    if (operators.includes(lastChar) && operators.includes(value)) {
        return;
    }

    if (display.value === "" && operators.includes(value)) {
        return;
    }

    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        const result = Function("return " + display.value)();
        display.value = result;
    } catch {
        display.value = "Error";
    }
}

document.addEventListener("keydown", (e) => {
    const key = e.key;

    if (!isNaN(key) || "+-*/.%".includes(key)) {
        append(key);
    } else if (key === "Enter") {
        calculate();
    } else if (key === "Backspace") {
        deleteLast();
    } else if (key === "Escape") {
        clearDisplay();
    }
});
