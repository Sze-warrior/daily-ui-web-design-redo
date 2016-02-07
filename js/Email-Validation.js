//The first part of the form validation function "([a-z0-9_.\-+]+)" 
//is saying the email must be within these characters but can be any of them. 
//The {1,} means it needs at least 1 character before the @ symbol to be valid.
//The "\@([A-Za-z0-9_\-\.]){1,}" indicates after the @ symbol they can be any of these characters.
//The {1,} means it needs at least 1 character before the @ symbol to be valid.
//The "\.([a-z\.]{2,})$/" means that anything after the . has to be any of these characters and has to be at least 2 characters.

function validate(form_id, email){
	var reg = /^([a-z0-9_.\-+]+){1,}\@([A-Za-z0-9_\-\.]){1,}\.([a-z\.]{2,})$/;
	var address = document.forms[form_id].elements[email].value;
	//elements is getting the input name="email"
	//form_id is the id of the form (email-form)

var emailInputError = document.getElementById('email-error');


	if (reg.test(address) == false){
    	emailInputError.style.display = 'block';		
    	return false;
	}else {
		return true;
	}
}

console.log("Hi"); 