// Online Shopping Cart.

cartItem = {
    name: "Poundo Yam",
    price: 500,
    quantity: 5,

    getTotal(){
        return this.price * this.quantity
    }
}

cart = [
    cartItem,
    {
        name: "Bag",
        price: 45,
        quantity: 4,
        
    getTotal(){
        return this.price * this.quantity
    }

        
    },
    
    {
        name: "Shoe",
        price: 23,
        quantity: 2,
        
    getTotal(){
        return this.price * this.quantity
    }

        
    }
]
// display total cart with a function.

function getCartTotal(cart){
    let total = 0;
       for (let c of cart){
        // return `Total Summation of all Cart Items: ${c.getTotal()}`
        total += c.getTotal();
       }
       return `Total Summation of all Cart Items: $${total}`
}

console.log(getCartTotal(cart))


