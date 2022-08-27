// back to top
document.getElementById("topContact").addEventListener("click", function () {
	document.location = "#navContact";
});

// validation
var nam = document.getElementById("name");
var nameVal = document.getElementById("nameVal");
var nameReq = document.getElementById("nameReq");

var email = document.getElementById("email");
var emailVal = document.getElementById("emailVal");
var regexMail = /[0-9][0-9][0-9]@[a-z][a-z][a-z].com/i;
var emailReq = document.getElementById("emailReq");

var phone = document.getElementById("phone");
var phoneVal = document.getElementById("phoneVal");
var regexPhone = /01[0-2][0-9]/i;
var phoneReq = document.getElementById("phoneReq");

var message = document.getElementsByTagName("label");
var inpt = document.getElementsByTagName("input");

document.querySelector("form button").addEventListener("click", sub);
function sub(e) {
	e.preventDefault();
	// restoring style if data is valid
	for (var x = 0; x < message.length; x++) {
		message[x].style.display = "none";
	}
	for (var y = 0; y < inpt.length; y++) {
		inpt[y].style.border = "none";
		inpt[y].style.borderBottom = "1px solid var(--text-color)";
	}
	// name validation
	if (nam.value.length == 0) {
		nam.style.border = "3px solid #e76209";
		nameReq.style.display = "block";
	} else if (/\d/.test(nam.value) == true) {
		nameVal.style.display = "block";
		nam.style.border = "3px solid #e76209";
	}
	// email validation
	if (email.value == "") {
		emailReq.style.display = "block";
		email.style.border = "3px solid #e76209";
	} else if (regexMail.test(email.value) == false) {
		emailVal.style.display = "block";
		email.style.border = "3px solid #e76209";
	}
	// phone validation
	if (phone.value == "") {
		phoneReq.style.display = "block";
		phone.style.border = "3px solid #e76209";
	} else if (regexPhone.test(phone.value) == false) {
		phoneVal.style.display = "block";
		phone.style.border = "3px solid #e76209";
	}
}
