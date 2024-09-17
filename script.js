let operator;

function setOperator(value) {
    operator = value;
}

function calculate() {

    let firstNum = document.getElementById('num1').value;
    let secondNum = document.getElementById('num2').value;

    if (operator === '+') {
        document.getElementById('result').value=Number(firstNum) + Number(secondNum);
    }

    if (operator === '-') {
        document.getElementById('result').value=Number(firstNum) - Number(secondNum);
    }

    if (operator === '*') {
        document.getElementById('result').value=Number(firstNum) * Number(secondNum);
    }

    if (operator === '/') {
        document.getElementById('result').value=Number(firstNum) / Number(secondNum);
    }
}

function refresh(){
    document.getElementById('num1').value="";
    document.getElementById('num2').value="";
    document.getElementById('result').value="";

}