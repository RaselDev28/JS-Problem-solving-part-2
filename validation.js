function multiply(num1, num2){
    if(typeof num1 !== "number" || typeof num2 !== "number"){
        return "Please enter a number";
    }
    const result=num1*num2;
    return result;
}
const total=multiply(4, 3);
console.log(total);