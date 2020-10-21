let signName;
let signPhotoUrl;

function asignAvatar(avatarId) {
    switch (avatarId) {
        case "1":
            signPhotoUrl = "https://randomuser.me/api/portraits/women/89.jpg";
            break;

        case "2":
            signPhotoUrl = "https://randomuser.me/api/portraits/women/38.jpg";
            break;

        case "3":
            signPhotoUrl = "https://randomuser.me/api/portraits/women/53.jpg";
            break;

        case "4":
            signPhotoUrl = "https://randomuser.me/api/portraits/women/66.jpg";
            break;

        case "5":
            signPhotoUrl = "https://randomuser.me/api/portraits/women/7.jpg ";
            break;

        case "6":
            signPhotoUrl = "https://randomuser.me/api/portraits/women/5.jpg";
            break;
        default:
            signPhotoUrl = "https://randomuser.me/api/portraits/women/89.jpg";
            break;
    }
}

function executeSignIn() {
    let signEmail = document.getElementById('signEmail').value;
    let signPass = document.getElementById('signPass').value;

    signName = document.getElementById('signName').value;
    createNewUser(signEmail, signPass);
}



function passToLogin() {
    $(".container").load("../../Auth/Login.html");
}