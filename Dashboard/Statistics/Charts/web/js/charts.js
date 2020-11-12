var x_time = ['1', '2', '3', '4', '5', '6'];
var y_tiempos = ['2465', '5665', '3465', '4565', '500', '6000'];
var y_errores = ['56', '41', '53', '46', '70', '60'];

var y_errores = ['56', '41', '53', '46', '70', '60'];

Chart.defaults.global.defaultFontFamily = 'Poppins';

new Chart(document.getElementById('myChart').getContext('2d'), {
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
                scaleLabel: { display: true, labelString: 'Tiempo de prueba' },
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


new Chart(document.getElementById('myBarChart').getContext('2d'), {
    type: 'bar',  // <-- define overall chart type
    data: {
        labels: ["Rectas", "Curvas", "Bifurcadas"],
        datasets: [{
            label: 'Total de errores',
            data: [20, 30, 20],
            backgroundColor: [
                'rgba(0, 99, 132, 0.6)',
                'rgba(30, 99, 132, 0.6)',
                'rgba(60, 99, 132, 0.6)'
            ],
            borderColor: [
                'rgba(0, 99, 132, 1)',
                'rgba(30, 99, 132, 1)',
                'rgba(60, 99, 132, 1)'
            ],
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
                }
            }]
        },
        elements: {
            rectangle: {
                borderSkipped: 'left',
            }
        }
    }
});