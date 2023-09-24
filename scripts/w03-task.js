/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    return number1 + number2;
}

function addNumbers(){
    let num1 = Number(document.querySelector("#add1").value);
    let num2 = Number(document.querySelector("#add2").value);

    document.querySelector("#sum").value = add(num1, num2);
}

const addButton = document.querySelector("#addNumbers");
addButton.addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
function subtract(number1, number2){
    return number1 - number2;
}

function subtractNumbers(){
    let num1 = Number(document.querySelector("#subtract1").value);
    let num2 = Number(document.querySelector("#subtract2").value);

    document.querySelector("#difference").value = subtract(num1, num2);
}

const subtractButton = document.querySelector("#subtractNumbers");
subtractButton.addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
let multiply = (number1, number2) => number1 * number2; 

let multiplyNumbers = () => {
    let num1 = Number(document.querySelector("#factor1").value);
    let num2 = Number(document.querySelector("#factor2").value);

    document.querySelector("#product").value = multiply(num1, num2);
}

const multiButton = document.querySelector("#multiplyNumbers");
multiButton.addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
let divide = (number1, number2) => number1 / number2; 

function divideNumbers(){
    let num1 = Number(document.querySelector("#dividend").value);
    let num2 = Number(document.querySelector("#divisor").value);

    document.querySelector("#quotient").value = divide(num1, num2);
}

const divideButton = document.querySelector("#divideNumbers");
divideButton.addEventListener("click", divideNumbers);


/* Decision Structure */

const todayDate = new Date();

let todayYear;

todayYear = todayDate.getFullYear();

todayYear = document.querySelector("#year").value;



/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

let arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

document.querySelector("#array").innerHTML = arrNumbers; //Use the ".join(', ')" to join method will include the space as in the  Array

/* Output Odds Only Array */
let odd = arrNumbers.filter((numbers) => numbers % 2 === 0);

document.querySelector("#odds").innerHTML = (odd);

/* Output Evens Only Array */
let even = arrNumbers.filter((numbers) => numbers % 2 !== 0);

document.querySelector("#evens").innerHTML = (even);

/* Output Sum of Org. Array */
let sumOfArray = arrNumbers.reduce((num1, num2) => num1 + num2);
document.querySelector("#sumOfArray").innerHTML = (sumOfArray);

/* Output Multiplied by 2 Array */
document.querySelector("#multiplied").innerHTML = arrNumbers.map((number) => number* 2);

/* Output Sum of Multiplied by 2 Array */
sumOf = arrNumbers.map((number) => number * 2);

document.querySelector("#sumOfMultiplied").innerHTML = sumOf.reduce((num1, num2)=> num1 + num2);