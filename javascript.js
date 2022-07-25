let firstnum = null;
let secondnum = null;
let operation = null;
let answer = null;

//console.log(firstnum);

const x = document.getElementById("output");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

// function updateDisplay(){
//     x.value = x.value;
// }

function calculate(a, op, b){ //return values for each operation
    if(op == "+"){
        console.log(eval(a + b));
        return a+b;
    }
    else if(op == "-"){
        return a-b;
    }
    else if(op == "*"){
        return a*b;
    }
    else if(op == "/"){
        return a/b;
    }
}

function operate(){
    if(operation === null){ //checks if operation doesn't exist. if not, do nothing.
        x.value = x.value;
    }
    else{
        secondnum = parseFloat(x.value);
        answer = calculate(firstnum, operation, secondnum);
        x.value = answer;
        firstnum = parseFloat(x.value);
        secondnum = null;
        operation = null;
        answer = null;
    }
}

function clearscreen(){ //resets all variables
    x.value = "0";
    firstnum = null;
    secondnum = null;
    operation = null;
    answer = null;
}

function back(){ //removes last digit shown on screen
    let r = x.value;
    x.value = r.slice(0, -1);
}

function dot(){ //restricts input to having one "."
    if(x.value.includes(".")){
        x.value=x.value;
    }
    else{
        x.value+=".";
    }
}

operators.forEach(operator => operator.addEventListener('click', function(e){
    let o = e.target.innerHTML;
    if(operation != null){ //mnultiple operations
        operation = o;
        secondnum = parseFloat(x.value);
        answer = calculate(firstnum, operation, secondnum);
        x.value = answer;
        firstnum = parseFloat(x.value);
        answer = null;
    }
    else{ //one operation
        operation = o;
        firstnum = parseFloat(x.value);
    }
}));

numbers.forEach(number => number.addEventListener('click', function(e){
    let n = e.target.innerHTML;
    if(operation === null){ //initiating first number
        if(x.value == "0" || x.value == firstnum){ //replaces the displayed '0' with number. Also clears display after equals or operator and number is clicked
            x.value = n;
        }
        else{
            x.value += n; //pushes digit to the screen
        }
    }
    else{ //initiates number if operation is null
        if(x.value == firstnum){
            x.value = n;
        }
        else{
            x.value += n;
        }
    }
}));


//console.log(operate(subtract, 10, 9));