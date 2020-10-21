
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
let firebaseConfig = {
    apiKey: "AIzaSyBe14sVTJfRxSkhqyudfVUTqZN6l8fEMw8",
    authDomain: "dotter-48276.firebaseapp.com",
    databaseURL: "https://dotter-48276.firebaseio.com",
    projectId: "dotter-48276",
    storageBucket: "dotter-48276.appspot.com",
    messagingSenderId: "646608227078",
    appId: "1:646608227078:web:cad8beaa7e5133a308ec87",
    measurementId: "G-ZE03NERTHE"
};

// Initialize Firebase
let defaultProject = firebase.initializeApp(firebaseConfig);
let user = firebase.auth().currentUser;

firebase.analytics();

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

        console.log(errorCode, errorMessage);
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