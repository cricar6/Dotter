
function getTotalTimeInSeconds(m, s) {
    let mSeconds = m * 60;
    let sSeconds = s;
    return String(mSeconds + sSeconds);
}

function getErrorSums(errorName, errorArray) {
    return errorArray.reduce((sum, e) => {
        (e.name == errorName) ? (sum += e.qty) : (sum += 0)
        return sum;
    }, 0);
}

function getDataForFailPieces(phaseData, limit) {

    let allErrorsInThisSimulation = [];
    phaseData.forEach(phase => {
        phase.errorCounter.forEach(error => {
            allErrorsInThisSimulation.push(error)
        });
    });

    let allErrorsArray = [];
    let allErrorSums = 0;
    phaseData[0].errorCounter.forEach(error => {
        let errorItem = {
            name: error.name,
            total: getErrorSums(error.name, allErrorsInThisSimulation)
        }
        allErrorSums = allErrorSums + errorItem.total;
        allErrorsArray.push(errorItem);
    });

    console.log(allErrorsArray, "ARRAY ORGANIZADO DE TODOS LOS OBJETOS")
    console.log(allErrorSums, "SUMA DE TODOS LOS ERRORES")

    let percentageErrorArray = [];
    allErrorsArray.forEach(errorTotal => {
        let errorItem = {
            name: errorTotal.name,
            percentage: (errorTotal.total / allErrorSums) * 100
        }
        percentageErrorArray.push(errorItem);
    });

    console.log(percentageErrorArray, "ARRAY DE PORCENTAJES");
    
    let topPercentages = percentageErrorArray.sort((a,b) => b-a).slice(0,limit);
    console.log(topPercentages, "ARRAY DE PORCENTAJES SORTEADO")

    let failLabels = []
    let failNumbers = []
    
    topPercentages.forEach(percentage => {
        failLabels.push(percentage.name);
        failNumbers.push(percentage.percentage);
    });
    
    return {
        failLabels: failLabels,
        failNumbers: failNumbers
    }
}


function getCurrentPhaseData(phaseData, currentPhase) {
    if (phaseData != null) {

        let dataTimes = [];
        let dataErrors = [];
        let dataIds = [];

        phaseData.forEach((phaseDataItem, index) => {
            dataIds.push("" + index);
            dataErrors.push("" + phaseDataItem.totalErrors);
            dataTimes.push(getTotalTimeInSeconds(parseInt(phaseDataItem.time.m), parseInt(phaseDataItem.time.s)))
        });

        return { 
            dataTimes: dataTimes, 
            dataErrors: dataErrors, 
            dataIds: dataIds, 
            failPercentages: getDataForFailPieces(phaseData, 3) 
        }
    } else {
        return null;
    }
}

function setCharts(currentPhaseDataChart) {

    var x_time = currentPhaseDataChart.dataIds;
    var y_tiempos = currentPhaseDataChart.dataTimes;
    var y_errores = currentPhaseDataChart.dataErrors;

    var failLabels = currentPhaseDataChart.failPercentages.failLabels;
    var failDataset = currentPhaseDataChart.failPercentages.failNumbers;

    Chart.defaults.global.defaultFontFamily = 'Poppins';

    new Chart(document.getElementById('chartErrorsTimes').getContext('2d'), {
        type: 'line',  // <-- define overall chart type
        data: {
            labels: x_time,
            datasets: [{
                type: 'line',
                label: 'Tiempo',
                fill: false,
                backgroundColor: 'rgb(212, 224, 239)',
                borderColor: 'rgb(49, 83, 117)',
                pointRadius: 6,
                pointHoverRadius: 10,
                lineTension: 0.1,
                pointBorderColor: 'rgba(0, 0, 0, 0)',
                borderWidth: 1,
                data: y_tiempos,
                yAxisID: 'left-axis'
            }, {
                label: 'Errores',
                fill: false,
                backgroundColor: 'rgb(40, 206, 217)',
                borderColor: 'rgb(40, 206, 217)',
                pointBorderColor: 'rgba(0, 0, 0, 0)',
                pointHoverRadius: 10,
                lineTension: 0.1,
                data: y_errores,
                yAxisID: 'right-axis'
            }]
        },
        options: {
            legend: { position: 'top', usePointStyle: true },
            maintainAspectRatio: false,
            responsive: true,
            title: {
                display: false,
                text: 'Tiempo vs Errores'
            },
            tooltips: { mode: 'index', intersect: false },
            hover: { mode: 'nearest', intersect: true },
            scales: {
                xAxes: [{ display: true, stacked: true, scaleLabel: { display: false, labelString: 'time' } }],
                yAxes: [{
                    type: 'linear',
                    id: 'left-axis',
                    display: true,
                    position: 'left',
                    scaleLabel: { display: true, labelString: 'Tiempo de prueba (s)' },
                    gridLines: { drawOnChartArea: false },
                    ticks: {
                        display: true //this will remove only the label
                    }

                }, {
                    type: 'linear',
                    id: 'right-axis',
                    display: true,
                    position: 'right',
                    stacked: false,
                    scaleLabel: { display: true, labelString: 'Total de errores' },
                    gridLines: { drawOnChartArea: false },
                    ticks: {
                        display: true //this will remove only the label
                    }
                }]
            }
        }
    });


    new Chart(document.getElementById('chartFailPiece').getContext('2d'), {
        type: 'bar',  // <-- define overall chart type
        data: {
            labels: failLabels,
            datasets: [{
                label: 'Total de errores',
                data: failDataset,
                backgroundColor: 'rgb(212, 224, 239)',
                borderColor: 'rgba(0, 0, 0, 0)',
                borderWidth: 2,
                hoverBorderWidth: 0
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    barPercentage: 0.5,
                    scaleLabel: { display: true, labelString: 'Total de errores' },
                    ticks: {
                        display: true,
                        beginAtZero: true
                    },
                    gridLines: { drawOnChartArea: false }
                }],
                xAxes: [{
                    gridLines: { drawOnChartArea: false }
                }],
            },
            elements: {
                rectangle: {
                    borderSkipped: 'left',
                }
            }
        }
    });

}

function startCurrentPhaseCharts(currentPhase) {
    console.log(currentPhase, "----------------------------CURRENT PHASE")

    switch (currentPhase) {
        case "1":
            currentPhaseDataChart = getCurrentPhaseData(Object.values(JSON.parse(window.localStorage.getItem('phase1Data'))), currentPhase);
            setCharts(currentPhaseDataChart);
            $("#statistics__best-time").html(window.localStorage.getItem('phase1BestTime') + " segundos");
            $("#statistics__best-errors").html(window.localStorage.getItem('phase1BestErrors'));
            break;
        case "2":
            currentPhaseDataChart = getCurrentPhaseData(Object.values(JSON.parse(window.localStorage.getItem('phase2Data'))), currentPhase);
            setCharts(currentPhaseDataChart);
            $("#statistics__best-time").html(window.localStorage.getItem('phase2BestTime') + " segundos");
            $("#statistics__best-errors").html(window.localStorage.getItem('phase2BestErrors'));

            break;
        case "3":
            currentPhaseDataChart = getCurrentPhaseData(Object.values(JSON.parse(window.localStorage.getItem('phase3Data'))), currentPhase);
            setCharts(currentPhaseDataChart);
            $("#statistics__best-time").html(window.localStorage.getItem('phase3BestTime') + " segundos");
            $("#statistics__best-errors").html(window.localStorage.getItem('phase3BestErrors'));

            break;
        default:
            break;
    }
}

startCurrentPhaseCharts(currentPhase);


