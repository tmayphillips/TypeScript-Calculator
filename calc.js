var output = document.querySelector('.output');
/*declare the following variables and types
  num1 as number
  num2 as number
  operand as string
  
  Figure out how to set the values of num1 and num2 as the buttons are clicked
  */
var num1;
var num2;
var n1;
var n2;
var operand;
document.querySelector('.calc').addEventListener('click', function (evt) {
    var button = evt.target;
    if (button.className.indexOf('num') !== -1) {
        if (!n1 && output.value) {
            output.value = '';
        }
        if (operand) {
            if (n2) {
                n2 += button.innerHTML;
            }
            else {
                n2 = button.innerHTML;
            }
        }
        else {
            if (n1) {
                n1 += button.innerHTML;
            }
            else {
                n1 = button.innerHTML;
            }
        }
        output.value += button.innerHTML;
    }
    if (button.className.indexOf('operator') !== -1) {
        operand = button.innerHTML;
        num1 = parseInt(n1, 10);
        output.value += button.innerHTML;
    }
    if (button.className.indexOf('equal') !== -1) {
        num2 = parseInt(n2, 10);
        var calculation = calculate(num1, operand, num2);
        output.value = calculation.toString();
        n1 = undefined;
        n2 = undefined;
        operand = undefined;
    }
    if (button.className.indexOf('reset') !== -1) {
        n1 = undefined;
        n2 = undefined;
        operand = undefined;
        output.value = '';
    }
    /* create another condition to clear the value of the input when C is pressed*/
});
//create a function that takes in 2 numbers and a string (operand)
function calculate(num1, operand, num2) {
    /* based on the operand, find the correct value of the 2 numbers.  i.e., 4+5=9, 4*5=20, etc
    return that value
    */
    switch (operand) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
    }
}
