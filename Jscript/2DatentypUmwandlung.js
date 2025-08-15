const arrayData = [];

function object(name, email, message) {
    return {name,email,message}
}


function saveData() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    let formData = {
      name: name,
      email: email,
      message: message
    };

    // object(name, email, message);
    // arrayData.push(formData);
    console.log(email);
  }

  