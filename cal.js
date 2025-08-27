let display = document.getElementById("display");

function appendValue(value) {
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
    let expression = display.value.replace(/×/g, "*").replace(/÷/g, "/");
    if (/^[0-9+\-*/%.() ]+$/.test(expression)) {
      display.value = new Function('return ' + expression)();
    } else {
      display.value = "Error";
    }
  } catch (error) {
    display.value = "Error";
  }
}
