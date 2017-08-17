document.addEventListener("DOMContentLoaded", function(){
	inputPhone = document.getElementById("phone-number");
	inputPhone.addEventListener("keypress", formatPhoneNumberCB)

	function formatPhoneNumberCB(event) {
		var number = event.target.number;
		
	}
})