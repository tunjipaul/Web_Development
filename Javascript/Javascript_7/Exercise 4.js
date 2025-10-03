class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Cart {
    constructor() {
        this.items = [];
    }

    addProduct(product, quantity) {
        let existing = this.items.find(
            (item) => item.product.name === product.name
        );
        if (existing) {
            existing.quantity += quantity;
        } else {
            this.items.push({ product, quantity });
        }
        console.log(`${quantity} x ${product.name} added to cart.`);
    }

    removeProduct(productName) {
        this.items = this.items.filter((item) => item.product.name !== productName);
        console.log(`${productName} removed from cart.`);
    }

    getTotal() {
        let total = this.items.reduce((sum, item) => {
            return sum + item.product.price * item.quantity;
        }, 0);

        return total > 100 ? "Free Shipping" : `Total: ₦${total}`;
    }
}

let p1 = new Product("Bread", 20);
let p2 = new Product("Milk", 50);
let p3 = new Product("Eggs", 15);

let cart = new Cart();

cart.addProduct(p1, 2);
cart.addProduct(p2, 1);
cart.addProduct(p3, 6);

console.log(cart.getTotal());

cart.removeProduct("Milk");

console.log(cart.getTotal());
