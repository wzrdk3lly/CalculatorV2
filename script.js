//TODO: add a case for isBtnPositiveNegative(e):

// Get numbers ONLY to output to the screen and then store this as a global operand1
let operand1="";
let operand2="";
let operator="";
let result="";

let inputContainer = document.querySelector(".input"); 

//Global event handler for buttons within calculator 
let buttons = document.querySelector(".button-container");
buttons.addEventListener('click', onClick, false);


// global event handler
function onClick(e){
    // performance optimization technique for event handlers 
    if (e.target !== e.currentTarget){
        // leverage switch statements for the event handler scenarios
        switch (true){
            //Case for handling what happens when numbers are clicked
            case isNumbersGroup(e.target.className):
                operandHandler(e);
                break;
            // Case for handling output/calculations depending on which 
            // operators are pressed at a specific point in time of the calculation 
            case isOperatorsGroup(e.target.className):
                operatorHandler(e);
                break;
            // When the AC button is pressed clear all storage variables + screen output
            case isBtnClear(e):
            default:
                break;
        }
    }
}


function operatorHandler(e) {
    //Adds the 'clicked' operator when no operator has previously been selected
    if (!operatorExist()){
        operator = e.target.innerText;
        console.log(`entering ${e.target.innerText} into the variable for the operator`)
    }

    // Performing operation for the equal sign being pressed instead of a plus 
    else if (e.target.innerText === "="){
        
        console.log(`performing a calculation with operand1:${operand1} operand2:${operand2} and operator:${operator}`);

        //using this as test to make sure operation and display works 
        result = performOperation(operator,(Number(operand1)),(Number(operand2)));
        
        displayResult();

        console.log(`changed the operand1 to new value ${operand1}`);
        operator = "";
        console.log('cleared the operator')// Clear operator to allow for "first operator handling" on line 46
        operand2 = "";
        console.log('cleared operand 2')// clear second operand in order to string calculations with an another operator ONLY after pressing equal
    }

    //perform operation to string calculations if an equal sign is not pressed and another operator is 
    else {

        console.log(`performing a calculation with operand1:${operand1} operand2:${operand2} and operator:${operator}`);

        result = performOperation(operator,(Number(operand1)),(Number(operand2)));
        
        displayResult();

        console.log(`changed the operand1 to new value ${operand1}`)
        
        operator = e.target.innerText;
        console.log(`changed operator to ${operator} `)

        operand2 = "";
        console.log("cleared operand 2")
    }  
}


function operandHandler(e){

    // scenarios for appending numbers to the first operand 
    if (!operatorExist()){
        // If the user presses a number while there is already an outstanding result it will 
        // automatically restart and begin appending to first operand 
        if(operand2 === "" && result !==""){
            clearInputText();
            clear();
            appendToFirstOperand(e);
            console.log(`appending ${e.target.innerText} into the input box for the first operand`)
        }
        else{
            appendToFirstOperand(e);
            console.log(`appending ${e.target.innerText} into the input box for the first operand`)
        }
    }
    else if (operand1 !== "" && operator !== ""){
        clearInputText();
        appendToSecondOperand(e)
        console.log(`appending ${e.target.innerText} into the input box for the second operand`)
    }
}

function isBtnClear(e){
    if (e.target.className === "clear-button"){
        clearInputText();
        clear();
    }
}

function displayResult(){
    inputContainer.innerText = result;
    operand1 = result;
   }

// code to prevent unsafe math from occurring...also prevents users from spamming operators
function safeMath(answer){
    if (answer.toString().includes(".")){
        if (answer.toString().split(".")[1].length > 5){
            return answer.toFixed(2);
        }
        else{
            return answer
        }
    }
    else if(answer === undefined){
        return 0;
    }
    else if(answer === Infinity){
        return NaN;
    }
    else if(answer === NaN){
        return 0;
    }
    else{
        return answer
    }    
}

function clear(){
    operand1="";
    operand2="";
    operator="";
    result="";
    console.log("clearing the input")
}

// TODO: finish isBtnpositiveNegative and break out the logic for performing operation.
// function isBtnPositiveNegative(e){
//     if (e.target.className === "positive-negative"){
//         if ()
//     }
// }

function clearInputText(){
    inputContainer.innerText = ""
}

function operatorExist(){
    return !(operator === "");
}

function isNumbersGroup(className){
    // return className === "numbers-group"
    if (className === "numbers-group") {
        return true;
    }
}

function isOperatorsGroup(className){
    if (className === "operators"){
        return true;
    }
}

function appendToFirstOperand(e){
    operand1 += e.target.innerText;
    inputContainer.innerText = operand1;
    // console.log(`appending ${e.target.innerText} into the input box for the first operand`)
}

function appendToSecondOperand(e){
    operand2 += e.target.innerText;
    inputContainer.innerText = operand2;
}

function performOperation(operation,operand1,operand2){
   
    switch (true){
        // These will all likely need to be returned to an 
        // global variable or set global variable to the output 
        
        case (operation === "+"):
            return safeMath(add(operand1,operand2));
        case(operation === "-"):
            return safeMath(subtract(operand1,operand2));
        case(operation === "x"):
            return safeMath(multiply(operand1,operand2));
        case(operation === "/"):
            return safeMath(divide(operand1,operand2));
        default:
            return 0;
            break;
    } 
}


function add(addend1,addend2) {
    return safeMath(addend1 + addend2);
}

function subtract(minuend,subtrahend){
    return safeMath(minuend - subtrahend);
}

function multiply(multiplier,multiplicand){
    return safeMath(multiplier * multiplicand);
}

function divide(dividend,divisor){
   return safeMath(dividend/divisor);
}

// Limitations - spamming division will lead to NAN error.
