// // //class definiton - a template for creating menu items.
// // class MenuItem{
// //     //constructor runs when you create a new object.
// //     constructor(id, name, price, category){
// //         this.id = id;
// //         this.name = name;
// //         this.price = price;
// //         this.category = category;
// //         this.dateAdded = new Date().toISOString(); //automatically set.
// //     }


// //     //method - a function that belongs to this class.
// //     getDisplayInfo(){
// //         return `${this.name} - $${this.price.toFixed(2)}`;
// //     }
// //     updatePrice(newPrice){
// //         if (newPrice > 0){
// //             this.price = newPrice;
// //             return `Updated ${this.name} price to $${newPrice.toFixed(2)}`;
// //         }
// //         return 'price must be greater than zero';
// //     }
// //     isExpensive(){
// //         return this.price > 10;
// //     }
// // } 

// // //creating objects using the class.
// // let coffee = new MenuItem(1, "Latte", 4.50, "Drinks");
// // let sandwich =  new MenuItem(2, "Club Sandwich", 12.99, "Food");
// // let dessert = new MenuItem(3, "Chocolate Cake", 6.50, "Desserts");

// // console.log("Created Menu Items:");
// // console.log(coffee.getDisplayInfo());
// // console.log(sandwich.getDisplayInfo());
// // console.log(dessert.getDisplayInfo());

// // console.log("") //empty line.

// // console.log("Expensive Items:");
// // console.log(`${coffee.name} is expensive: ${coffee.isExpensive()}`);
// // console.log(`${sandwich.name} is expensive: ${sandwich.isExpensive()}`);
// // console.log(`${dessert.name} is expensive: ${dessert.isExpensive()}`);

// //adding more functionality to classes.

// // class MenuItem{
// //     constructor(id, name, price, category, description = ""){
// //     this.id = id;
// //     this.name = name;
// //     this.price = price;
// //     this.category = category;
// //     this.description = description;
// //     this.dateAdded = new Date();
// //     this.isAvailableAvailable = true;
// //     this.timesOrdered = 0;
// //     }
// //     //display methods
// //     getDisplayInfo(){
// //         let status = this.isAvailable ? "Available" : "Sold Out";
// //         return `${this.name} - $${this.price.toFixed(2)} (${status})`;
// //     }
// //     getFullDetails(){
// //         return {
// //             id: this.id,
// //             name: this.name,
// //             price: this.price,
// //             category: this.category,
// //             description: this.description,
// //             available: this.isAvailable,
// //             popularity: this.getPopularityLevel()
// //         };
// //     }
// //     //Business Logic Methods.

// //     updatePrice(newPrice){
// //         if (newPrice <= 0){
// //             return "price must be greater than 0";
// //         }
// //         let oldPrice = this.price;
// //         this.price = newPrice;
// //         return `${this.name}: $${oldPrice.toFixed(2)} -> $${newPrice.toFixed(2)}`;
// //     }
// //     markUnavailable(){
// //         this.isAvailable = false;
// //         return `${this.name} is now marked as unavailable`;
// //     }
// //     markAvailable(){
// //         this.isAvailable = true;
// //         return `${this.name} is now available`;
// //     }

// //     recordOrder(){
// //        if (!this.isAvailable){
// //         return `Cannot Order ${this.name} - currently unavailable`;
// //        }

// //        this.timesOrdered++;
// //        return `Ordered ${this.name}. Total Orders: ${this.timesOrdered}`;
// //     }

// //     getPopularityLevel(){
// //         if (this.timesOrdered >= 50) return 'Very Popular';
// //         if (this.timesOrdered >= 20) return "Popular";
// //         if (this.timesOrdered >= 5) return "Moderate";
// //         return "New";
// //     }

// //     applyDiscount(percentage){
// //         if (percentage < 0 || percentage > 100){
// //             return "Discount must be between  and 100 percent";
// //         }

// //         let discountAmount = this.price * (percentage / 100);
// //         let newPrice = this.price - discountAmount;
// //         this.price = newPrice;
// //         return `Applied ${percentage}% discount to ${this.name}. New Price: $${newPrice.toFixed(2)}`;

