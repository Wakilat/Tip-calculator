'use strict';
//storing in variables
let bill = document.querySelector('.bill-input');
let numOfPeople = document.querySelector('.people-input');
let custom = document.querySelector('.btn-input');
let tip = document.querySelector('.pay-tip');
let total = document.querySelector('.pay-total');
let reset = document.querySelector('.reset-btn');
let hidden = document.querySelector('.hidden');
const btn1 = document.querySelector('.btn-1');
const btn2 = document.querySelector('.btn-2');
const btn3 = document.querySelector('.btn-3');
const btn4 = document.querySelector('.btn-4');
const btn5 = document.querySelector('.btn-5');
//hiding `can't be zero`
hidden.style.display = 'none';
numOfPeople.addEventListener('input', function () {
    if (numOfPeople != 0){
        let numOfPeople = Number(document.querySelector('.people-input').value);
    hidden.style.display = 'none';
    }
});

//A general function
const calcTip = function (percent) {
    let bill = Number(document.querySelector('.bill-input').value);
    let numOfPeople = Number(document.querySelector('.people-input').value);
    if (bill > 0 && numOfPeople > 0){
        hidden.style.display = 'none';
        let payTip = (bill * (percent / 100)) / numOfPeople.toFixed(2);
    tip.textContent = payTip.toFixed(2);
    let payTotal = (payTip + (bill/numOfPeople)).toFixed(2);
    total.textContent = payTotal;
    } else {
        hidden.style.display = 'block';
        hidden.style.color = 'red';
        hidden.style.fontWeight = 'lighter';
        // numOfPeople.style.border.color = 'red';
    }
};
// Button Events
btn1.addEventListener('click', function() {
    calcTip(5)
});
btn2.addEventListener('click', function() {
    calcTip(10)
});
btn3.addEventListener('click', function() {
    calcTip(15)
});
btn4.addEventListener('click', function() {
    calcTip(25)
});
btn5.addEventListener('click', function() {
    calcTip(50)
});
// Custom Event
custom.addEventListener('input', function() {
    let customInput = Number(document.querySelector('.btn-input').value);
    if (customInput > 0){
    calcTip(customInput);
}
});
// Reset Button Event
reset.addEventListener('click', function (){
    bill.value = null;
    numOfPeople.value = null;
    custom.value = null;
    tip.textContent = '0.00';
    total.textContent = '0.00';
    hidden.style.display = 'none'
})