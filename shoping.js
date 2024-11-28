const products=[
    {name: "shirt", price: 500, quantity: 2},
    {name: "Pant", price: 1500, quantity: 4},
    {name: "Sunglass", price: 800, quantity: 3},
    {name: "Jacket", price: 2500, quantity: 1}
]

function cardShopping(products){
    let total=0;
    for(const product of products){
        const perProductPrice=product.price*product.quantity;

        total=total+perProductPrice;
    }
    return total;
}

const totalCost=cardShopping(products);
console.log('Total cost is : ', totalCost);