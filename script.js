let display = document.querySelector("#display");
let del = document.querySelector(".del"); //
let reset = document.querySelector(".reset"); //
let equal = document.querySelector("#equal"); //

//< all cal Function

function appendToDisplay(value) {
  display.value += value;
}
// if user click  equal button
equal.addEventListener("click", (e) => {
  if (display.value === "") {
    alert("Enter value");
    display.value = "";
  }
});
// Function to delete the last input character from the display
del.addEventListener("click", deleteLastCharacter);
function deleteLastCharacter() {
  display.value = display.value.slice(0, -1);
}
// reset
reset.addEventListener("click", (e) => {
  display.value = ""; // or  location.reload()
});

//>

// Calculator engine

function calculate() {
  
  let operators = display.value.match(/[+\-*/]/g);
  let operands = display.value.split(/[+\-*/]/g);
  console.log(operators);
  console.log(operands);

  let total = parseFloat(operands[0]);
  for (let i = 0; i < operands.length; i++) {
    let operand = parseFloat(operands[i + 1]);
    let operator = operators[i];

    switch (operator) {
      case "+":
        total += operand;
        break;
      case "-":
        total -= operand;
        break;
      case "*":
        total *= operand;
        break;
      case "/":
        if (operand === 0) {
          display.value = "Error";
          return;
        }
        total /= operand;
        break;
    }
  }
  display.value = total.toString();
}

