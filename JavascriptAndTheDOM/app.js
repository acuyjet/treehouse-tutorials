// JavaScript source code

//const myHeading = document.getElementsByTagName('h1')[0];
//const myButton = document.getElementById('myButton');
//const myTextInput = document.getElementById('myTextInput');

//myButton.addEventListener('click', () => {
//    myHeading.style.color = myTextInput.value;
//});

const myList = document.getElementsByTagName('li');

for (let i = 0; i < myList.length; i++) {
    myList[i].style.color = 'purple';
}

//const errorNotPurple = document.getElementsByClassName('error-not-purple');
const errorNotPurple = document.querySelectorAll('.error-not-purple');

for (let i = 0; i < errorNotPurple.length; i++) {
    errorNotPurple[i].style.color = 'red';
}

const evens = document.querySelectorAll('li:nth-child(odd)');

for (let i = 0; i < evens.length; i++) {
    evens[i].style.backgroundColor = 'lightgray';
}