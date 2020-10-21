$("#summary__time").html(this.phaseData.time);

this.phaseData.errorCounter.forEach(element => {
    totalErrors.push(element.qty);
    console.log(totalErrors)
});

this.phaseData.totalErrors = totalErrors.reduce((a, b) => a + b, 0);
$("#summary__total-error").html(totalErrors.reduce((a, b) => a + b, 0));

function setSummaryErrors (counters) {
    document.querySelector(".phase-testing__errors-container__errors-content").innerHTML = "";
    
    counters.forEach(counter => {
        let errorContainer = document.createElement("div");

        let errorTitleContainer = document.createElement("div");
        let errorTitle = document.createElement("p");
        errorTitleContainer.append(errorTitle);
        errorTitle.innerHTML = counter.name;

        let errorQtyContainer = document.createElement("div");
        let errorQty = document.createElement("p");
        errorQtyContainer.append(errorQty);
        errorQty.innerHTML = counter.qty;

        errorContainer.append(errorTitleContainer);
        errorContainer.append(errorQtyContainer)

        document.querySelector(".phase-testing__errors-container__errors-content").append(errorContainer)
    });
}

setSummaryErrors(this.phaseData.errorCounter);

function finishSummary () {
    let additionalInfo = $("#additional-info-input").val();
    this.phaseData.additionalInput = additionalInfo;
    console.log (this.phaseData)
}