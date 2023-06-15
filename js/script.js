"use strict";

const btnSubmit = document.querySelector(".email-submit");
const btnViewMore = document.querySelector(".viewMore");
const lblAlertInputEl = document.querySelector(".alert-label");
const btnHideInfor = document.querySelector(".close-modal");
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//check email validate Function
const validateEmail = (email) => {
  return String(email).toLowerCase().match(regex);
};

//Submit press
const subMitEmail = function () {
  // 1. Get input email value, change to lower case
  const emailValue = document.getElementById("email").value.toLocaleLowerCase();
  // 2. check email validate:
  if (validateEmail(emailValue)) {
    console.log(emailValue);
    //if valid: unhide information, hide input email form
    document.querySelector(".info").classList.remove("hidden");
    document.querySelector(".email-form").classList.add("hidden");
  } else {
    //if invalid: warning
    console.log("Error");
    document.querySelector(".email-form").classList.add("error-lable");
    lblAlertInputEl.textContent = "Email không đúng định dạng, hãy nhập lại";
  }
};

//Close infor
const closeModal = function () {
  document.querySelector(".info").classList.add("hidden");
  document.querySelector(".email-form").classList.remove("hidden");
};

btnSubmit.addEventListener("click", subMitEmail);
btnHideInfor.addEventListener("click", closeModal);

//When mouse over => remove hide class => show button view-more
function handleOnMouseOver(element) {
  const viewMore = element.querySelector(".viewMore");
  viewMore.classList.remove("hidden");
}

//When mouse out => add hide class => hidden button view-more
function handleOnMouseOut(element) {
  const viewMore = element.querySelector(".viewMore");
  const content = element.querySelector(".content-details");
  viewMore.classList.add("hidden");
}

//when click view more button => if view more: show contents if view less: hide contents
function handleViewMore(element) {
  const parrentEl = element.closest(".parent");
  const content = parrentEl.querySelector(".content-details");
  const textview = element.textContent.toLocaleLowerCase().trim();
  if (textview === "view more") {
    content.classList.remove("hidden");
    element.textContent = "View Less";
  } else {
    content.classList.add("hidden");
    element.textContent = "View More";
  }
}
