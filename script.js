"use strict";

let firstNumber;
let secondNumber;
let roundToXDecimals;
let result = 0;
let operator;
let resultList = document.getElementById("results");

window.addEventListener("DOMContentLoaded", start);

function start(){
    document.getElementById("calculate").addEventListener("click", makeCalculation);
    document.getElementById("clear").addEventListener("click", clearResult);
}


function makeCalculation() {
    let doRound = document.querySelector("#doround").checked;

    firstNumber = Number(document.getElementById("firstnumber").value);
    secondNumber = Number(document.getElementById("secondnumber").value);
    operator = document.getElementById("operator").value;
    roundToXDecimals = Number(document.getElementById("decimals").value);

    if(operator === "add") {
        addNumbers();

    } else if(operator === "sub") {
        subtractNumbers();

    } else if(operator === "mul") {
        multiplyNumbers();

    } else if(operator === "div") {
        divideNumbers();
    }

    if(doRound) {
        result = result.toFixed(roundToXDecimals);

    }

    addResultToList();

    const scroll  = results.scrollHeight;
    results.scrollBy(0, scroll);
    

}

function addResultToList() {
    let li = document.createElement("li");
    li.textContent = result;
    resultList.appendChild(li);
}
 
function addNumbers() {
    result = firstNumber + secondNumber;
   
}

function subtractNumbers(){
    result = firstNumber - secondNumber;
}

function multiplyNumbers(){
    result = firstNumber * secondNumber;
}

function divideNumbers(){
    result = firstNumber / secondNumber;
} 

function clearResult() {
    resultList.innerHTML = "";
}
