function discountTotal(quantity){
    const first100Price=100;
    const second100Price=90;
    const avobe200Price=70;

    if(quantity <= 100){
        total = 100 * first100Price;
        return total;
    }
    else if(quantity <= 200){
        const first100Total = 100 * first100Price;
        const second100Quantity = quantity - 100;
        const second100Total = second100Quantity * second100Price;
        const total = first100Total + second100Total; 
        return total;
    }
    else{
        const first100Total = 100 * first100Price;
        const second100Total = 100 * second100Price;
        const remainingQuantity = quantity - 200;
        const remainingTotal = remainingQuantity * avobe200Price;
        const total = first100Total + second100Total +remainingTotal;
        return total;
    }
}

const products = discountTotal(100);
console.log('The Total Price is: ', products);