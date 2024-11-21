// Find Out the min number in an array by using function

const height=[33, 34, 23, 35, 88, 99, 31];

function minNumber(numbers){
    let min=numbers[0];

    for(let num of numbers){
        if (num<min){
            min=num;
        }
    }
    return min;
}

const lowest=minNumber(height);
console.log("Lowest Number is : ", lowest);