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

    let { card, cvc } = form;

    let onlyText = /^[a-zA-Z0-9]+$/;
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
      alert.innerHTML = "Debe contener mínimo 3 dígitos";
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
    //El siguiente código nos valida el campo de Amount
  });
};
