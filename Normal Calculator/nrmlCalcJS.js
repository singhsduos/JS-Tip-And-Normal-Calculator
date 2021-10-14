// take all element from html doc
const topScreen = document.querySelector('.screenTopValue');
const bottomScreen = document.querySelector('.screenBotttomValue');
const allClear = document.querySelector('.all-clear');
const numsBtns = document.querySelectorAll('button');


// take all calculation in this variable
let screenValue = '';

// put for loop in button input
for (let item of numsBtns) {
    // add click event listener in buttons
    item.addEventListener('click', (e) => {

        // take value from button HTML text
        let buttonText = e.target.innerText;

        // multiplication 
        if (buttonText == 'x') {
            buttonText = '*'; // changing operator in original multiplication form
            if (topScreen.value.slice(-1) !== buttonText) { // checking last character of bottomScreen value  is not equal current operator
                if (topScreen.value.slice(-1) === '-' || topScreen.value.slice(-1) === '+' || topScreen.value.slice(-1) === '/') { // checking last character is equal in any of these operator
                    replaceLastSignOperator(buttonText);
                } else {
                    checkingNan(buttonText);
                }
            }
        }

        // divide
        else if (buttonText == '÷') {
            buttonText = '/'; // changing operator in original divide form
            if (topScreen.value.slice(-1) !== buttonText) {
                if (topScreen.value.slice(-1) === '-' || topScreen.value.slice(-1) === '*' || topScreen.value.slice(-1) === '+') {
                    replaceLastSignOperator(buttonText);
                } else {
                    checkingNan(buttonText);
                }
            }
        }

        // subtraction
        else if (buttonText === '-') {
            if (topScreen.value.slice(-1) !== buttonText) {
                if (topScreen.value.slice(-1) === '+' || topScreen.value.slice(-1) === '*' || topScreen.value.slice(-1) === '/') {
                    replaceLastSignOperator(buttonText);
                }

                else {
                    checkingNan(buttonText);
                }
            }
        }

        // addition
        else if (buttonText === '+') {
            if (topScreen.value.slice(-1) !== buttonText) {
                if (topScreen.value.slice(-1) === '-' || topScreen.value.slice(-1) === '*' || topScreen.value.slice(-1) === '/') {
                    replaceLastSignOperator(buttonText);
                } else {
                    checkingNan(buttonText);
                }
            }
        }

        // All Clear
        else if (buttonText == 'AC') {
            screenValue = "";
            topScreen.value = screenValue;
            bottomScreen.value = screenValue;
        }

        // deleting last input 
        else if (buttonText == 'D') {
            screenValue = screenValue.slice(0, -1);
            topScreen.value = screenValue;
        }

        // decimal
        else if (buttonText === '.') {
            // check first, if there is present any decimal dot in top screen 
            // and bottom screen have some previous calculation value
            if (topScreen.value.includes('.') && bottomScreen.value !== "") {
                bottomScreen.value = '';  // clear previous calculation answer
                screenValue = '0' + buttonText;
                topScreen.value = screenValue;
            }
            // here we trying not to add decimal point more than one time
            else if (buttonText === '.' && topScreen.value.includes('.')) return;

            // in else statement we are adding decimal with 0 and also clearing bottom screen value
            else {
                if (topScreen.value === "") {
                    screenValue = '0' + buttonText;
                    topScreen.value = screenValue;
                }
                else if (bottomScreen.value !== "") {
                    bottomScreen.value = '';
                    screenValue = '0' + buttonText;
                    topScreen.value = screenValue;
                }
                else {
                    screenValue += buttonText;
                    topScreen.value = screenValue;
                }
            }
        }

        //  handling '0th' input
        else if (buttonText == '0') {
            if (topScreen.value !== "" && bottomScreen.value !== "") {
                bottomScreen.value = "";
                screenValue = "";
                screenValue += buttonText;
                topScreen.value = screenValue;
            } else if (bottomScreen.value === "") {
                screenValue += buttonText;
                topScreen.value = screenValue;
            }
        }

        //  calculating percentage out of 100
        else if (buttonText == '%') {
            screenValue = (screenValue / 100);
            if (screenValue.toString().length > 10) {
                bottomScreen.value = "= " + parseInt(screenValue).toExponential(4);
            } else

                bottomScreen.value = "= " + screenValue;
        }

        // equal operator for calculation
        else if (buttonText == '=') {
            screenValue = eval(screenValue);
            if (screenValue.toString().length > 10) {
                bottomScreen.value = "= " + parseInt(screenValue).toExponential(4);
            } else
                bottomScreen.value = "= " + screenValue;
        }

        // input all num values
        else {

            // converting nums to string 
            // and then removing two character from bottom screen i.e equal to sign(=) in answer 
            // and space after equal sign
            let convertBottomToString = bottomScreen.value.toString();
            let clearBottomValue = convertBottomToString.substring(2);

            if (isNaN(clearBottomValue)) {
                bottomScreen.value = "";
                screenValue = "";
                screenValue += buttonText;
                topScreen.value = screenValue;
            }

            //  putting limit exceed for unnecessary calculation
            else if (topScreen.value.toString().length > 17) {
                alert("Only 18 numbers limit,\n Try to reduce");
                return;
            }

            else {
                screenValue += buttonText;
                topScreen.value = screenValue;
            }
        }

    })
}

// function for checking NaN error
function checkingNan(buttonInput) {

    let convertBottomToString = bottomScreen.value.toString();
    let clearBottomValue = convertBottomToString.substring(2); //removing '=' sign and space in bottomScreenValue

    if (isNaN(screenValue)) {
        bottomScreen.value = "";
        screenValue = "";
        screenValue = '0' + buttonInput;
        topScreen.value = screenValue;
    }
    else if (clearBottomValue !== "" && !isNaN(clearBottomValue)) {
        screenValue += buttonInput;
        console.log("inside checking nan ka elese if loop", screenValue);
        topScreen.value = screenValue;
    }
    else {
        screenValue += buttonInput; // if there is any number than simply apply my present input operator
        topScreen.value = screenValue;
    }
}

// function for replacing last sign operator with new sign operator
function replaceLastSignOperator(buttonInput) {
    screenValue = screenValue.slice(0, -1) + buttonInput; // if last char is equal in any of the above char then replace that char with present given operator from buttonText
    topScreen.value = screenValue;
}