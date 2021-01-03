$(".main-nav-container").load("../../Dashboard/Home/Home.html");

function MainTabNavigator(toTab) {
    switch (toTab) {
        case "home":
            $(".main-nav-container").load("../../Dashboard/Home/Home.html");
            $("#nav-home").addClass("active");
            $("#nav-statistics").removeClass("active");
            $("#nav-profile").removeClass("active");

            break;

        case "statistics":
            $(".main-nav-container").load("../../Dashboard/Statistics/Statistics.html");
            $("#nav-statistics").addClass("active");
            $("#nav-home").removeClass("active");
            $("#nav-profile").removeClass("active");
            currentPhase = '1';
            break;

        case "profile":
            $(".main-nav-container").load("../../Dashboard/Profile/Profile.html");
            $("#nav-profile").addClass("active");
            $("#nav-home").removeClass("active");
            $("#nav-statistics").removeClass("active");
            updateBestResults(user.uid, currentPhase);
            readAllPhases();
            break;
        default:
            break;
    }
}

