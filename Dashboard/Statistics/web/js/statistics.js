user = firebase.auth().currentUser;

function loadPhaseStatistics () {
    $(".statistics-tab__phase-container__content").load("../../Dashboard/Statistics/Charts/Charts.html");
    updateBestResults(user.uid, currentPhase);
    
    switch (currentPhase) {
        case "1":
            $("#currentPhase").html("Primera etapa")
            break;
        case "2":
            $("#currentPhase").html("Segunda etapa")
            break;
        case "3":
            $("#currentPhase").html("Tercera etapa")
            break;
        default:
            break;
    }
    
}

loadPhaseStatistics();

function changePhase(nextPhase) {
    currentPhase = nextPhase;
    loadPhaseStatistics();
}

function setChartsScreen() {
    $(".statistics-tab__phase-container__content").load("../../Dashboard/Statistics/Charts/Charts.html");
}

function setSimulationsScreen() {
    $(".statistics-tab__phase-container__content").load("../../Dashboard/Statistics/Simulations/Simulations.html");

}