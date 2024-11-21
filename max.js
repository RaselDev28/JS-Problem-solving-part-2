// Can you find out who will max number?

function maxNumber(num1, num2, num3){
    if(num1>num2 && num1> num3){
        return num1;
    }
    else if(num2>num1 && num2>num3){
        return num2;
    }
    else{
        return num3;
    }
}

const max=maxNumber(12,22,222);
console.log("The Max number is : ", max);