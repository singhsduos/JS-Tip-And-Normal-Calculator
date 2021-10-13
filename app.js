const screen = document.querySelector('.screenValue');
const allClear = document.querySelector('.all-clear');
const equal = document.querySelector('.equal');
const operators = document.querySelectorAll('.operator');
const numsBtns = document.querySelectorAll('button');

let screenValue = '';
for (let item of numsBtns) {
    item.addEventListener('click', (e) => {
        let buttonText = e.target.innerText;
        // if (isNaN(prev) || isNaN(current)) return
        if (buttonText == 'x') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == '÷') {
            buttonText = '/';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'AC') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == 'D') {
            screenValue = screenValue.slice(0, -1);
            screen.value = screenValue;
        }
        else if (buttonText == '%') {
            screenValue = (screenValue / 100).toFixed(2);
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}