var hotelSearch = document.querySelector(".btn-hotel-search");
var mainForm = document.querySelector(".hotel-search-form");
var dateIn = mainForm.querySelector("[name=date-checkin]");
var dateOut = mainForm.querySelector("[name=date-checkout]");
var adult = mainForm.querySelector("[name=number-adults]");
var kids = mainForm.querySelector("[name=number-children]");

hotelSearch.addEventListener("click", function(event){
  event.preventDefault();
  mainForm.classList.toggle("form-close");
});

mainForm.addEventListener("submit", function(event){
  if (!dateIn.value || !dateOut.value || !adult.value || !kids.value){
    event.preventDefault();
    console.log("Введите данные");
  }
});
