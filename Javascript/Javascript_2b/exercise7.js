function productCalculator(price, qty, discount = 0) {
  if (price <= 0 || qty <= 0) return 0;
  let total = price * qty;
  let discountAmount = total * (discount / 100);
  return total - discountAmount;
}

function taxCalculator(amount, location) {
  if (amount <= 0) return 0;
  let taxRate = location === "US" ? 0.07 : location === "EU" ? 0.2 : 0.1;
  return amount * taxRate;
}

function shippingCalculator(weight, distance) {
  if (weight <= 0 || distance <= 0) return 0;
  let cost = weight * 0.5 + distance * 0.1;
  return cost < 5 ? 5 : cost; // minimum fee
}

function membershipDiscount(total, memberType) {
  if (total <= 0) return 0;
  let discount =
    memberType === "gold"
      ? 0.15
      : memberType === "silver"
      ? 0.1
      : memberType === "bronze"
      ? 0.05
      : 0;
  return total * discount;
}

function generateReceipt(
  price,
  qty,
  discount,
  location,
  weight,
  distance,
  memberType
) {
  let productTotal = productCalculator(price, qty, discount);
  let tax = taxCalculator(productTotal, location);
  let shipping = shippingCalculator(weight, distance);
  let memberSavings = membershipDiscount(productTotal, memberType);
  let finalTotal = productTotal + tax + shipping - memberSavings;

  let receipt = `
Items: ${qty} × $${price} = $${(price * qty).toFixed(2)}
Discount: ${discount}% → -$${(price * qty - productTotal).toFixed(2)}
Membership (${memberType}): -$${memberSavings.toFixed(2)}
Tax (${location}): $${tax.toFixed(2)}
Shipping: $${shipping.toFixed(2)}

-------------------------
Final Total: $${finalTotal.toFixed(2)}
  `;
  return receipt;
}

console.log(generateReceipt(50, 3, 10, "US", 2, 100, "gold"));
