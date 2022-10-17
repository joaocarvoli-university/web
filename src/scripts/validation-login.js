/*Login form*/

var form = document.getElementById("form-login");
var email = document.getElementById("emailAddress-login");
var text = document.getElementById("text-email-login");

function validateEmail() {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if ((re.test(email.value))) {
    form.classList.add("valid")
    form.classList.remove("invalid")
    text.innerHTML = "Your email is valid!"
    text.style.color = "green"
  } else {
    form.classList.remove("valid")
    text.classList.add("invalid")
    text.innerHTML = "Your email is invalid!"
    text.style.color = "red"
  }
}

/*Listeners*/ 
form?.addEventListener("input", validateEmail);
