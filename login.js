function validateLogin() {
    var email = document.getElementById('email').value; //stored value of userName from HTML in new variable _userName
    var password = document.getElementById('pswd').value; //same for variable _password

    var regxemail = /^([ a-z A-Z 0-9 ]+)@([ a-z ]+).([ a-z ]+)$/; // regxUsrName (regular expression) to create white-list characters set
    if (!(regxemail.test(email))) { // test if only white-list characters are in userName or not
        document.getElementById('validityMsg').style.visibility = "visible"; //if condition satisfies this shows error text beside usernme field
        return false;
    } else {
        document.getElementById('validityMsg').style.visibility = "hidden";
        return true;
    }
}