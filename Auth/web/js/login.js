function executeLogin() {
    let logEmail = document.getElementById('logEmail').value;
    let logPass = document.getElementById('logPass').value;
    
    logUser(logEmail, logPass);
}

function passToSignIn() {
    $(".container").load("../../Auth/SignIn.html");
}