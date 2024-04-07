document.getElementById('registrationForm').addEventListener('submit', function (event) {
    var user = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm_password').value;
    var email = document.getElementById('email').value;

    if (user === "" || email === "" || password === "" || confirmPassword === "") {
        alert("Please fill the following field you have not entered!");
        return false;
    }
    else if (password === confirmPassword) {
        alert("Registation Successfull!")
        return true;
    }

    else if (password !== confirmPassword) {
        alert("Passwords do not match!");
        event.preventDefault();
        return false;
    }
    var emailtype = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailtype.test(email)) {
        alert("Invalid email address!");
        event.preventDefault();
        return false;
    }
    else {
        return true;
    }
});