function inputRender() {
  let nameInput = document.getElementById("userName");
  let emailInput = document.getElementById("userEmail");

  localStorage.setItem("userName", nameInput.value);
  localStorage.setItem("userEmail", emailInput.value);

  nameInput.value = "";
  emailInput.value = "";
}

let nameDash = document.getElementById("userNamedash");
let emailDash = document.getElementById("userEmaildash");

if (nameDash && emailDash) {
  nameDash.innerText = "Name: " + localStorage.getItem("userName");
  emailDash.innerText = "Email: " + localStorage.getItem("userEmail");
}
