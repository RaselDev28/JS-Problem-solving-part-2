function add(num1, num2){
    return num1 + num2;
}
function Subtract(num1, num2){
    return num1 - num2;
}
function Multiply(num1, num2){
    return num1 * num2;
}
function divide(num1, num2){
    return num1 / num2;
}

function calculator(num1, num2, operation){
    if(operation === "add"){
        const result = add(num1, num2);
        return result;
    }
    else if(operation === "subtract"){
        const result = Subtract(num1, num2);
        return result;
    }
    else if(operation === "subtract"){
        const result = Multiply(num1, num2);
        return result;
    }
    else if(operation === "divide"){
        const result = divide(num1, num2);
        return result;
    }
    else{
        return("Please add num as per guideline")
    }
}

const result = calculator(10, 15, 'add'); // if you need run other operation please change in this line
console.log(result);