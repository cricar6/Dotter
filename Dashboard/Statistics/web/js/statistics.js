user = firebase.auth().currentUser;

function loadPhaseStatistics () {
    $(".statistics-tab__phase-container__content").load("../../Dashboard/Statistics/Charts/Charts.html");
    updateBestResults(user.uid, currentPhase);
    
    switch (currentPhase) {
        case "1":
            $("#currentPhase").html("Primera etapa")
            $("#phase1menu").addClass("active");
            $("#phase2menu").removeClass("active");
            $("#phase3menu").removeClass("active");
            $("#chartsMenu").addClass("active");
            $("#simulationMenu").removeClass("active");
        

            break;
        case "2":
            $("#currentPhase").html("Segunda etapa")
            $("#phase2menu").addClass("active");
            $("#phase1menu").removeClass("active");
            $("#phase3menu").removeClass("active");
            $("#chartsMenu").addClass("active");
            $("#simulationMenu").removeClass("active");
        
            break;
        case "3":
            $("#currentPhase").html("Tercera etapa")
            $("#phase3menu").addClass("active");
            $("#phase2menu").removeClass("active");
            $("#phase1menu").removeClass("active");
            $("#chartsMenu").addClass("active");
            $("#simulationMenu").removeClass("active");
        
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
    $("#chartsMenu").addClass("active");
    $("#simulationMenu").removeClass("active");

}

function setSimulationsScreen() {
    $(".statistics-tab__phase-container__content").load("../../Dashboard/Statistics/Simulations/Simulations.html");
    $("#chartsMenu").removeClass("active");
    $("#simulationMenu").addClass("active");

}