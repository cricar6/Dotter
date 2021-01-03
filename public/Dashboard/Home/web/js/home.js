user = firebase.auth().currentUser;

if (user) {
    $("#userHomeName").html(user.displayName);
    $("#userHomePhoto").attr("src", user.photoURL);
    $("#userHomePhoto").attr("alt", user.displayName);
    $("#userHomePhoto").attr("title", user.displayName);
}

function setPhase(currentPhase) {
    setCurrentPhase(currentPhase);
    setPhaseData(currentPhase);

    $(".main-nav-container").load("/Dashboard/Home/PhaseIntro/PhaseIntro.html");
}

function setCurrentPhase(currentPhase) {
    this.currentPhase = currentPhase;
}

function setPhaseData(currentPhase) {

    switch (currentPhase) {
        case '1':
            this.phaseData = {
                name: "Primera etapa",
                
                description: "En esta etapa tendrás tres diferentes tipos de piezas en tu recorrido (Rectas, curvas y bifurcadas). El diámetro de las piezas no variará y recuerda evitar tocar las paredes durante el recorrido. Asegúrate de tener todo correctamente conectado.",
                image: "./Dashboard/Home/PhaseIntro/web/img/phase-background-1.png",
                time: { ms: 0, s: 0, m: 0 },
                errorCounter: 
                [
                    { name: "Rectas", qty: 0 },
                    { name: "Curvas", qty: 0 },
                    { name: "Bifurcadas", qty: 0 }
                ],
                additionalInput: ""
            }
            break;
        case '2':
            this.phaseData = {
                name: "Segunda etapa",
                description: "En esta etapa tendrás cuatro diferentes tipos de piezas en tu recorrido (Rectas, curvas, bifurcadas y en espiral). El diámetro de las piezas variará durante el recorrido aumentando así su dificultad. Por ultimo recuerda evitar tocar las paredes durante el recorrido.",
                image: "./Dashboard/Home/PhaseIntro/web/img/phase-background-2.png",
                time: { ms: 0, s: 0, m: 0 },
                errorCounter: 
                [
                    { name: "Rectas", qty: 0 },
                    { name: "Curvas", qty: 0 },
                    { name: "Bifurcadas", qty: 0 },
                    { name: "Espiral", qty: 0 }
                ],
                additionalInput: ""
            }
            break;
        case '3':
            this.phaseData = {
                name: "Tercera etapa",
                description: "En esta etapa tendrás cinco diferentes tipos de piezas en tu recorrido (Rectas, curvas, bifurcadas y en espiral) siendo la quinta la pieza la que simula una patología la cual deberá ser tratada y la que se encontrará al final del recorrido. El diámetro de las piezas variará durante el recorrido aumentando así su dificultad. Por ultimo recuerda evitar tocar las paredes durante el recorrido.",
                image: "./Dashboard/Home/PhaseIntro/web/img/phase-background-3.png",
                time: { ms: 0, s: 0, m: 0 },
                errorCounter: 
                [
                    { name: "Rectas", qty: 0 },
                    { name: "Curvas", qty: 0 },
                    { name: "Bifurcadas", qty: 0 },
                    { name: "Espiral", qty: 0 },
                    { name: "Patología", qty: 0 }
                ],
                additionalInput: ""
            }
            break;
        default:
            this.phaseData = {
                name: "",
                description: "",
                time: { ms: 0, s: 0, m: 0 },
                errorCounter: [],
                additionalInput: ""
            }
            break;
    }
}
