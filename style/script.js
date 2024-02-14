function validateName(username) {
    for (var i = 0; i < username.length; i++) {
        var char = username.charAt(i);
        if (!isLetter(char)) {
            return false;
        }
    }
    return true;
}

function isLetter(char) {
    return (
        (char >= "a" && char <= "z") ||
        (char >= "A" && char <= "Z")
    );
}

function validatePhoneNum(phoneNum) {
    for (var i = 0; i < phoneNum.length; i++) {
        if (isNaN(phoneNum[i])) {
            return false
        }
    }
    return true
}

function validasi() {
    let username = document.getElementById("input_username").value
    let email = document.getElementById("input_email").value
    let phoneNum = document.getElementById("input_phoneNum").value
    let checkbox = document.getElementById("input_checkbox")

    if (username == "") {
        document.getElementById("span_username").innerHTML = "Name cannot be blank"
        return false
    }
    else if (username.length < 5) {
        document.getElementById("span_username").innerHTML = "Name must be at least 5 letters"
        return false
    }
    else if (!validateName(username)) {
        document.getElementById("span_username").innerHTML = "Username must only contain letters"
        return false
    }
    else {
        document.getElementById("span_username").innerHTML = ""
    }
    if (email == "") {
        document.getElementById("span_email").innerHTML = "Email cannot be blank"
        return false
    }
    else if (!email.endsWith("@gmail.com")) {
        document.getElementById("span_email").innerHTML = "Email must end with @gmail.com"
        return false
    }
    else {
        document.getElementById("span_email").innerHTML = ""
    }
    if (phoneNum == "") {
        document.getElementById("span_phoneNum").innerHTML = "Phone Number cannot be blank"
        return false
    }
    else if (!validatePhoneNum(phoneNum)) {
        document.getElementById("span_phoneNum").innerHTML = "Phone Number must only contain numbers"
        return false
    }
    else {
        document.getElementById("span_phoneNum").innerHTML = ""
    }
    if (document.getElementById("no_input_preferences").selected) {
        document.getElementById("span_preferences").innerHTML = "Please select a preference"
        return false
    }
    else {
        document.getElementById("span_preferences").innerHTML = ""
    }
    if (!checkbox.checked) {
        document.getElementById("span_checkbox").innerHTML = "You must agree to receive newsletter"
        return false
    }
    else {
        document.getElementById("span_checkbox").innerHTML = ""
        alert("Success")
    }
    return true
}