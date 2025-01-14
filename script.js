 // JavaScript functionality
 let cart = {};
//Adding to the cart
 function addToCart(product, price) {
   if (cart[product]) {
     cart[product].quantity += 1;
   } else {
     cart[product] = { price, quantity: 1 };
   }
   updateCart();
 }
 //Deleting item from cart
 function deleteFromCart(product) {
   if (cart[product]) {
     cart[product].quantity -= 1;
     if (cart[product].quantity === 0) {
       delete cart[product];
     }
   }
   updateCart();
 }
//update cart display/calculating the total cost
 function updateCart() {
   const cartItems = document.getElementById("cart-items");
   const cartTotal = document.getElementById("cart-total");

   cartItems.innerHTML = "";
   let total = 0;

   for (const product in cart) {
     const item = cart[product];
     total += item.price * item.quantity;

     const div = document.createElement("div");
     div.className = "cart-item";
     div.innerHTML = `
       ${product} - GHS ${item.price.toFixed(2)} x ${item.quantity}
       <button onclick="deleteFromCart('${product}')">delete</button>`;
     cartItems.appendChild(div);
   }

   cartTotal.textContent = total.toFixed(2);
 }

  //Clear cart or close cart button
 function clearCart() {
  cart = {};
  updateCart();
 }

 // searching for product or item
 function searchProducts() {
  const searchTerm = document.getElementById("search-bar").value.toLowerCase();
  const products = document.querySelectorAll(".product");

  products.forEach(product => {
    const productName = product.querySelector("p").innerText.toLowerCase();
    if (productName.includes(searchTerm)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}

function openProceedModal() {
  alert("proceeding to pay for product....");
}