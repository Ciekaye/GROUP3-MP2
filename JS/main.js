document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".c-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const formData = new FormData(form);

        fetch("send-email.php", {
            method: "POST",
            body: formData,
        })
        .then(response => response.text())
        .then(data => {
            if (data === "success") {
                alert("Message sent successfully!");
                form.reset();
            } else {
                alert("Error sending message. Please try again later.");
            }
        })
        .catch(error => {
            alert("An error occurred. Please try again later.");
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.getElementById('checkbox');
    const basicPrice = document.getElementById('basic-price');
    const standardPrice = document.getElementById('standard-price');
    const premiumPrice = document.getElementById('premium-price');

    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            basicPrice.innerText = '$199.99/mo';
            standardPrice.innerText = '$399.99/mo';
            premiumPrice.innerText = '$699.99/mo';
        } else {
            basicPrice.innerText = '$1999.99/yr';
            standardPrice.innerText = '$3999.99/yr';
            premiumPrice.innerText = '$6999.99/yr';
        }
    });
});

"use strict";

function initMap() {
  const myLatLng = {
    lat: 14.587207794189453,
    lng: 120.98300170898438
  };

  const locations = [
    { name: "New York", lat: 40.712776, lng: -74.005974 },
    { name: "California", lat: 36.778259, lng: -119.417931 },
    { name: "Texas", lat: 31.968599, lng: -99.901810 },
    { name: "Australia", lat: -25.274398, lng: 133.775136 },
    { name: "New Zealand", lat: -40.900557, lng: 174.885971 },
    { name: "Europe", lat: 54.5260, lng: 15.2551 },
    { name: "London", lat: 51.5074, lng: -0.1278 },
    { name: "Japan", lat: 36.2048, lng: 138.2529 },
    { name: "South Korea", lat: 35.9078, lng: 127.7669 }
  ];

  const map = new google.maps.Map(document.getElementById("gmp-map"), {
    zoom: 2,
    center: myLatLng,
    fullscreenControl: false,
    zoomControl: true,
    streetViewControl: false
  });

  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "My location"
  });

  locations.forEach(location => {
    new google.maps.Marker({
      position: { lat: location.lat, lng: location.lng },
      map,
      title: location.name
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
    const calculatorForm = document.getElementById("calculator-form");
    const totalDisplay = document.getElementById("total");
    const clearAllButton = document.getElementById("clear-all-btn");
    const calculateButton = document.getElementById("calculate-btn");
  
    calculateButton.addEventListener("click", function () {
      let total = 0;
  
      const selectedCheckboxes = calculatorForm.querySelectorAll('input[type="radio"]:checked');
      const selectedServices = new Set();
  
      selectedCheckboxes.forEach(radio => {
        const serviceName = radio.name;
        const serviceValue = parseFloat(radio.value);
  
        if (!selectedServices.has(serviceName)) {
          selectedServices.add(serviceName);
          total += serviceValue;
        }
      });
  
      totalDisplay.textContent = `Total: $${total.toFixed(2)}`;
    });
  
    clearAllButton.addEventListener("click", function () {
      const allRadios = calculatorForm.querySelectorAll('input[type="radio"]');
      allRadios.forEach(radio => {
        radio.checked = false;
      });
      totalDisplay.textContent = "Total: $0.00";
    });
});
  
// document.addEventListener("DOMContentLoaded", function () {
function saveData(){
  let email, password;
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;

  let user_record = new Array();
  user_record = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
  if(user_record.some((v)=>{
      return v.email==email && v.password==password
  })){
      alert("Login Successful")
      let current_user = user_record.filter((v)=>{
          return v.email==email && v.password==password
      })[0]

      localStorage.setItem("name", current_user.name);
      localStorage.setItem("email", current_user.email);
      window.location.href="../Profile/index.html";
  }
  else{
      alert("Login Failed");
  }
}
// });

document.addEventListener("DOMContentLoaded", function () {
document.querySelector("#show-login").addEventListener("click", function() {
  document.querySelector(".popup").classList.add("active");
  });
document.querySelector(".popup .close-btn").addEventListener("click", function() {
  document.querySelector(".popup").classList.remove("active");
});
});


function logOut(){
  localStorage.removeItem("name");
  localStorage.removeItem("email");
  window.location.href="../index.html"
}

let name_ = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let cnfrm_password = document.getElementById("cnfrm_password");
let message = document.getElementById("message");
    console.log(password, cnfrm_password)

function checkPassword () {
    message.innerText = password.value == cnfrm_password.value ? 'Password Match' : 'Password Not Match';
}
password.addEventListener('keyup', () => {
    if(cnfrm_password.value.length !=0) checkPassword();
})
cnfrm_password.addEventListener('keyup', checkPassword);


function saveData2() {
  const nameInput = document.getElementById("sign-name");
  const emailInput = document.getElementById("sign-email");
  const passwordInput = document.getElementById("sign-password");
  const cnfrmPasswordInput = document.getElementById("cnfrm_password");
  const message = document.getElementById("message");

  const name = nameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;

  let user_records = JSON.parse(localStorage.getItem("users")) || [];
  
  if (password !== cnfrmPasswordInput.value) {
      message.innerText = "Password does not match";
  } else if (user_records.some((v) => v.email === email)) {
      alert("Email already exists!");
  } else {
      user_records.push({
          name: name,
          email: email,
          password: password
      });
      localStorage.setItem("users", JSON.stringify(user_records));
      alert("Successfully Added!");
  }
}

function logOut(){
  localStorage.removeItem("name");
  localStorage.removeItem("email");
  window.location.href="../index.html"
}