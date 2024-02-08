// Number Display
const displaybox = document.getElementById('numbersDisplay');
// Erasers or reset buttons
const AC = document.getElementById('AC')
const Delete = document.getElementById('Del');

AC.addEventListener('click', function() {
    displaybox.value = '';
});
Delete.addEventListener('click', function() {
    displaybox.value = displaybox.value.toString().slice(0, -1);
})

// Oprators
const divide = document.getElementById('divide');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const multiply = document.getElementById('multiply');

divide.addEventListener('click', function() {
    displaybox.value += '/';
});
plus.addEventListener('click', function() {
    displaybox.value += '+';
});
minus.addEventListener('click', function() {
    displaybox.value += '-';
});
multiply.addEventListener('click', function() {
    displaybox.value += '*';
});
// shortcuts
const dot = document.getElementById('dot');
const doubleZero = document.getElementById('doubleZero');
const zero = document.getElementById('zero');

dot.addEventListener('click', function() {
    displaybox.value += '.';
});
doubleZero.addEventListener('click', function() {
    displaybox.value += '00';
});
zero.addEventListener('click', function() {
    displaybox.value += 0;
});


// numbers
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four  = document.getElementById('four');
const five  = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');


one.addEventListener('click', function() {
    displaybox.value += 1;
    console.log("succesfull");
});
two.addEventListener('click', function() {
    displaybox.value += 2;
    console.log("succesfull");
});
three.addEventListener('click', function() {
    displaybox.value += 3;
    console.log("succesfull");
});
four.addEventListener('click', function() {
    displaybox.value += 4;
    console.log("succesfull");
});
five.addEventListener('click', function() {
    displaybox.value += 5;
    console.log("succesfull");
});
six.addEventListener('click', function() {
    displaybox.value += 6;
    console.log("succesfull");
});
seven.addEventListener('click', function() {
    displaybox.value += 7;
    console.log("succesfull");
});
eight.addEventListener('click', function() {
    displaybox.value += 8;
    console.log("succesfull");
});
nine.addEventListener('click', function() {
    displaybox.value += 9;
    console.log("succesfull");
});

// Calculate 
const equal = document.getElementById('equal');

equal.addEventListener('click', function() {
    displaybox.value = eval(displaybox.value)
});

