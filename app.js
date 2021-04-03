'use strict';

let firstBox = document.getElementById('first-box');
let secondBox = document.getElementById('second-box');
let buttonFirst = document.getElementById('btn');
let buttonReset = document.getElementById('reset');
let buttonEdit = document.getElementById('edit');

// getting first box value and uppercasing it then setting the uppercased value to second box
function upperCased(){
    document.getElementById('first-box').style.display = 'none';
    firstBox.value = firstBox.value.toUpperCase();
    secondBox.value = firstBox.value;
}

// function showFirst(){
//     document.getElementById('first-box').style.display = 'none';
//     secondBox.value = firstBox.value;
// }

buttonFirst.addEventListener('click', upperCased);

// Edit button
function editButton(){
    firstBox.value;
    secondBox.value;
}

function displayText(){
    document.getElementById('first-box').style.display = 'block';
    editButton();
}
buttonEdit.addEventListener('click' ,displayText ,editButton);


// reset button
function resetButton(){
    firstBox.value = '';
    secondBox.value = '';
}

function displayLast(){
    document.getElementById('first-box').style.display = 'block';
    resetButton();
}
buttonReset.addEventListener('click' ,displayLast ,resetButton);






