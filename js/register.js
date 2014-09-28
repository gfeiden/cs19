/*  Cool Stars 19 registration client-side form handling and validation

*/

function validateForm() {
    // client-side validation of all required form fields
    var err = 0;
    if (!validateField('FirstName')) {
        err++;
    }
    if (!validateField('Surname')) {
        err++;
    }
    if (!validateField('Affil')) {
    	err++;
    }
    if (!validateEmail('Email')) {
        err++;
    }
    if (!confirmEmail('EmailConfirm')) {
        err++;
    }
    if (!validateField('AddL1')) {
    	err++;
    }
    if (!validateField('City')) {
        err++;
    }
    if (!validateField('Zip')) {
        err++;
    }
    
    if (err > 0) {
    	if (err == 1) {
    		var errWarn = err + " error was detected. \n\n Please fill in the required field or fix the error.";
    	} else {
    		var errWarn = err + " errors were detected. \n\n Please fill in all required fields or fix the errors.";
    	}
        alert(errWarn);
        err = 0;
        return false;
    } else {
        err = 0;
        return true;
    }
}

function validateField(input) {
    var re = /[A-Za-z -']/;
    var entry = document.getElementById(input);
    var field = document.getElementById(input + 'Error');
    if (entry.value == null || entry.value == "") {
        // flag as a required field
        field.innerHTML = "";
        field.className = "fa fa-flag";
        field.style.color = '#c8201e';
        entry.style.border = "3px solid #c8201e";
        return false;
    } else if (!re.test(entry.value)) {
    	// flag as invalid characters
    	field.innerHTML = "";
    	field.className = "fa fa-flag";
    	field.style.color = '#c8201e';
    	entry.style.border = "3px solid #c8201e";
    	return false;
    } else {
        // mark as valid
        field.innerHTML = "";
        field.className = "fa fa-thumbs-up";
        field.style.color = "#4CBB17";
        entry.style.border = "3px solid rgba(0,0,0,0)";
        return true;
    }
}

function validateEmail(input){
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var email = document.getElementById(input);
    var atpos = email.value.indexOf("@");
    var dotpos = email.value.lastIndexOf(".");
    var field = document.getElementById(input + 'Error');
    if (email.value == null || email.value == "") {
        // check if anything was entered
        field.innerHTML = "";
        field.className = "fa fa-flag";
        field.style.color = "#c8201e";
        email.style.border = '3px solid #c8201e';
        return false;
    } else if (!re.test(email.value)) {
        // confirm email is made up of correct characters
        field.innerHTML = "";
        field.className = "fa fa-flag";
        field.style.color = "#c8201e";
        email.style.border = '3px solid #c8201e';
        return false;
    } else if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 > email.value.length) {
        // confirm that email appears to have proper character setup
        field.innerHTML = "";
        field.className = "fa fa-flag";
        field.style.color = "#c8201e";
        email.style.border = '3px solid #c8201e';
        return false;
    } else {
        field.innerHTML = "";
        field.className = "fa fa-thumbs-up";
        field.style.color = "#4CBB17";
        email.style.border = "3px solid rgba(0,0,0,0)";
        return true;
    }
}

function confirmEmail(input){
    // check that original email is valid
    var field = document.getElementById(input + 'Error')
    var email2 = document.getElementById(input);
    if (!validateEmail('Email')) {
        field.innerHTML = "";
        field.className = "fa fa-flag";
        field.style.color = "#c8201e";
        email2.style.border = '3px solid #c8201e';
        return false;
    }
    if (email2.value != document.getElementById('Email').value) {
        // email addresses do not match -- invalidate
        field.innerHTML = "";
        field.className = "fa fa-flag";
        field.style.color = "#c8201e";
        email2.style.border = '3px solid #c8201e';
        return false;
    } else {
        // email addresses match -- validate
        field.innerHTML = "";
        field.className = "fa fa-thumbs-up";
        field.style.color = "#4CBB17";
        email2.style.border = "3px solid rgba(0,0,0,0)";
        return true;
    }
}

function allowGuests(input) {
	if (document.getElementById(input + '_NotAttending').checked) {
		document.getElementById(input + 'Guest_Yes').disabled = true;
		document.getElementById(input + 'GuestN').disabled = true;
		document.getElementById(input + 'GuestN').value = "";
		document.getElementById(input + 'Guest_No').checked = true;
	} else {
		document.getElementById(input + 'Guest_No').disabled = false;
		document.getElementById(input + 'Guest_Yes').disabled = false;
	}
}

function guestToggle(input) {
	var Nguest = document.getElementById(input + 'N');
	
	if (document.getElementById(input + '_Yes').checked) {
		Nguest.disabled = false;
		Nguest.value = "0";
	} else {
		Nguest.value = "";
		Nguest.disabled = true;	
	}
}

function calcRegFee() {
    var date = new Date();
    var endEarly = new Date('03/15/2016');
    var endRegular = new Date('06/01/2016');
    var cost = 0;
    
    // base registration fee
    if (date <= endEarly) {
        cost = 400;
    } else if (date >= endEarly && date <= endRegular) {
        cost = 450;
    } else {
        cost = 600;
    }
    
    // opening reception guests
    
    // banquet guests
    
    elem = document.getElementsByClassName("totalCost");
    elem[0].innerHTML = cost;
}
