# JavaScript Calculator

This is a simple JavaScript calculator that allows you to perform basic arithmetic operations. It provides a user interface with a display screen to enter and view calculations.

## Features

- Enter numeric values and perform calculations using the provided operators (+, -, *, /).
- View the result of the calculation on the display screen.
- Delete the last input character from the display using the "DEL" button.
- Clear the display and reset the calculator using the "RESET" button.

## Usage

To use the calculator, follow these steps:

1. Open the `index.html` file in a web browser.
2. Enter numeric values and operators using the calculator buttons.
3. Click the "=" button to perform the calculation and display the result on the screen.
4. To delete the last input character, click the "DEL" button.
5. To clear the display and reset the calculator, click the "RESET" button.

## Code Explanation

The JavaScript code provided implements the functionality of the calculator. Here's a brief explanation of the key functions and variables:

- `display`: A reference to the display screen element where the calculation and result are shown.
- `del`: A reference to the "DEL" button element.
- `reset`: A reference to the "RESET" button element.
- `equal`: A reference to the "=" button element.

- `appendToDisplay(value)`: A function that appends the specified value to the display screen. It is called when the calculator buttons are clicked.

- Event listeners:
  - `equal.addEventListener("click", (e) => {...})`: An event listener for the "=" button click event. It checks if the display is empty and shows an alert if no value is entered.
  - `del.addEventListener("click", deleteLastCharacter)`: An event listener for the "DEL" button click event. It calls the `deleteLastCharacter()` function to delete the last character from the display.
  - `reset.addEventListener("click", (e) => {...})`: An event listener for the "RESET" button click event. It resets the display by clearing its value.

- `calculate()`: A function that performs the calculation based on the entered values and operators. It uses regular expressions to extract the operators and operands from the display value. It then iterates over the operands and applies the corresponding operator to calculate the total. If a division by zero is encountered, it displays an error message.

## Dependencies

The calculator does not have any external dependencies. It is built using plain HTML, CSS, and JavaScript.

## License

Feel free to use and modify the code according to your needs. Contributions are welcome!

## Credits

This calculator application was created by [RomenR1]. You can find the original source code and more projects on [GitHub](https://github.com/RomenR1).

If you have any questions or suggestions, please feel free to reach out to me at [romenrakholiya34@gmail.com].
