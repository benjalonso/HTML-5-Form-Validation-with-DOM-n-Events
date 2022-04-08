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
      medioDePago,
      message
    } = form;

    let onlyText = /^[a-zA-Z\s]+$/;
    let onlyNumbers = /^[0-9]+$/;
    let onlyNumbersLength = /^[0-9]{16}$/;
    let onlyNumbersLengthToCVC = /^[0-9]{3,4}$/;

    let minLenght = /^[a-zA-Z\s]{4,12}$/;
    //El siguiente código nos valida el campo de Card
    if (card.value === "") {
      alert.style.display = "block";
      alert.innerHTML = "El campo es obligatorio";
      card.style.background = "#F5B7B1";
      errors = true;
    } else if (!onlyNumbersLength.test(card.value)) {
      alert.style.display = "block";
      alert.innerHTML = "Debe contener 16 dígitos";
      card.style.background = "#F5B7B1";
      errors = true;
    } else
      (card.style.background = "none"),
        (errors = false),
        (alert.style.display = "none");
    //El siguiente código nos valida el campo de CVC
    if (cvc.value === "") {
      alert.style.display = "block";
      alert.innerHTML = "El campo es obligatorio";
      cvc.style.background = "#F5B7B1";
      errors = true;
    } else if (!onlyNumbersLengthToCVC.test(cvc.value)) {
      alert.style.display = "block";
      alert.innerHTML = "Debe contener 3 a 4 dígitos";
      cvc.style.background = "#F5B7B1";
      errors = true;
    } else
      (cvc.style.background = "none"),
        (errors = false),
        (alert.style.display = "none");
    //El siguiente código nos valida el campo de Amount
    if (amount.value === "") {
      alert.style.display = "block";
      alert.innerHTML = "El campo es obligatorio";
      amount.style.background = "#F5B7B1";
      errors = true;
    } else
      (amount.style.background = "none"),
        (errors = false),
        (alert.style.display = "none");
    //El siguiente código nos valida el campo de Firstname
    if (firstname.value === "") {
      alert.style.display = "block";
      alert.innerHTML = "El campo es obligatorio";
      firstname.style.background = "#F5B7B1";
      errors = true;
    } else if (!onlyText.test(firstname.value)) {
      alert.style.display = "block";
      alert.innerHTML = "Debe contener un nombre";
      firstname.style.background = "#F5B7B1";
      errors = true;
    } else
      (firstname.style.background = "none"),
        (errors = false),
        (alert.style.display = "none");
    //El siguiente código nos valida el campo de Lastname
    if (lastname.value === "") {
      alert.style.display = "block";
      alert.innerHTML = "El campo es obligatorio";
      lastname.style.background = "#F5B7B1";
      errors = true;
    } else if (!onlyText.test(lastname.value)) {
      alert.style.display = "block";
      alert.innerHTML = "Debe contener un apellido";
      lastname.style.background = "#F5B7B1";
      errors = true;
    } else
      (lastname.style.background = "none"),
        (errors = false),
        (alert.style.display = "none");
    //El siguiente código nos valida el campo de City
    if (city.value === "") {
      alert.style.display = "block";
      alert.innerHTML = "El campo es obligatorio";
      city.style.background = "#F5B7B1";
      errors = true;
    } else if (!onlyText.test(city.value)) {
      alert.style.display = "block";
      alert.innerHTML = "Debe contener una ciudad";
      city.style.background = "#F5B7B1";
      errors = true;
    } else
      (city.style.background = "none"),
        (errors = false),
        (alert.style.display = "none");
    //El siguiente código nos valida el campo de State
    if (state.value === "") {
      alert.style.display = "block";
      alert.innerHTML = "El campo es obligatorio";
      state.style.background = "#F5B7B1";
      errors = true;
    } else
      (state.style.background = "none"),
        (errors = false),
        (alert.style.display = "none");
    //El siguiente código nos valida el campo de Postal Code
    if (postalCode.value === "") {
      alert.style.display = "block";
      alert.innerHTML = "El campo es obligatorio";
      postalCode.style.background = "#F5B7B1";
      errors = true;
    } else
      (postalCode.style.background = "none"),
        (errors = false),
        (alert.style.display = "none");
    //El siguiente código nos valida el campo de medios de pago
    if (medioDePago.value === "") {
      alert.style.display = "block";
      alert.innerHTML = "El campo es obligatorio";
      medioDePago.style.background = "#F5B7B1";
      errors = true;
    } else
      (medioDePago.style.background = "none"),
        (errors = false),
        (alert.style.display = "none");
    //El siguiente código nos valida el campo de Message
    if (message.value === "") {
      alert.style.display = "block";
      alert.innerHTML = "El campo es obligatorio";
      message.style.background = "#F5B7B1";
      errors = true;
    } else
      (message.style.background = "none"),
        (errors = false),
        (alert.style.display = "none");
  });
};
