function validateForm() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var phoneNumber = document.getElementById('phNo').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('pswd1').value;
    var rePassword = document.getElementById('pswd2').value;
    //extracted values from HTML Sign Up page in newly created variables

    var regxName = /^[a-z A-Z]+$/;

    //validating First Name
    if (!(regxName.test(firstName))) {
        //after running regxName if its !(true) \...which is false...\ then show error...
        alert("Please enter valid first name!");
        firstName.style.border = "solid 3px red";

        //validating Last Name
    } else if (!(regxName.test(lastName))) {
        alert("Please enter valid last name!");
        lastName.style.border = "solid 3px red";
    }

    // validating phone number
    var regxPhNo = /^\+91[7-9][0-9]+$/;
    if (!(regxPhNo.test(phoneNumber))) {
        alert("Enter valid phone number!");
        phoneNumber.style.border = "solid 3px red";
    }

    //validating email address like abc@xyz.com
    var regxEmail = /^([ a-z A-Z 0-9 ]+)@([ a-z ]+).([ a-z ]+)$/;
    //if regxEmail test is fails then generate alert!
    if (!(regxEmail.test(email))) {
        alert("Please enter email id in format of abc@xyz.com");
    }

    //check if both password match with each other or not...
    if (password != rePassword) {
        alert("Passwords do not match!");
        return false;
    }
}