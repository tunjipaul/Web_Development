function calculatePrice() {
    let isFirstPurchase =
        prompt(
            "Is this your first time purchasing with us(yes/no): "
        ).toLowerCase() === "yes";
    let price = Number(prompt("What is the price: "));
    let customerType = prompt(
        "Are you a student/Senior/employee: "
    ).toLowerCase();
    let discount = 0;

    if (customerType === "student") {
        discount = 0.1;
    } else if (customerType === "senior") {
        discount = 0.15;
    } else if (customerType === "employee") {
        discount = 0.2;
    }
    if (isFirstPurchase) {
        discount += 0.05;
    }
    let finalPrice = price * (1 - discount);
    console.log(`Price calculation: for ${customerType}`);
    console.log(`Original: $${price}"`);
    console.log(`Discount: ${discount * 100}%`);
    console.log(`Final price: $${finalPrice.toFixed(2)}`);

    //jesus be a shield!!!!!!!!
}