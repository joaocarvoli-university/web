var form_register = document.getElementById("form-register");
var emailRegister = document.getElementById("emailAddress-register");
var textRegister = document.getElementById("text-email-register");

var year = document.getElementById("year");
var month = document.getElementById("month");
var day = document.getElementById("day");

var password = document.getElementById("password");
var passwordConfirmation = document.getElementById("passwordConfirmation");
var textPassword = document.getElementById("text-pass");

var checkBoxButton = document.getElementById("flexCheckDefault");
var signUpButton = document.getElementById("signUp");
signUpButton.disabled = true

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var countMonth = 0
var countYear = 0
var years = range(1900, 124).reverse()
var days_01 = range(1, 32)
var days_02 = range(1, 31)
var days_03 = range(1, 30)
var days_04 = range(1, 29)
var day_selected = false

/*Register form*/

function validateEmailRegister() {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if ((re.test(emailRegister.value))) {
    form_register.classList.add("valid")
    form_register.classList.remove("invalid")
    textRegister.innerHTML = "Your email is valid!"
    textRegister.style.color = "green"
  } else {
    form_register.classList.remove("valid")
    textRegister.classList.add("invalid")
    textRegister.innerHTML = "Your email is invalid!"
    textRegister.style.color = "red"
  }
}

/*Validating password */

function validatePassword(){
  if((password.value).length > 6 || (passwordConfirmation.value).length > 6){
    if (password.value === passwordConfirmation.value) {
      form_register.classList.add("valid")
      form_register.classList.remove("invalid")
      textPassword.innerHTML = "Password mach"
      textPassword.style.color = "green"
    } else {
      form_register.classList.remove("valid")
      textPassword.classList.add("invalid")
      textPassword.innerHTML = "Password doesn't mach"
      textPassword.style.color = "red"
    }
  } else {
    textPassword.classList.add("invalid")
    textPassword.innerHTML = "The length of the password must be greater than 6"
    textPassword.style.color = "red"
  }
}

function validateMonth(){
  if (countMonth < 1) {
    months.forEach(item => {
      option = document.createElement("option");
      option.text = item;
      month.appendChild(option)
    });
  }
  countMonth += 1
}

function validateYear(){
  if (countYear < 1) {
    years.forEach(item => {
      option = document.createElement("option");
      option.text = item;
      year.appendChild(option)
    });
  }
  countYear += 1
}

function validateDay(){
  var year = document.getElementById("year");
  var month = document.getElementById("month");
  
  if (day_selected == false){
    if (['Jan', 'Mar', 'May', 'Jul', 'Aug', 'Oct', 'Dec'].includes(month.value)) {
      days_01.forEach(item => {
        option = document.createElement("option");
        option.text = item;
        day.appendChild(option)
      });
    } else if (['Apr', 'Jun', 'Sep', 'Nov'].includes(month.value)) {
      days_02.forEach(item => {
        option = document.createElement("option");
        option.text = item;
        day.appendChild(option)
      });
    } else {
        if (leapyear(year.value)){
          days_03.forEach(item => {
            option = document.createElement("option");
            option.text = item;
            day.appendChild(option)
          });
        } else {
          days_04.forEach(item => {
            option = document.createElement("option");
            option.text = item;
            day.appendChild(option)
          });
        }
      }
    }
  day_selected = true
}

function checkBox(){
  console.log(checkBoxButton.checked)
  if (checkBoxButton.checked == true){
    signUpButton.disabled = false
  } else {
    signUpButton.disabled = true
  }
}


function leapyear(year){
  return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}

function range(start, end) {
  return Array.apply(0, Array(end - 1))
    .map((element, index) => index + start);
}

emailRegister?.addEventListener("input", validateEmailRegister);
passwordConfirmation?.addEventListener("input", validatePassword);
year?.addEventListener("click", validateYear);
month?.addEventListener("click", validateMonth);
day?.addEventListener("click", validateDay);
checkBoxButton?.addEventListener("click", checkBox);