// //     }
    
// // }

// // //test the enhanced class.
// // let latte = new MenuItem(1, "Caramel Latte", 5.50, "Drinks", "Rich espresso with caramel syrup");
// // let burger = new MenuItem(2, "Beef Burger", 13.99, "Food", "Juicy beef party with fresh toppings");

// // console.log("Menu Items Created:")
// // console.log(latte.getDisplayInfo());
// // console.log(burger.getFullDetails());

// // console.log('') //empty line.

// // console.log("Testing Business Logic:");
// // console.log(latte.recordOrder());
// // console.log(latte.recordOrder());
// // console.log(latte.recordOrder());
// // console.log(latte.recordOrder());
// // console.log(latte.recordOrder());
// // console.log("Latte Popularity:", latte.getPopularityLevel());

// // console.log("") //empty line.

// // console.log(burger.markUnavailable());
// // console.log(burger.recordOrder()); //should fail.

// // console.log("") //empty line.

// // console.log(latte.applyDiscount(20));
// // console.log(latte.getDisplayInfo());

// //bas class - common functionality for all menu items.

// class MenuItem{
//     constructor(id, name, price, category){
//         this.id = id;
//         this.price = price;
//         this.category = category;
//         this.dateAdded = new Date();
//     }
//     getDisplayInfo(){
//         return `${this.name} - $${this.price.toFixed(2)}`;
//     }
//     updatePrice(newPrice){
//         this.price = newPrice;
//         return `Updated ${this.name} price to $${newPrice.toFixed(2)}`;
//     }
// }

// class DrinkItem extends MenuItem {
//     constructor(id, name, price, size, temperature, hasCaffeine = false){
//         super(id, name, price, "drinks"); //call parent constructor
//         this.size = size;
//         this.temperature = temperature;
//         this.hasCaffeine = hasCaffeine;
//     }

//     //override parent method

//     getDisplayInfo(){
//         let caffeineInfo = this.hasCaffeine ? "Caffeinated": "Caffeine-free";
//         return `${this.name}(${this.size}, ${this.temperature}) - $${this.price.toFixed(2)} - ${caffeineInfo}`;

//     }

//     //new methods specific to drinks.
//     changeTemperature(newTemp){
//          this.temperature = newTemp;
//          return `${this.name} temperature changed to ${newTemp}`;
//     }
//     upSize(){
//         if(this.size === "Small"){
//             this.size = "Medium";
//             this.price += 0.50;
//         }
//         else if(this.size === "Medium"){
//             this.size = 'Large';
//             this.price += 0.75;

//         }
//         else{
//             return `${this.name} is already Large size`;
//         }
//         return `Upsized ${this.name} to ${this.size} - New price: $${this.price.toFixed(2)}`;
//     }
// }

// //specialized class for food items.
// class FoodItem extends MenuItem{
//     constructor(id, name, price, servingSize, isVegetarian = false, allergens = []){
//         super(id, name, price, "Food"); //Call parent constructor
//         this.servingSize = servingSize;
//         this.isVegetarian = isVegetarian;
//         this.allergens = allergens;
//         this.spiceLevel = "Mild";
//     }
//     //Override parent method
//     getDisplayInfo(){
//         let vegInfo = this.isVegetarian ? "Vegetarian" : "Contains meat";
//         let allergenInfo = this.allergens.length > 0? `Contains: ${this.allergens.join(", ")}` : "";
//         return `${this.name} (${this.servingSize}) - $${this.price.toFixed(2)} - ${vegInfo} ${allergenInfo}`;
//     }

//     //new methods specific to food

//     setSpiceLevel(level){
//         let validLevels = ["Mild", "Medium", "Hot", "Extra Hot"];
//         if (validLevels.includes(level)){
//             this.spiceLevel = level;
//             return `Set ${this.name} spice level to ${level}`;
//         }
//         return "Invalid spice level";
//     }
//     addAllergen(allergen){
//       if(!this.allergens.includes(allergen)){
//         this.allergens.push(allergen);
//         return `Added ${allergen} to ${this.name} allergen list`;
//       }
//       return `${allergen} already in allergen list`;
//     }
//     checkSafeForAllergy(allergen){
//         return !this.allergens.includes(allergen);
//     }

