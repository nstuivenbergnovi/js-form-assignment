function progressForm() {

    preProgress();

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let birthyear  = document.getElementById("birthyear").value;
    let phoneNumber  = document.getElementById("phoneNumber").value;
    let email  = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let repeatPassword = document.getElementById("password2").value;

    checkFirstName(firstName);
    checkEmail(email);
    checkPassword(password, repeatPassword);
    checkBirthyear(birthyear);

}

function reset() {
    let inputlist = document.getElementsByTagName("input");
}

function preProgress() {
    let errorMessageElement = document.getElementsByClassName("errorMessage")[0];
    errorMessageElement.innerHTML = "";
    errorMessageElement.style.display = "none";
}

function checkBirthyear(year) {
     let dateToday = new Date().getFullYear();
     if(dateToday - year <= 18) {
         let errorMessageElement = document.getElementsByClassName("errorMessage")[0];
         errorMessageElement.innerHTML += "<p>Je bent te jong</p>"
         errorMessageElement.style.display = "block";
     }

}

function checkEmail(email) {
    if (email.indexOf("@") === -1 ||
        email.indexOf(".") === -1) {
        let errorMessageElement = document.getElementsByClassName("errorMessage")[0];
        errorMessageElement.innerHTML += "<p>Het emailadres is ongeldig</p>"
        errorMessageElement.style.display = "block";
    }
}

function checkPassword(password, repeatPassword) {
    let error = false;
    if(checkIfEmpty(password) || checkIfEmpty(repeatPassword)) {
        error = true;
    }
    if(password !== repeatPassword) {
        error =  true;
    }
    if(error) {
        let errorMessageElement = document.getElementsByClassName("errorMessage")[0];
        errorMessageElement.innerHTML += "<p>Het wachtwoord is niet ingevuld of komen niet overeen.</p>"
        errorMessageElement.style.display = "block";
    }

}

function checkFirstName(value) {
    if(checkIfEmpty(value)) {
        let errorMessageElement = document.getElementsByClassName("errorMessage")[0];
        errorMessageElement.innerHTML += "<p>Naam is leeg</p>"
        errorMessageElement.style.display = "block";
    }
}

function checkIfEmpty(elementValue) {
    if(elementValue === "") {
        return true;
    }
    return false;
}

