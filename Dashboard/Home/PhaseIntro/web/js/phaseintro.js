$("#phaseIntroName").html(this.phaseData.name);
$("#phaseIntroDescription").html(this.phaseData.description);

function goBackToHome () {
    this.currentPhase = 0;

    this.phaseData = {
        name: "",
        description: "",
        time: "",
        errorCounter: [],
        additionalInput: ""
    }

    $(".main-nav-container").load("../../Dashboard/Home/Home.html");
    $(".main-nav").show();
}

function continueToTest() {
    $(".main-nav-container").load("../../Dashboard/Home/PhaseTimer/PhaseTimer.html");
}