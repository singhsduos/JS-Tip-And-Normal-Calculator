// take all element from html doc
const enterBill = document.querySelector('#enterBill');
const tip = document.querySelector('#tip');
const negBtn = document.querySelector('.neg-countBtn');
const posBtn = document.querySelector('.pos-countBtn');

const totalBill = document.querySelector('.totalBill');
const billPerPerson = document.querySelector('.bill');
const tipPerPerson = document.querySelector('.tip');
const numberPersons = document.querySelector('.persons');

// set the counter for number of person
let count = 1;

// onClick event for increasing the counter
posBtn.onclick = () => {
    if (count < 101) {
        count += 1;
        numberPersons.innerHTML = count;
    }
};

// onClick event for decreasing the counter
negBtn.onclick = () => {
    if (count > 1) {
        count -= 1;
        numberPersons.innerHTML = count;
    }

};

// function for tip calculation
const tipCalcy = () => {
    let tipPercentage = (enterBill.value) * (tip.value / 100);
    let total = parseInt((enterBill.value)) + parseInt(tipPercentage);
    let totalPerPerson = parseInt(total) / parseInt(numberPersons.innerHTML);
    let newPerBill = parseInt(enterBill.value) / parseInt(numberPersons.innerHTML);
    let newPerTip = parseInt(tipPercentage) / parseInt(numberPersons.innerHTML);

    // not to show NaN as output in client-side
    if (!isNaN(totalPerPerson)) {
        totalBill.value = "₹" + totalPerPerson;
        billPerPerson.value = "₹" + newPerBill;
        tipPerPerson.value = "₹" + newPerTip;
    }

    // set the totalBill output as "0" when there is no input is given
    if (enterBill.value === "") {
        totalBill.value = "₹0";
        billPerPerson.value = "₹0";
        tipPerPerson.value = "₹0";
    }

}

// set the interval so that it calculate tip by own
setInterval(tipCalcy, 500);