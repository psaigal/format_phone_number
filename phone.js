document.addEventListener("DOMContentLoaded", function(){
	inputPhone = document.getElementById("phone-number");
	inputPhone.addEventListener("keyup", formatPhoneNumberCB)
	inputPhone.addEventListener("keydown", isInputANumber)

	function formatPhoneNumberCB(event) {
		var number = event.target.value;
		var newNumber = number[number.length-1];
		if (number.length === 1) {
			number = "(" + newNumber;
		}
		else if (number.length === 4) {
			number += ") ";
		}
		else if (number.length === 9) {
			number += "-";
		}
		inputPhone.value = number;
	}

	function isNumeric(n) {
	  return !isNaN(parseFloat(n)) && isFinite(n);
	}

	function isInputANumber(event) {
		if (!isNumeric(event.key) || event.target.value.length > 13) {
			event.preventDefault();
			return false;
		}
	}
})


