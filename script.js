// TODO: write comments to explain the why of what you are doing...these will server as your architecture diagrams

// Get numbers ONLY to output to the screen and then store this as a global operand1
let operand1="";
let operand2="";
let operator1="";
let operator2="";
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
            case isBtnClear(e):
            //TODO: Create a case for when the AC button is pressed
            //TODO: Create a cse for when the +- button is presses
            
            default:
                break;
        }
    }
}


function operatorHandler(e) {
// first operator handling 
if (operator1 === ""){
    operator1 = e.target.innerText;
    console.log(`entering ${e.target.innerText} into the variable for the first operator`)
}
// operator 2 handling 
else if (operator1 !== ""){
    // Performing operation for the equal sign being pressed as second operator
    if (e.target.innerText === "="){
        
        console.log(`performing a calculation with operand1:${operand1} operator2:${operand2} and operator:${operator1}`);

        // TODO: May need to convert the answer back to string before displaying it back to the users 
        // TODO: store this as an operand1 and clear the items you need too
    
        //using this as test to make sure operation and display works 
        result = performOperation(operator1,(Number(operand1)),(Number(operand2)));
       inputContainer.innerText = result;
       
    } 
}
}


function operandHandler(e){
    if(operator1 === ""){
        operand1 += e.target.innerText;
        inputContainer.innerText = operand1;
        console.log(`appending ${e.target.innerText} into the input box for the first operand`)
    }
    
    //if the first operand has been entered do something
    else if (operand1 !== "" && operator1 !== ""){
        clearInputText();
        operand2 += e.target.innerText
        inputContainer.innerText = operand2;
        console.log(`appending ${e.target.innerText} into the input box for the second operand`)
    }
}

function isBtnClear(e){
    if (e.target.className === "clear-button"){
        clearInputText();
        operand1="";
        operand2="";
        operator1="";
        operator2="";
        result="";
        console.log("clearing the input")
    }
    
}
function clearInputText(){
    inputContainer.innerText = ""
}

function isNumbersGroup(className){
    if (className === "numbers-group") {
        return true;
    }
}

function isOperatorsGroup(className){
    if (className === "operators"){
        return true;
    }
}

function performOperation(operation,operand1,operand2){
    switch (true){
        // These will all likely need to be returned to an 
        // global variable or set global variable to the output 
    
        case (operation === "+"):
            return add(operand1,operand2);
            break;
        case(operation === "-"):
            return subtract(operand1,operand2)
            break;
        case(operation === "x"):
            return multiply(operand1,operand2);
        case(operation === "/"):
            return divide(operand1,operand2);
            break;
        default:
            break;
    }
}
function add(addend1,addend2) {
    return addend1 + addend2;
}

function subtract(minuend,subtrahend){
    return minuend - subtrahend;
}

function multiply(multiplier,multiplicand){
    return multiplier * multiplicand;
}

function divide(dividend,divisor){
   return dividend/divisor
}

//Pseudo code notes 
/* 
store these numbers in some kind of variable maybe operator1

Listen out for operation symbols like (+,-,x./)
after each operator is is pressed store the result as the global operand in order to keep "state". 
The last operator pressed should be stored as this operator_result

if operator 1 exist and operationResult exist store the next few numbers under 
operator 2. 


Listen for when equal button is pressed -> if operator 1 and 2 exists and operationResult exists 

same summation will happen for if an operator is pressed.... 16/8 without pressing equal sign but pressing "/" again  
 */
