function formValidation() {

var emailInput = document.getElementById('email').value;
var emailInputError = document.getElementById('email-error');

if( emailInput.length < 2 || emailInput == ""){
    emailInputError.style.display = 'block';
    return false;
}else {
	return true;
}
}