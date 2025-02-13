document.addEventListener("DOMContentLoaded", () => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = localStorage.getItem("total") || "0";
  let orderSummary = document.getElementById("order-summary");
  let checkoutTotal  = document.getElementById("totalPrice");

  if (Object.keys(cart).length > 0) {
    orderSummary.innerHTML = Object.entries(cart)
      .map(([name, { price, quantity }]) =>{
        let itemTotal = price*quantity;
        total += itemTotal;
       return `<p>${name}: GHS ${price} x ${quantity} = GHS${(price * quantity).toFixed(2)}</p>
      `})
      .join("");

      checkoutTotal.textContent = `Total: GHS ${total.toFixed(2)}`;
      
  } else {
    orderSummary.textContent = "Your cart is empty.";
    checkoutTotal.textContent = "Total: GHS 0.00";
  }

  document.getElementById("checkout-form").addEventListener("submit", e => {
    e.preventDefault();
    alert("Do you want to confirm payment!");
    localStorage.clear();
    window.location.href = "index.html";
  });
});

