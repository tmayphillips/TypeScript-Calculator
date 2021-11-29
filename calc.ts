let output = document.querySelector('.output') as HTMLInputElement;
  /*declare the following variables and types
    num1 as number
    num2 as number
    operand as string
    
    Figure out how to set the values of num1 and num2 as the buttons are clicked
    */

let num1:number;
let num2:number;
let n1:string;
let n2:string
let operand:string;


document.querySelector('.calc').addEventListener('click',(evt)=>{
    let button = evt.target as HTMLButtonElement;
  
    if(button.className.indexOf('num')!==-1){
        if (!n1 && output.value) {
            output.value=''
        }
        if (operand) {
            if (n2) {
                n2 += button.innerHTML
            } else {
                n2 = button.innerHTML
            }
        } else {
            if (n1) {
                n1 += button.innerHTML
            } else {
                n1 = button.innerHTML
            }
        }     
        output.value += button.innerHTML;
    }
    if(button.className.indexOf('operator')!==-1){
        operand = button.innerHTML
        num1 = parseInt(n1, 10)   
        output.value += button.innerHTML;
    }
    if(button.className.indexOf('equal')!==-1){
        num2 = parseInt(n2, 10)   
        let calculation = calculate(num1,operand,num2);
        output.value = calculation.toString();
        n1=undefined
        n2=undefined
        operand=undefined
    }
    if(button.className.indexOf('reset')!==-1) {
        n1=undefined
        n2=undefined
        operand=undefined
        output.value=''
    }
    /* create another condition to clear the value of the input when C is pressed*/
});

//create a function that takes in 2 numbers and a string (operand)
function calculate(num1:number, operand:string, num2:number){
    /* based on the operand, find the correct value of the 2 numbers.  i.e., 4+5=9, 4*5=20, etc
    return that value
    */

    switch(operand) {
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
        case '*':
            return num1 * num2
        case '/':
            return num1 / num2
    }
}
