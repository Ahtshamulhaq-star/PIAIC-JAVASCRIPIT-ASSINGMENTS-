var number1=prompt("Enter first number");
var number2=prompt("Enter second number");
var operand=prompt("Enter your operand");
if(operand == "+")
{
    sum=parseInt(number1) + parseInt(number2);
    console.log("sum is",sum);
}
else if(operand=="-")
{
    subt=parseInt(number1) - parseInt(number2);
    console.log("subtraction is",subt);
}
else if(operand == "*")
{
    mult=parseFloat(number1) * parseFloat(number2);
    console.log("Multiply is",mult);
}
else if (operand == "/")
{
    div=parseFloat(number1) / parseFloat(number2);
    console.log("Div is",div);
}