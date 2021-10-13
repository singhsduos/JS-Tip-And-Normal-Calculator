const screen = document.querySelector('.screenValue');
const topScreen = document.querySelector('.screenTopValue');
const allClear = document.querySelector('.all-clear');
const equal = document.querySelector('.equal');
const operators = document.querySelectorAll('.operator');
const numsBtns = document.querySelectorAll('button');
const decimalBtn = document.querySelectorAll('#decimal');
let divide = document.querySelector('.divide');


let screenValue = '';
let count = 0;
for (let item of numsBtns) {
    item.addEventListener('click', (e) => {

        let buttonText = e.target.innerText;

        if (buttonText == 'x') {
            buttonText = '*'; // changing operator in original form
            if (screenValue.slice(-1) !== buttonText) { // checking last character of screen value  is not equal current operator
                if (screenValue.slice(-1) === '-' || screenValue.slice(-1) === '+' || screenValue.slice(-1) === '/') { // checking last character is equal in any of these operator
                    screenValue = screenValue.slice(0, -1) + buttonText; // if last char is equal in any of the above char then replace that char with present given operator from buttonText
                    topScreen.value = screenValue;
                } else {
                    screenValue += buttonText; // if there is any number than simply apply my present input operator
                    topScreen.value = screenValue;

                }
            }
        }
        else if (buttonText == '÷') {
            buttonText = '/';
            if (screenValue.slice(-1) !== buttonText) {
                if (screenValue.slice(-1) === '-' || screenValue.slice(-1) === '*' || screenValue.slice(-1) === '+') {
                    screenValue = screenValue.slice(0, -1) + buttonText;
                    topScreen.value = screenValue;
                } else {
                    screenValue += buttonText;
                    topScreen.value = screenValue;

                }
            }
        }
            

        else if (buttonText === '-') {
            if (screenValue.slice(-1) !== buttonText) {
                if (screenValue.slice(-1) === '+' || screenValue.slice(-1) === '*' || screenValue.slice(-1) === '/' ) {
                    screenValue = screenValue.slice(0, -1) + buttonText;
                    topScreen.value = screenValue;
                } else {
                    screenValue += buttonText;
                    topScreen.value = screenValue;

                }
            }
        }

        else if (buttonText === '+') {
            if (screenValue.slice(-1) !== buttonText) {
                if (screenValue.slice(-1) === '-' || screenValue.slice(-1) === '*' || screenValue.slice(-1) === '/' ) {
                    screenValue = screenValue.slice(0, -1) + buttonText;
                    topScreen.value = screenValue;
                } else {
                    screenValue += buttonText;
                    topScreen.value = screenValue;

                }
            }
        }
            
        else if (buttonText == 'AC') {
            screenValue = "";
            topScreen.value = screenValue;
            screen.value = screenValue;
        }
            
        else if (buttonText == 'D') {
            screenValue = screenValue.slice(0, -1);
            topScreen.value = screenValue;
        }
            
        else if (buttonText === '.') {
            for (let i of topScreen.value) {
                if (i == buttonText) {
                    count++;
                }
            }
            if (count > 0) {
                return;

            } else {
                if (topScreen.value === "") {
                    screenValue = '0' + buttonText;
                    topScreen.value = screenValue;
                } else {
                    screenValue += buttonText;
                    topScreen.value = screenValue;
                }
            }
        }
            
        else if (buttonText == '%') {
            screenValue = (screenValue / 100);
            if (screenValue.toString().length > 10) {
                screen.value = "= " + parseInt(screenValue).toExponential(4);
            } else
                screen.value = "= " + screenValue;
        }

        else if (buttonText == '=') {
            screenValue = eval(screenValue);
            if (screenValue.toString().length > 10) {
                screen.value = "= " + parseInt(screenValue).toExponential(4);
            } else
                screen.value = "= " + screenValue;
        }
            
         else {
            screen.value = '';
            screenValue += buttonText;
            topScreen.value = screenValue;
        }

    })
}