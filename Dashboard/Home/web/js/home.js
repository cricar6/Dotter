user = firebase.auth().currentUser;

if (user) {
    $("#userHomeName").html(user.displayName);
    $("#userHomePhoto").attr("src", user.photoURL);
}

function setPhase(currentPhase) {
    setCurrentPhase(currentPhase);
    setPhaseData(currentPhase);

    $(".main-nav-container").load("../../Dashboard/Home/PhaseIntro/PhaseIntro.html");
    $(".main-nav").hide();

}

function setCurrentPhase(currentPhase) {
    this.currentPhase = currentPhase;
}

function setPhaseData(currentPhase) {

    switch (currentPhase) {
        case '1':
            this.phaseData = {
                name: "Primera etapa",
                description: "Primera etapa proident laboris enim laboris magna deserunt do laborum. Exercitation sunt voluptate ullamco reprehenderit adipisicing ea aliqua.",
                time: { ms: 0, s: 0, m: 0 },
                errorCounter: 
                [
                    { name: "ErrorA", qty: 0 },
                    { name: "ErrorB", qty: 0 },
                    { name: "ErrorC", qty: 0 },
                    { name: "ErrorD", qty: 0 }
                ],
                additionalInput: ""
            }
            break;
        case '2':
            this.phaseData = {
                name: "Segunda etapa",
                description: "Segunda etapa proident laboris enim laboris magna deserunt do laborum. Exercitation sunt voluptate ullamco reprehenderit adipisicing ea aliqua.",
                time: { ms: 0, s: 0, m: 0 },
                errorCounter: 
                [
                    { name: "ErrorA", qty: 0 },
                    { name: "ErrorB", qty: 0 },
                    { name: "ErrorC", qty: 0 },
                    { name: "ErrorD", qty: 0 },
                    { name: "ErrorE", qty: 0 }
                ],
                additionalInput: ""
            }
            break;
        case '3':
            this.phaseData = {
                name: "Tercera etapa",
                description: "Tercera etapa proident laboris enim laboris magna deserunt do laborum. Exercitation sunt voluptate ullamco reprehenderit adipisicing ea aliqua.",
                time: { ms: 0, s: 0, m: 0 },
                errorCounter: 
                [
                    { name: "ErrorA", qty: 0 },
                    { name: "ErrorB", qty: 0 },
                    { name: "ErrorC", qty: 0 },
                    { name: "ErrorD", qty: 0 },
                    { name: "ErrorE", qty: 0 },
                    { name: "ErrorF", qty: 0 },
                    { name: "ErrorG", qty: 0 },
                    { name: "ErrorH", qty: 0 },
                    { name: "ErrorI", qty: 0 },
                    { name: "ErrorJ", qty: 0 },
                    { name: "ErrorK", qty: 0 },
                    { name: "ErrorL", qty: 0 }
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
