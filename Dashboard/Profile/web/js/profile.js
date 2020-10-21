user = firebase.auth().currentUser;

if (user) {
    $("#userProfileName").html(user.displayName);
    $("#userProfilePhoto").attr("src", user.photoURL);
}

