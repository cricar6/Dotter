

function asignAvatar(avatarId) {
    switch (avatarId) {
        case "1":
            signPhotoUrl = "./web/assets/Avatars/avatar1.PNG";
            break;

        case "2":
            signPhotoUrl = "./web/assets/Avatars/avatar2.PNG";
            break;

        case "3":
            signPhotoUrl = "./web/assets/Avatars/avatar3.PNG";
            break;

        case "4":
            signPhotoUrl = "./web/assets/Avatars/avatar4.PNG";
            break;

        case "5":
            signPhotoUrl = "./web/assets/Avatars/avatar5.PNG";
            break;

        case "6":
            signPhotoUrl = "./web/assets/Avatars/avatar6.PNG";
            break;
        default:
            signPhotoUrl = "./web/assets/Avatars/avatar1.PNG";
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
    $(".container").load("/Auth/Login.html");
}

function avatarListeners () {
    document.querySelectorAll(".avatar-container .avatar").forEach(element => {
        element.addEventListener("click", () => {
            document.querySelectorAll(".avatar-container .avatar").forEach(element => {
                element.classList.remove('active');
            });
            element.classList.add('active');
        });
    });
}

avatarListeners();