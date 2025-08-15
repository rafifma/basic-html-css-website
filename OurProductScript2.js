//shopping cart und total price
var cart = [];
var totalPrice = 0;

function addToCart(name, price) {
  // add item to shopping cart
  var item = { name: name, price: price };
  cart.push(item);

  // sum total price
  totalPrice += price;

  // show sum item and total price in shopping cart
  
  var cartCount = document.getElementById("cart-counter");
  cartCount.textContent = cart.length;
  var cartTotal = document.getElementById("TotalPrice-counter");
  cartTotal.textContent = totalPrice.toFixed(2);
}
