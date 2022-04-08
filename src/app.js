/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let alert = document.getElementById("alert");
alert.style.display = "none";

window.onload = function() {
  let loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", e => {
    e.preventDefault();

    let errors = false;
    let form = e.target;
    let {
      card,
      cvc,
      amount,
      firstname,
      lastname,
      city,
      state,
      postalCode,
      message
    } = form;
    // Expresiones regulares
    let onlyText = /^[a-zA-Z\s\u00E0-\u00FC]+$/;
    let onlyNumbers = /^[0-9]+$/;
    let onlyNumbersLength = /^[0-9]{16}$/;
    let onlyNumbersLengthToCVC = /^[0-9]{3,4}$/;
    // El siguiente codigo nos alerta sobre los errores en los campos
    let valoresDeCadaCampo = [
      card,
      cvc,
      amount,
      firstname,
      lastname,
      city,
      state,
      postalCode,
      message
    ];
    for (let i = 0; i < valoresDeCadaCampo.length; i++) {
      if (valoresDeCadaCampo[i].value == "") {
        valoresDeCadaCampo[i].style.background = "#F5B7B1";
        alert.style.display = "block";
        errors = true;
        alert.innerHTML = "El campo es obligatorio";
      } else if (!onlyNumbersLength.test(card.value)) {
        alert.innerHTML = "Debe contener 16 dígitos";
      } else if (!onlyNumbersLengthToCVC.test(cvc.value)) {
        alert.innerHTML = "Debe contener 3 a 4 dígitos";
      } else if (!onlyText.test(firstname.value)) {
        alert.innerHTML = "Debe contener un nombre";
      } else if (!onlyText.test(lastname.value)) {
        alert.innerHTML = "Debe contener un apellido";
      } else if (!onlyText.test(city.value)) {
        alert.innerHTML = "Debe contener una ciudad";
      } else if (!valoresDeCadaCampo[i].value == "") {
        valoresDeCadaCampo[i].style.background = "white";
        errors = false;
        alert.style.display = "none";
      }
    }
  });
};
