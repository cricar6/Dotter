var database = firebase.database();

function writePhase(userId, phaseData) {
    if (phaseData.name == "Primera etapa") {
        firebase.database().ref('users/' + userId + '/phase1' + '/simulations').push({
            time: phaseData.time,
            errorCounter: phaseData.errorCounter,
            totalErrors: phaseData.totalErrors,
            comment: phaseData.additionalInput,
            date: firebase.database.ServerValue.TIMESTAMP
        });
    } else if (phaseData.name == "Segunda etapa") {
        firebase.database().ref('users/' + userId + '/phase2' + '/simulations').push({
            time: phaseData.time,
            errorCounter: phaseData.errorCounter,
            totalErrors: phaseData.totalErrors,
            comment: phaseData.additionalInput,
            date: firebase.database.ServerValue.TIMESTAMP
        });
    } else if (phaseData.name == "Tercera etapa") {
        firebase.database().ref('users/' + userId + '/phase3' + '/simulations').push({
            time: phaseData.time,
            errorCounter: phaseData.errorCounter,
            totalErrors: phaseData.totalErrors,
            comment: phaseData.additionalInput,
            date: firebase.database.ServerValue.TIMESTAMP
        });
    }
}



function updateBestResults(userId, phaseId) {
    if (phaseId == "1") {
        firebase.database().ref('users/' + userId + '/phase1' + '/simulations')
            .once('value')
            .then(function (snapshot) {
                console.log(userId)

                simulations = snapshot.val();
            }).then(() => {

                if (simulations != null) {
                    window.localStorage.setItem('phase1Data', JSON.stringify(simulations));
                    let phaseData = Object.values(JSON.parse(window.localStorage.getItem('phase1Data')));
                    
                    console.log(phaseData, "Data de la fase")
                    let bestTime = 0;
                    let bestErrors = 0;
                    phaseData.forEach(phase => {
                        let phaseTotalTime = (parseInt(phase.time.m) * 600) + parseInt(phase.time.ms) + (parseInt(phase.time.s) * 10);
    
                        if (bestTime == 0) {
                            bestTime = phaseTotalTime;
                        } else {
                            if (phaseTotalTime < bestTime) {
                                bestTime = phaseTotalTime;
                            }
                        }
    
                        let phaseTotalErrors = 0;
                        phase.errorCounter.forEach(error => {
                            phaseTotalErrors = phaseTotalErrors + error.qty;
                        });
    
                        if (bestErrors == 0) {
                            bestErrors = phaseTotalErrors;
                        } else {
                            if (phaseTotalErrors < bestErrors) {
                                bestErrors = phaseTotalErrors;
                            }
                        }
                    });
    
                    firebase.database().ref('users/' + userId + '/phase1').update({ bestTime: bestTime });
                    firebase.database().ref('users/' + userId + '/phase1').update({ bestErrors: bestErrors });
    
                } else {
                    console.log("No hay simulaciones para la fase 1")
                }
            });
    } else if (phaseId == "2") {
        firebase.database().ref('users/' + userId + '/phase2' + '/simulations')
        .once('value')
        .then(function (snapshot) {
            simulations = snapshot.val();
        }).then(() => {
            if (simulations != null) {
                window.localStorage.setItem('phase2Data', JSON.stringify(simulations));

                let phaseData = Object.values(JSON.parse(window.localStorage.getItem('phase2Data')));
    
                let bestTime = 0;
                let bestErrors = 0;
                phaseData.forEach(phase => {
                    let phaseTotalTime = (parseInt(phase.time.m) * 600) + parseInt(phase.time.ms) + (parseInt(phase.time.s) * 10);
    
                    if (bestTime == 0) {
                        bestTime = phaseTotalTime;
                    } else {
                        if (phaseTotalTime < bestTime) {
                            bestTime = phaseTotalTime;
                        }
                    }
    
                    let phaseTotalErrors = 0;
                    phase.errorCounter.forEach(error => {
                        phaseTotalErrors = phaseTotalErrors + error.qty;
                    });
    
                    if (bestErrors == 0) {
                        bestErrors = phaseTotalErrors;
                    } else {
                        if (phaseTotalErrors < bestErrors) {
                            bestErrors = phaseTotalErrors;
                        }
                    }
                });
    
                firebase.database().ref('users/' + userId + '/phase2').update({ bestTime: bestTime });
                firebase.database().ref('users/' + userId + '/phase2').update({ bestErrors: bestErrors });
            } else {
                console.log("No hay simulaciones para la fase 2")
            }
            
        });
    } else if (phaseId == "3") {
        firebase.database().ref('users/' + userId + '/phase3' + '/simulations')
        .once('value')
        .then(function (snapshot) {
            simulations = snapshot.val();
        }).then(() => {
            if (simulations != null) {
                window.localStorage.setItem('phase3Data', JSON.stringify(simulations));

                let phaseData = Object.values(JSON.parse(window.localStorage.getItem('phase3Data')));
    
                let bestTime = 0;
                let bestErrors = 0;
                phaseData.forEach(phase => {
                    let phaseTotalTime = (parseInt(phase.time.m) * 600) + parseInt(phase.time.ms) + (parseInt(phase.time.s) * 10);
    
                    if (bestTime == 0) {
                        bestTime = phaseTotalTime;
                    } else {
                        if (phaseTotalTime < bestTime) {
                            bestTime = phaseTotalTime;
                        }
                    }
    
                    let phaseTotalErrors = 0;
                    phase.errorCounter.forEach(error => {
                        phaseTotalErrors = phaseTotalErrors + error.qty;
                    });
    
                    if (bestErrors == 0) {
                        bestErrors = phaseTotalErrors;
                    } else {
                        if (phaseTotalErrors < bestErrors) {
                            bestErrors = phaseTotalErrors;
                        }
                    }
                });
    
                firebase.database().ref('users/' + userId + '/phase3').update({ bestTime: bestTime });
                firebase.database().ref('users/' + userId + '/phase3').update({ bestErrors: bestErrors });
            } else {
                console.log("No hay simulaciones para la fase 3")
            }
        });
    }
}