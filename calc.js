// Get a reference to the input element that acts as the calculator display
let display = document.getElementById("display");

// Append a character (number/operator/decimal) to the display value
function appendValue(value) {
  display.value += value; // Concatenate the new value to the existing string
}

// Clear the entire display content
function clearDisplay() {
  display.value = ""; // Reset to an empty string
}

// Remove the last character from the display (backspace)
function deleteLast() {
  display.value = display.value.slice(0, -1); // Slice off the last character
}

// Evaluate the current expression safely and show the result
function calculate() {
  try {
    // Replace pretty symbols with JavaScript operators before evaluating
    let expression = display.value.replace(/×/g, "*").replace(/÷/g, "/");

    // Allow only digits, operators, percent, decimal, parentheses, and spaces
    if (/^[0-9+\-*/%.() ]+$/.test(expression)) {
      // Use Function constructor to evaluate purely as an expression and return the result
      display.value = new Function('return ' + expression)();
    } else {
      // If invalid characters are found, show an error message
      display.value = "Error";
    }
  } catch (error) {
    // If evaluation throws any error (e.g., malformed expression), show "Error"
    display.value = "Error";
  }
}