// }
// //Create specialized objects.
// let latte = new DrinkItem(1, "Vanila Latte", 4.25, "Medium", "Hot", true);
// let icedTea = new DrinkItem(2, "Green Iced Tea", 2.75, "Large", "Cold", false);

// let burger = new FoodItem(3, "Veggie Burger", 11.50, "Regular", true, ["Gluten", "Soy"]);

// let pasta = new FoodItem(4, "Spicy Pasta", 13.99, "Large", true, ["Gluten"]);

// console.log("Specialized menu items");
// console.log(latte.getDisplayInfo());
// console.log(icedTea.getDisplayInfo());
// console.log(burger.getDisplayInfo());
// console.log(pasta.getDisplayInfo());

// console.log("") //empty line.

// console.log("Drink-specific operations:");
// console.log(latte.upSize());
// console.log(latte.changeTemperature("Iced"));
// console.log("Update latte:", latte.getDisplayInfo());

// console.log('') //empty line.

// console.log("Food-Specific Operations:")
// console.log(pasta.setSpiceLevel("Extra Hot"));
// console.log(burger.addAllergen("Nuts"));
// console.log("Safe for gluten allergy:", pasta.checkSafeForAllergy('Gluten'));
// console.log("Safe for nuts allergy:", burger.checkSafeForAllergy("Nuts"));

// console.log("") //Empty Line.

// console.log("Inherited methods still work:");
// console.log(latte.updatePrice(4.75));
// console.log(burger.updatePrice(12.00));


//complete cafe system with classes.

//user class for authentication.
class User{
    constructor(username, password, role = 'customer'){
        this.username = username;
        this.password = password; //In real apps, this would be encrypted!
        this.role = role;
        this.loginTime = null;
    }
    authenticate(password){
        return this.password === password;
    }
    login(){
        this.loginTime = new Date();
        return `${this.username} logged in as ${this.role};`
    }
    logout(){
        this.loginTime = null;
        return `${this.username} logged out`;
    }
    isLoggedIn(){
        return this.loginTime !== null;
    }
}

//order class to manage customer orders.

class Order{
    static orderCounter = 1;

    constructor(customerName, items = []){
        this.id = Order.orderCounter++;
        this.customerName = customerName;
        this.items = [...items]; //copy array
        this.orderTime = new Date();
        this.status = "pending";
        this.total = this.calculateTotal();
    }
    addItem(menuItem, quantity = 1){
        //check if item already in 
        let existingItem = this.items.find(item => item.menuItem.id === menuItem.id);

        if(existingItem){
            existingItem.quantity += quantity;
        }else{
            this.items.push({
                menuItem:menuItem,
                quantity: quantity,
                itemTotal: menuItem.price * quantity
            });
        }
         this.total = this.calculateTotal();
         return `Added ${quantity}x ${menuItem.name} to order`;
    }
    removeItem(menuItemId){
        this.items = this.items.filter(item => item.menuItem.id !==menuItemId);
        this.total = this.calculateTotal();
        return "Item removed from order";
    }

    calculateTotal(){
        return this.items.reduce((total, item) => {
            return total + (item.menuItem.price * item.quantity);
        }, 0);
    }
    updateStatus(newStatus){
        let validStatuses = ["pending", "preparing", "ready", "delivered", "cancelled"];
        if(validStatuses.includes(newStatus)){
            this.status = newStatus;
            return `Order ${this.id} status uodated to ${newStatus}`;
        }
        return "Invalid status";
    }
    getOrderSummary(){
        return {
            orderId: this.id,
            customer: this.customerName,
            items: this.items.map(item => ({
                name: item.menuItem.name,
                quantity: item.quantity,
                price: item.menuItem.price,
                subTotal: item.menuItem.price * item.quantity
            })),
            total: this.total,
            status: this.status,
            orderTime: this.orderTime.toLocaleString()
        };
    }
   
}
// Complete Café Management System
class CafeManager {
    constructor() {
        this.menuItems = [];
        this.users = [];
        this.orders = [];
        this.currentUser = null;
        
        // Create default admin user
        this.users.push(new User("admin", "cafe123", "staff"));
        this.users.push(new User("manager", "manager123", "manager"));
    }
    
