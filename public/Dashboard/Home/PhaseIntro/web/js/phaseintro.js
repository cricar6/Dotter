$("#phaseIntroName").html(this.phaseData.name);
$("#phaseIntroDescription").html(this.phaseData.description);
$("#phaseIntroImage").attr("src",this.phaseData.image);

function goBackToHome() {
    this.currentPhase = 0;

    this.phaseData = {
        name: "",
        description: "",
        image: "",
        time: { ms: 0, s: 0, m: 0 },
        errorCounter: [],
        additionalInput: ""
    }

    $(".main-nav-container").load("/Dashboard/Home/Home.html");
    $(".main-nav").show();

    
}

function continueToTest() {
    $(".main-nav-container").load("/Dashboard/Home/PhaseTimer/PhaseTimer.html");
    $(".main-nav").hide();

}