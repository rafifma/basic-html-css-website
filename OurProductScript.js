const shoppingCartItems = [];
const newItem = 'Product 1';
shoppingCartItems.push(newItem);

const button1 = document.getElementById("buy-now1");
button1.addEventListener("click", () => {
  addToCart("Product 1");
});

const shoppingCart = document.getElementById('cart-items');

function addToCart(item) {
  const div = document.createElement('div');
  div.textContent = item;
  shoppingCart.appendChild(div);
}