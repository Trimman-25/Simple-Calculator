let display = document.getElementById("result");


function appendNumber(num) {
    if (display.innerText === "0") {
        display.innerText = num;  
    } else {
        display.innerText += num; 
    }
}


function appendOperator(operator) {
    if (display.innerText !== "0") {
        display.innerText += " " + operator + " ";
    }
}

function clearDisplay() {
    display.innerText = "0"; 
}

function deleteLast() {
    let text = display.innerText;
    display.innerText = text.length > 1 ? text.slice(0, -1) : "0";
}

function calculateResult() {
    try {
        display.innerText = eval(display.innerText.replace("÷", "/"));
    } catch {
        display.innerText = "Error"; 
    }
}
