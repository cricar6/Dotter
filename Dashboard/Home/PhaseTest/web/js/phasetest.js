ms = 0;
seconds = 0;
minutes = 0;

timer.set({ time : 100, autostart : true });

paused = false;
isOnTest = true;

$("#phaseTimerToogler").click(() => {
    if (paused) {
        timer.play();
        $("#phaseTimerToogler").html("Pausar simulación");
        $("#phaseTimerToogler").removeClass("paused");
        paused = false;
        isOnTest = true;
    } else {
        timer.pause();
        $("#phaseTimerToogler").html("Reanudar simulación");
        $("#phaseTimerToogler").addClass("paused");
        isOnTest = false;
        paused = true;
    }
});

phaseData = this.phaseData;

function updateCounters(counters) {
    document.querySelector(".phase-testing__errors-container__errors-content").innerHTML = "";
    
    counters.forEach(counter => {
        let errorContainer = document.createElement("div");

        let errorTitleContainer = document.createElement("div");
        errorTitleContainer.classList.add("errorTitleContainer");
        let errorTitle = document.createElement("p");
        errorTitleContainer.append(errorTitle);
        errorTitle.innerHTML = counter.name;

        let errorQtyContainer = document.createElement("div");
        errorQtyContainer.classList.add("errorQtyContainer");
        let errorQty = document.createElement("p");
        errorQtyContainer.append(errorQty);
        errorQty.innerHTML = counter.qty;

        errorContainer.append(errorTitleContainer);
        errorContainer.append(errorQtyContainer)

        document.querySelector(".phase-testing__errors-container__errors-content").append(errorContainer)
    });
}

updateCounters (this.phaseData.errorCounter)

function finishTest () {
    let msString;
    let secondString;
    let minuteString;

    (ms < 10) ? msString = '0' + ms : msString = ms;
    (seconds < 10) ? secondString = '0' + seconds : secondString = seconds;
    (minutes < 10) ? minuteString = '0' + minutes : minuteString = minutes;


    this.phaseData.time.ms = msString;
    this.phaseData.time.s = secondString;
    this.phaseData.time.m = minuteString;

    timer.reset();
    timer.stop();

    paused = true;
    isOnTest = false;
    
    $(".main-nav-container").load("../../Dashboard/Home/PhaseSummary/PhaseSummary.html");
}
