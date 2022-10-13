function add(num1,num2){
    return (num1+num2);
}
function subtract(num1,num2){
    return num1-num2;
}
function multiply(num1,num2){
    return (num1*num2);
}
function divide(num1,num2){
    return num1/num2;
}
function calculator(num1,num2,operator){
    return operator(num1,num2);
}
var output1 = multiply(30,10);
console.log(output1);
var output = calculator(30,10,multiply);
console.log(output);