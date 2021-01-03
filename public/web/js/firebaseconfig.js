
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

firebase.analytics();
