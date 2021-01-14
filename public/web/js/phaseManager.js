let currentPhase = '0';

let phaseData = {
    name: "",
    description: "",
    time: { ms: 0, s: 0, m: 0 },
    errorCounter: [],
    totalErrors: 0,
    additionalInput: ""
}

let phaseTimerTime = 3;
let phaseTimerInterval;

let isOnTest = false;

let totalErrors = [];

document.addEventListener('keyup', function (e) {
    if (isOnTest) {
        switch (e.key) {
            case 'a':
                phaseData.errorCounter[0].qty = phaseData.errorCounter[0].qty + 1;
                break;
            case 's':
                phaseData.errorCounter[1].qty = phaseData.errorCounter[1].qty + 1;
                break;
            case 'd':
                phaseData.errorCounter[2].qty = phaseData.errorCounter[2].qty + 1;
                break;
            case 'f':
                phaseData.errorCounter[3].qty = phaseData.errorCounter[3].qty + 1;
                break;
            case 'g':
                phaseData.errorCounter[4].qty = phaseData.errorCounter[4].qty + 1;
                break;
            case 'h':
                phaseData.errorCounter[5].qty = phaseData.errorCounter[5].qty + 1;
                break;
            case 'j':
                phaseData.errorCounter[6].qty = phaseData.errorCounter[6].qty + 1;
                break;
            case 'k':
                phaseData.errorCounter[7].qty = phaseData.errorCounter[7].qty + 1;
                break;
            case 'l':
                phaseData.errorCounter[8].qty = phaseData.errorCounter[8].qty + 1;
                break;
            case 'z':
                phaseData.errorCounter[9].qty = phaseData.errorCounter[9].qty + 1;
                break;
            case 'x':
                phaseData.errorCounter[10].qty = phaseData.errorCounter[10].qty + 1;
                break;
            case 'c':
                phaseData.errorCounter[11].qty = phaseData.errorCounter[11].qty + 1;
                break;
            default:
                break;
        }
        
        updateCounters(phaseData.errorCounter)
    }
});