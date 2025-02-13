// Get cart data from localStorage
const cart = JSON.parse(localStorage.getItem('cart')) || [];
const total = localStorage.getItem('total') || 0;

// Display cart summary
const cartItemsContainer = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');

function displayCartSummary() {
  cartItemsContainer.innerHTML = ''; // Clear any existing content

  // Display each cart item
  cart.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.innerHTML = `
      <p><strong>Item:</strong> ${item.name}</p>
      <p><strong>Price:</strong> GHS ${item.price.toFixed(2)}</p>
      <p><strong>Quantity:</strong> ${item.quantity}</p>
      <hr>
    `;
    cartItemsContainer.appendChild(itemElement);
  });

  // Display total price
  totalPriceElement.textContent = 'GHS ${total}';
}

// Handle form submission
const checkoutForm = document.getElementById('checkout-form');
checkoutForm.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission

  // Get user details
  const fullName = document.getElementById('full-name').value;
  const address = document.getElementById('address').value;
  const email = document.getElementById('email').value;
  const paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;

  // Display order summary
  alert(`
    Checkout Successful!
    Name: ${fullName}
    Address: ${address}
    Email: ${email}
    Payment Method: ${paymentMethod}
    Total Items: ${cart.length}
    Total Price: GHS ${total}
  `);

  // Clear cart data
  localStorage.removeItem('cart');
  localStorage.removeItem('total');

  // Redirect to home page
  window.location.href = 'index.html';
});
