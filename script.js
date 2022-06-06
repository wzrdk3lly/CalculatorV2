// Get numbers ONLY to output to the screen and then store this as a global operand1
let operand1 = 0;

let selectedNumbers = document.querySelectorAll(".numbers-group");

for (const selectedNumber of selectedNumbers){
    selectedNumber.addEventListener('click',(e) => {
        console.log(e.target.innerText);
    })
}
// store these numbers in some kind of variable maybe operator1

// Listen out for operation symbols like (+,-,x./)
// after each operator is is pressed store the result as the global operand in order to keep "state". 
// The last operator pressed should be stored as this operator_result

// if operator 1 exist and operationResult exist store the next few numbers under 
// operator 2. 


// Listen for when equal button is pressed -> if operator 1 and 2 exists and operationResult exists 

// same summation will happen for if an operator is pressed.... 16/8 without pressing equal sign but pressing "/" again  

function operator(operation,operand1,operand2){
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


