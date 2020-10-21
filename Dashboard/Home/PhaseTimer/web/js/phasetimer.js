$("#phaseTestName").html(this.phaseData.name);

phaseTimerTime = 3;

phaseTimerInterval = 0,
    interval = setInterval(function () {
        phaseTimerTime--;
        $("#phaseTimerTime").html(phaseTimerTime)
        phaseTimerInterval++;
        if (phaseTimerInterval >= 3) {
            clearInterval(interval);
            startTest();
        }
    }, 1000);


function startTest() {
    $(".main-nav-container").load("../../Dashboard/Home/PhaseTest/PhaseTest.html");
    this.isOnTest = true;
}

function cancelTest() {
    $(".main-nav-container").load("../../Dashboard/Home/PhaseIntro/PhaseIntro.html");
    clearInterval(interval);
}
