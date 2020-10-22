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
            simulations = snapshot.val();
        }).then( () => {
            console.log(simulations, "log");
            return simulations;
        });
    } else if (phaseId == "2") {

    } else if (phaseId == "3") {

    }
}