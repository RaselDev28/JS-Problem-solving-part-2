// Find Out the max number in an array by using function

const height=[33, 34, 23, 35, 88, 99, 31];

function maxNumber(numbers){
    let max=numbers[0];

    for(let num of numbers){
        if (num>max){
            max=num;
        }
    }
    return max;
}

const largestNumber=maxNumber(height);
console.log("Largest Number is : ", largestNumber);