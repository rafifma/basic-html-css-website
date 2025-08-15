//navbar
let btn = document.querySelector('#btn');
let sidebar = document.querySelector('.sidebar');
let srcBtn = document.querySelector('.bx-search');

btn.onclick = function(){
    sidebar.classList.toggle('active');
}

srcBtn.onclick = function(){
    sidebar.classList.toggle('active');
}

//fenster erzeugen
function openNewWindow() {
    window.open("/OurProduct.html", "_blank", "width=800,height=800");
}

//DOM geolocator
function getLocation() {
    navigator.geolocation.getCurrentPosition(
        function(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            document.getElementById("geoLocation").textContent = "Latitude: " + latitude + "<br>Longitude: " + longitude;
        },
        function(error) {
            document.getElementById("geoLocation").textContent = "Geolocation error: " + error.message;
        }
    );
}
