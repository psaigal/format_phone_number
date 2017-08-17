var inputPhoneNumber = (function() {

	//ADD TO DOM
	inputPhone = document.createElement("input");
	inputPhone.id = "phone-number";
	document.addEventListener("DOMContentLoaded", function(){
		document.body.appendChild(inputPhone);
	})


	//EVENT LISTENERS
	inputPhone.addEventListener("keyup", formatPhoneNumberCB)
	inputPhone.addEventListener("keydown", checkInput)


	//CALLBACKS
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

	function checkInput(event) {
		console.log(event);
		if ((!isNumeric(event.key) || event.target.value.length > 13) && (event.keyCode !== 8)){
			event.preventDefault();
			return false;
		}
	}

	//HELPER FUNCTIONS
	function isNumeric(n) {
	  return !isNaN(parseFloat(n)) && isFinite(n);
	}
})()
	
