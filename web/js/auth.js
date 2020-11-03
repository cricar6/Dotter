let user = firebase.auth().currentUser;

function createNewUser(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode, errorMessage);
    }).then (function () {
        user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: signName,
            photoURL: signPhotoUrl
        }).then(function () {
            // Update successful.
            console.log("Update successful for: ", user.displayName, user.photoURL)
        }).catch(function (error) {
            // An error happened.
            console.log("An error happened: ", error)
        });
    });
}

function logUser(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;

        $("#loginError").html(errorMessage);

        console.log(errorCode, errorMessage, "HOLA");
    });
}

function logOut() {
    firebase.auth().signOut().then(function () {
        // Sign-out successful.
        console.log("Signed Out")
        $(".container").load("../../Auth/Login.html")
    }).catch(function (error) {
        // An error happened.
        console.log("Couldn't Sign Out: ", error)
    });
}


firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        user = firebase.auth().currentUser;
        console.log("You are now logged with: ", user.uid);
        $(".container").load("../../Dashboard/Dashboard.html")
    } else {
        console.log("You are not logged right now")
    }
});

let signName;
let signPhotoUrl;