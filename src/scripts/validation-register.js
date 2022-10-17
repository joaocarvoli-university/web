/*Register form*/

var form_register = document.getElementById("form-register");
var email_register = document.getElementById("emailAddress-register");
var text_register = document.getElementById("text-email-register");

function validateEmailRegister() {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if ((re.test(email_register.value))) {
    form_register.classList.add("valid")
    form_register.classList.remove("invalid")
    text_register.innerHTML = "Your email is valid!"
    text_register.style.color = "green"
  } else {
    form_register.classList.remove("valid")
    text_register.classList.add("invalid")
    text_register.innerHTML = "Your email is invalid!"
    text_register.style.color = "red"
  }
}


/*Validating password */

var password = document.getElementById("password");
var passwordConfirmation = document.getElementById("passwordConfirmation");
var text_password = document.getElementById("text-pass");

function validatePassword(){
  if((password.value).length > 6 || (passwordConfirmation.value).length > 6){
    if (password.value === passwordConfirmation.value) {
      form_register.classList.add("valid")
      form_register.classList.remove("invalid")
      text_password.innerHTML = "Password mach"
      text_password.style.color = "green"
    } else {
      form_register.classList.remove("valid")
      text_password.classList.add("invalid")
      text_password.innerHTML = "Password doesn't mach"
      text_password.style.color = "red"
    }
  } else {
    text_password.classList.add("invalid")
    text_password.innerHTML = "The length of the password must be greater than 6"
    text_password.style.color = "red"
  }
}

var year = document.getElementById("year");
var month = document.getElementById("month");
var day = document.getElementById("day");

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

var countMonth = 0

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

var countYear = 0

var years = range(1900, 124).reverse()

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


function range(start, end) {
  return Array.apply(0, Array(end - 1))
    .map((element, index) => index + start);
}


form_register?.addEventListener("input", validateEmailRegister);
form_register?.addEventListener("input", validatePassword);
form_register?.addEventListener("click", validateMonth);
form_register?.addEventListener("click", validateYear);