//alert checkbox in booking form
function validateForm() {
    var checkbox = document.getElementById("checkbox");
    if (!checkbox.checked) {
      alert("Please check the box first!");
      event.preventDefault();

    } else {
        alert("Thank you for your booking!");
    }
}

// for let array
const services = [
    { name: 'Beard trim', price: '10€'},
    { name: 'Regularcut', price: '10€'},
    { name: 'Shave', price: '10€'},
    { name: 'Hair coloring', price: '20€'},
    { name: 'Hair wash', price: '5€'}
  ];
  
  const serviceList = document.getElementById('servicesPrice');
  
  for (let i = 0; i < services.length; i++) {
    let service = services[i];
    let listItem = document.createElement('li');
    listItem.innerHTML = '<strong>' + service.name + '</strong> (<span id="servicePrice">' + service.price + '</span>)';
    serviceList.appendChild(listItem);
  }