function getHumanDate(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp);
    var months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year;
    return time;
}

function setSimulationErrors (counters) {
    document.querySelector(".simulations__errors-container__errors-content").innerHTML = "";
    
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

        document.querySelector(".simulations__errors-container__errors-content").append(errorContainer)
    });
}

function setSimulationData(errorCounter, totalErrors, comment, time) {
    $(".results-simulation").css("display", "block");
    $("#simulation__total-error").html(totalErrors);
    $("#simulation__comment").html(comment);
    $("#simulation__time").html(time);
    setSimulationErrors(errorCounter);

}

function hideSimulationData() {
    $(".results-simulation").css("display", "none");
}

function startCurrentPhaseSimulations(currentPhase) {    
    switch (currentPhase) {
        case "1":
            currentPhaseData = Object.values(JSON.parse(window.localStorage.getItem('phase1Data')));
            simulationsContainer = document.querySelector(".simulations-container__content");

            console.log(currentPhaseData, "FUNCIONAAAAA")
            currentPhaseData.forEach(simulation => {
        
                //Simulation Item
                let simulationItem = document.createElement("div");
                simulationItem.classList.add("simulation-item");
                simulationsContainer.append(simulationItem);
        
                //Simulation Header
                let simulationItemHeader = document.createElement("div");
                simulationItemHeader.classList.add("simulation-item__header");
                simulationItem.append(simulationItemHeader);
        
                let errorsContainer = document.createElement("p");
                errorsContainer.innerHTML = "<b>Errores totales: </b>" + simulation.totalErrors;
                simulationItemHeader.append(errorsContainer);
        
        
                //Simulation Container
                let simulationItemContainer = document.createElement("div");
                simulationItemContainer.classList.add("simulation-item__container");
                simulationItem.append(simulationItemContainer);
        
                //Simulation Container Content
                let simulationItemContainerContent = document.createElement("div");
                simulationItemContainerContent.classList.add("simulation-item__container__content");
                simulationItemContainer.append(simulationItemContainerContent);
        
        
                let dateContainer = document.createElement("p");
                dateContainer.classList.add("simulation-item__container__content__date");
                dateContainer.innerHTML = "<b>Fecha: </b>" + getHumanDate(simulation.date);
                simulationItemContainerContent.append(dateContainer);
        
                let timeContainer = document.createElement("p");
                timeContainer.classList.add("simulation-item__container__content__time");
                timeContainer.innerHTML = "<b>Tiempo: </b>" + simulation.time.m + ":" + simulation.time.s + ":" + simulation.time.ms;
                simulationItemContainerContent.append(timeContainer);
        
        
                let simulationItemContainerActions = document.createElement("div");
                simulationItemContainerActions.classList.add("simulation-item__container__actions");
                simulationItemContainerActions.innerHTML = '<img src="./Dashboard/Home/web/img/arrow-right.svg" alt="Next" />';
                simulationItemContainer.append(simulationItemContainerActions);
        
                simulationItem.addEventListener("click", () => {
                    setSimulationData(simulation.errorCounter, simulation.totalErrors, simulation.comment, simulation.time.m + ":" + simulation.time.s + ":" + simulation.time.ms)
                })
        
            });
        break;
        
        case "2":
            currentPhaseData = Object.values(JSON.parse(window.localStorage.getItem('phase2Data')));
            simulationsContainer = document.querySelector(".simulations-container__content");

            console.log(currentPhaseData, "FUNCIONAAAAA en 2")

            currentPhaseData.forEach(simulation => {
        
                //Simulation Item
                let simulationItem = document.createElement("div");
                simulationItem.classList.add("simulation-item");
                simulationsContainer.append(simulationItem);
        
                //Simulation Header
                let simulationItemHeader = document.createElement("div");
                simulationItemHeader.classList.add("simulation-item__header");
                simulationItem.append(simulationItemHeader);
        
                let errorsContainer = document.createElement("p");
                errorsContainer.innerHTML = "<b>Errores totales: </b>" + simulation.totalErrors;
                simulationItemHeader.append(errorsContainer);
        
        
                //Simulation Container
                let simulationItemContainer = document.createElement("div");
                simulationItemContainer.classList.add("simulation-item__container");
                simulationItem.append(simulationItemContainer);
        
                //Simulation Container Content
                let simulationItemContainerContent = document.createElement("div");
                simulationItemContainerContent.classList.add("simulation-item__container__content");
                simulationItemContainer.append(simulationItemContainerContent);
        
        
                let dateContainer = document.createElement("p");
                dateContainer.classList.add("simulation-item__container__content__date");
                dateContainer.innerHTML = "<b>Fecha: </b>" + getHumanDate(simulation.date);
                simulationItemContainerContent.append(dateContainer);
        
                let timeContainer = document.createElement("p");
                timeContainer.classList.add("simulation-item__container__content__time");
                timeContainer.innerHTML = "<b>Tiempo: </b>" + simulation.time.m + ":" + simulation.time.s + ":" + simulation.time.ms;
                simulationItemContainerContent.append(timeContainer);
        
        
                let simulationItemContainerActions = document.createElement("div");
                simulationItemContainerActions.classList.add("simulation-item__container__actions");
                simulationItemContainerActions.innerHTML = '<img src="./Dashboard/Home/web/img/arrow-right.svg" alt="Next" />';
                simulationItemContainer.append(simulationItemContainerActions);
        
                simulationItem.addEventListener("click", () => {
                    setSimulationData(simulation.errorCounter, simulation.totalErrors, simulation.comment, simulation.time.m + ":" + simulation.time.s + ":" + simulation.time.ms)
                })
        
            });
        
            break;
        case "3":
            currentPhaseData = Object.values(JSON.parse(window.localStorage.getItem('phase3Data')));
            simulationsContainer = document.querySelector(".simulations-container__content");
            
            console.log(currentPhaseData, "FUNCIONAAAAA EN 3")

            currentPhaseData.forEach(simulation => {
        
                //Simulation Item
                let simulationItem = document.createElement("div");
                simulationItem.classList.add("simulation-item");
                simulationsContainer.append(simulationItem);
        
                //Simulation Header
                let simulationItemHeader = document.createElement("div");
                simulationItemHeader.classList.add("simulation-item__header");
                simulationItem.append(simulationItemHeader);
        
                let errorsContainer = document.createElement("p");
                errorsContainer.innerHTML = "<b>Errores totales: </b>" + simulation.totalErrors;
                simulationItemHeader.append(errorsContainer);
        
        
                //Simulation Container
                let simulationItemContainer = document.createElement("div");
                simulationItemContainer.classList.add("simulation-item__container");
                simulationItem.append(simulationItemContainer);
        
                //Simulation Container Content
                let simulationItemContainerContent = document.createElement("div");
                simulationItemContainerContent.classList.add("simulation-item__container__content");
                simulationItemContainer.append(simulationItemContainerContent);
        
        
                let dateContainer = document.createElement("p");
                dateContainer.classList.add("simulation-item__container__content__date");
                dateContainer.innerHTML = "<b>Fecha: </b>" + getHumanDate(simulation.date);
                simulationItemContainerContent.append(dateContainer);
        
                let timeContainer = document.createElement("p");
                timeContainer.classList.add("simulation-item__container__content__time");
                timeContainer.innerHTML = "<b>Tiempo: </b>" + simulation.time.m + ":" + simulation.time.s + ":" + simulation.time.ms;
                simulationItemContainerContent.append(timeContainer);
        
        
                let simulationItemContainerActions = document.createElement("div");
                simulationItemContainerActions.classList.add("simulation-item__container__actions");
                simulationItemContainerActions.innerHTML = '<img src="./Dashboard/Home/web/img/arrow-right.svg" alt="Next" />';
                simulationItemContainer.append(simulationItemContainerActions);
        
                simulationItem.addEventListener("click", () => {
                    setSimulationData(simulation.errorCounter, simulation.totalErrors, simulation.comment, simulation.time.m + ":" + simulation.time.s + ":" + simulation.time.ms)
                })
        
            });
        
            break;
        default:
            break;
    }

}

startCurrentPhaseSimulations(currentPhase)