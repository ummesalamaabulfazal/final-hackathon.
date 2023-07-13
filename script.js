let searchform = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
  searchform.classList.toggle('active');
}

let shoppingcart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () =>{
  shoppingcart.classList.toggle('active');
}
let loginForm = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () =>{
  loginForm.classList.toggle('active');
}
// let cart = document.querySelector('.cart');
// document.querySelector('.check-btn').onclick = () =>{
//   cart.classList.toggle('active');
// } 
document.addEventListener('DOMContentLoaded', function() {
  let cart = document.querySelector('.cart');
  let overlay = document.querySelector('.overlay');
  let closeBtn = document.querySelector('.close-btn');

  document.querySelector('.check-btn').onclick = () => {
    cart.classList.add('active');
    overlay.classList.add('active');
  };

  closeBtn.onclick = () => {
    cart.classList.remove('active');
    overlay.classList.remove('active');
  };
});
// Select all the "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

// Attach event listener to each button
addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});

// Function to handle the "Add to Cart" action
function addToCart(event) {
  const product = event.target.closest('.pro'); // Get the parent product item
  const productName = product.querySelector('span').textContent;
  const productPrice = product.querySelector('h4').textContent;

  // Create a new cart item element
  const cartItem = document.createElement('div');
  cartItem.classList.add('shop-item');
  cartItem.innerHTML = `
    <img src="file/lev.jpg" alt="">
    <div class="text">
      <h2>${productName}</h2>
      <h3>1 <i class="fa-thin fa-xmark"></i> <span>${productPrice}</span></h3>
      <i class="fa-solid fa-circle-xmark"></i>
    </div>
  `;

  // Append the cart item to the shopping cart
  const shoppingCart = document.querySelector('.shopping-cart');
  shoppingCart.appendChild(cartItem);
}


