    // User management
    login(username, password) {
        let user = this.users.find(u => u.username === username);
        if (user && user.authenticate(password)) {
            this.currentUser = user;
            user.login();
            return { success: true, message: `Welcome ${username}!`, role: user.role };
        }
        return { success: false, message: "Invalid credentials" };
    }
    
    logout() {
        if (this.currentUser) {
            let message = this.currentUser.logout();
            this.currentUser = null;
            return message;
        }
        return "No user logged in";
    }
    
    // Menu management
    addMenuItem(menuItem) {
        this.menuItems.push(menuItem);
        return `Added ${menuItem.name} to menu`;
    }
    
    removeMenuItem(itemId) {
        this.menuItems = this.menuItems.filter(item => item.id !== itemId);
        return "Menu item removed";
    }
    
    getMenuByCategory(category) {
        return this.menuItems.filter(item => item.category === category);
    }
    
    searchMenu(searchTerm) {
        return this.menuItems.filter(item => 
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
    
    // Order management
    createOrder(customerName) {
        let order = new Order(customerName);
        this.orders.push(order);
        return order;
    }
    
    getOrderById(orderId) {
        return this.orders.find(order => order.id === orderId);
    }
    
    getOrdersByStatus(status) {
        return this.orders.filter(order => order.status === status);
    }
    
    // Analytics
    getTotalRevenue() {
        return this.orders
            .filter(order => order.status === "delivered")
            .reduce((total, order) => total + order.total, 0);
    }
    
    getMostPopularItems() {
        let itemCounts = {};
        
        this.orders.forEach(order => {
            order.items.forEach(item => {
                let itemName = item.menuItem.name;
                itemCounts[itemName] = (itemCounts[itemName] || 0) + item.quantity;
            });
        });
        
        return Object.entries(itemCounts)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 5);
    }
}

// Test the complete system
console.log("=== CAFÉ MANAGEMENT SYSTEM DEMO ===");

let cafe = new CafeManager();

// Create menu items using different classes
let latte = new DrinkItem(1, "Caramel Latte", 4.50, "Medium", "Hot", true);
let sandwich = new FoodItem(2, "Club Sandwich", 9.99, "Regular", false, ["Gluten"]);
let muffin = new MenuItem(3, "Blueberry Muffin", 3.25, "Desserts");

cafe.addMenuItem(latte);
cafe.addMenuItem(sandwich);
cafe.addMenuItem(muffin);

console.log("Menu items added to system");
console.log(""); // Empty line

// Test login
let loginResult = cafe.login("admin", "cafe123");
console.log("Login result:", loginResult.message);

console.log(""); // Empty line

// Create and process order
let order = cafe.createOrder("John Smith");
console.log(order.addItem(latte, 2));
console.log(order.addItem(sandwich, 1));
console.log(order.addItem(muffin, 1));

console.log(""); // Empty line

console.log("Order Summary:");
let summary = order.getOrderSummary();
console.log(`Order #${summary.orderId} for ${summary.customer}`);
summary.items.forEach(item => {
    console.log(`  ${item.quantity}x ${item.name} - $${item.subtotal.toFixed(2)}`);
});
console.log(`Total: $${summary.total.toFixed(2)}`);

console.log(""); // Empty line

// Update order status
console.log(order.updateStatus("preparing"));
console.log(order.updateStatus("ready"));
console.log(order.updateStatus("delivered"));

console.log(""); // Empty line

// Analytics
console.log("Total Revenue:", `$${cafe.getTotalRevenue().toFixed(2)}`);
console.log("Most Popular Items:", cafe.getMostPopularItems());
