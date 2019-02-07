var email = $('.email');
var password = $('.password');
var passwordRepeat = $('.password-repeat');

function validateEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

function validatePass(pass) {
	var re = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
	return re.test(String(pass));
}

$('input').keyup(function() {
  var emailVal = email.val();
  var passwordVal = password.val();
  var passwordRepeatVal = passwordRepeat.val();
  var submit = $('.submit');
  
  if (validatePass(passwordVal) && validateEmail(emailVal) && (passwordVal === passwordRepeatVal)) {
    submit.prop('disabled', false);
  } else {
    submit.prop('disabled', true);
  }  
});