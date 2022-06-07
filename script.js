//TODO:1 Watch "handling events for multiple events" https://www.youtube.com/watch?v=Xwq1Hj1DyDM

// Get numbers ONLY to output to the screen and then store this as a global operand1
let operand1="";
let operand2="";
let operator1="";
let operator2="";

let inputContainer = document.querySelector(".input"); 
//Global event handler for buttons within calculator 
let buttons = document.querySelector(".button-container");
buttons.addEventListener('click', onClick, false);

// // Add click event listener to each of the numbers buttons
// for (const selectedNumber of selectedNumbers){
//     selectedNumber.addEventListener('click',onClick);
// }


// Display the contents to the input section of the screen
function onClick(e){
    
    
    if (e.target !== e.currentTarget){

        switch (true){
            // if the second operator has not been pressed yet continue filling in first operand 
            case isNumbersGroup(e.target.className):
                if(operator1 === ""){
                    operand1 += e.target.innerText;
                    inputContainer.innerText = operand1;
                    console.log(`entering ${e.target.innerText} into the input box for the first operand`)
                }
                
                //if the first operand has been entered do something
                else if (operand1 !== "" && operator1 !== ""){
                    clearInputText();
                    operand2 += e.target.innerText
                    inputContainer.innerText = operand2;
                    // console.log('enterin')
                }
                break;
            // operator handling 
            case isOperatorsGroup(e.target.className):
                // first operator handling 
                if (operator1 === ""){
                    operator1 = e.target.innerText;
                }
                // operator 2 handling 
                else if (operator1 !== ""){
                    operator2 = e.target.innerText;
                    if (operator2 === "="){
                        performOperation(operator1,)
                    }
                }
                break;
            default:
                break;
        }
        
        // inputContainer.innerText = operand2;

        //Create a case/what to do if the user selects a number 
        
        // create a case for if a user selects an operator 

        //create a case for if a user selects clear


        // 

        // operand1 += e.target.innerText;
        // console.log(e.target.className)
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
