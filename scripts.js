let color = 'purple';
let number = 10;
let word = 'cool';

let ch_color = document.getElementsByClassName('red')[0];
if (color === 'purple') {
    ch_color.style.backgroundColor = color;
};

let myNumber = document.getElementsByClassName('yellow')[0];
if (number > 100) {
    myNumber.textContent = "whoah, that's a big number.";
} else {
    myNumber.textContent = "just a regular number, please.";
};

if (word === 'cool') {
    document.getElementsByClassName('green')[0].textContent = 'Power of DOM';
} else {
    document.getElementsByClassName('blue')[0].textContent = 'Power of DOM';
};

/*
Exercise 2
Get your solution of the second exercise from the html day
Create and include a scripts.js file just like before
Add different classnames to the 4 elements in the HTML file
Let's create some variables with the following names and values:
color: purple
number: 10
word: cool
Change the background color of the first box to purple, if the color is purple
Change the text of the second
if the number is bigger than 100 to whoah, that's a big number.
otherwise just a regular number, please.
Change the text to Power of DOM of the third if the word is cool, otherwise change the fourth one
*/