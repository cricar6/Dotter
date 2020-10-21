$(".main-nav-container").load("../../Dashboard/Home/Home.html");

function MainTabNavigator(toTab) {
    switch (toTab) {
        case "home":
            $(".main-nav-container").load("../../Dashboard/Home/Home.html");
            break;

        case "statistics":
            $(".main-nav-container").load("../../Dashboard/Statistics/Statistics.html");
            break;

        case "profile":
            $(".main-nav-container").load("../../Dashboard/Profile/Profile.html");
            break;
        default:
            break;
    }
}

