document.addEventListener("DOMContentLoaded", function(){
	inputPhone = document.getElementById("phone-number");
	inputPhone.addEventListener("keypress", formatPhoneNumberCB)

	function formatPhoneNumberCB(event) {
		var number = event.target.value;
		if (number.length > 13) {
			event.preventDefault();
			return false;
		}
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
})


