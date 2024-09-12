
function add(a,b){
    return +a + +b;
}

function subtract(a,b){
    return +a - +b;
}

function multiply(a,b){
    return +a * +b
}

function divide(a,b){
    if (b != 0) {
    return +a/+b
    }
    else {
        return "haha nice"
    }   
}

const display = document.querySelector("#result");

let num1 = " "
let operator = null
let num2 = " "

function operate(){
    if(num1 != " " && operator !== null && num2 != " "){
        const number1 = parseInt(num1);
        const number2 = parseInt(num2);

        let value;

        if(operator == "+") {
            value = add(number1, number2);
        } 
        else if(operator == "-") {
            value = subtract(number1, number2);
        }
        else if(operator == "*") {
            value = multiply(number1, number2);
        }
        else {
            value = divide(number1, number2);
        }
    
         display.value = value;
         num1= value;
         operator = null;
         num2 = " ";
    }
}

const nmbrBtns = document.querySelectorAll(".middle-btn");
nmbrBtns.forEach(btn => {
    btn.addEventListener("click",() => {
            if(operator == null) {
                num1 += btn.textContent;
                display.value = num1;
            }
            else {
                num2 += btn.textContent;
                display.value = num2;
            }
    })
})

const oprBtns = document.querySelectorAll(".opr-btn");
oprBtns.forEach(btn => {
    btn.addEventListener("click",() => {
        if (num1 != " " && num2 != " "){
            operate();
        }
            display.value = num1;
            operator = btn.textContent;
            num2 = " ";
    })
        
})


document.querySelector("#eql-btn").addEventListener("click",() => {
    operate();
    num1 = " ";
    operator = null;
    num2 = " ";
});

document.querySelector(".top-btn").addEventListener("click",() => {
    display.value = " ";
    num1 = " ";
    operator = null;
    num2 = " ";
})