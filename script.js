let cart = []; // Array to store cart items
let cartCount = document.getElementById("counter");
let totalItems = parseInt(cartCount.textContent)
console.log(totalItems);
console.log(cartCount);
// Function to add an item to the cart
function addToCart(itemName, itemPrice) {
  updateCartCount();
  // Check if the product is already in the cart
  const existingItem = cart.find(item => item.name === itemName);
  

  if (existingItem) {
    // Increase the quantity if the product already exists
    existingItem.quantity++;
  } else {
    // Add a new item to the cart with an initial quantity of 1
    cart.push({ name: itemName, price: itemPrice, quantity: 1 });
  }
  updateCartDisplay();// Update the cart display
  
  console.log(totalItems);
  
  
}
//function to update the cart count 
function updateCartCount(){totalItems++
  cartCount.textcontent = totalItems;
  console.log(totalItems);
}
// Function to increment the quantity of an item
function incrementProduct(index) {
  cart[index].quantity++; // Increment the quantity
  updateCartDisplay();
}

// Function to decrement the quantity of an item
function decrementProduct(index) {
  if (cart[index].quantity > 1) {
    cart[index].quantity--; // Decrement the quantity
  } else {
    // Remove the item if the quantity is 0
    cart.splice(index, 1);
  }
  updateCartDisplay();
}

// Function to remove an item from the cart
function removeFromCart(index) {
  cart.splice(index, 1); // Remove the item from the cart
  updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  cartItemsContainer.innerHTML = ""; // Clear the cart items display

  let total = 0;
  

  // Loop through the cart and display each item
  cart.forEach((item, index) => {
    total += item.price * item.quantity; // Calculate total price

    const cartItem = document.createElement("div");
    cartItem.className = "cart-item"; 
    cartItem.innerHTML = `
    <span class="ItemName">Item:</span>
      <span> ${item.name}</span><br>
      <span class="ItemName">Price:</span>
      <span> GHS ${item.price.toFixed(2)}</span><br>
      <span class="ItemName">Quantity:</span>
      <span> ${item.quantity}</span>
      <button class="increment-btn" onclick="incrementProduct(${index})"><i class="fa-solid fa-plus"></i></button>
      <button class="decrement-btn" onclick="decrementProduct(${index})"><i class="fa-solid fa-minus"></i></button>
      <button class="remove-btn" onclick="removeFromCart(${index})"><i class="fa-solid fa-trash"></i></button><br><br>
    `;
    cartItemsContainer.appendChild(cartItem);
  });
  
  // Update the total price
  cartTotal.textContent = `${total.toFixed(2)}`;
}
  //Clear cart or close cart button
 function clearCart() {
  cart = {};
  updateCart();
 }

 // searching for item
 function searchProducts() {
  const searchTerm = document.getElementById("search-bar").value.toLowerCase();
  const products = document.querySelectorAll(".item");

  

  products.forEach(product => {
    const productName = product.querySelector("h5").innerText.toLowerCase();
    if (productName.includes(searchTerm)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}

// Show/hide cart modal
document.getElementById('cart-btn').addEventListener('click', () => {
  document.getElementById('shopping-cart').style.display = 'flex';
});      

document.getElementById('close').addEventListener('click', () => {
  document.getElementById('shopping-cart').style.display = 'none';
});
