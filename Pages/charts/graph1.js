var config = {
    type: 'line',
    data: {
        datasets: [{
            label: label_graf_name,
            backgroundColor: color(chartColors.purple).alpha(0.5).rgbString(),
            borderColor: chartColors.purple,
            fill: false,
            lineTension: 0,
            borderDash: [],
            data: []

        }, {

            label: label_graf_name,
            backgroundColor: color(chartColors.grey).alpha(0.5).rgbString(),
            borderColor: chartColors.grey,
            fill: false,
            lineTension: 0,
            borderDash: [],
            data: [],

        }]
    },
    options: {
        scales: {
            x: {
                type: 'line',
                title: {
                    display: true,
                    text: 'Время',
                    color: '#FFFFFF',
                    font: {
                        family: 'Times',
                        size: 16,
                    }
                },
                ticks: {
                    color: '#FFFFFF',
                },
                grid: {
                    display: true,
                    drawBorder: true,
                    drawOnChartArea: true,
                    drawTicks: true,
                    color: '#FFFFFF',
                },

            },
            y: {
                title: {
                    display: true,
                    text: 'Значение',
                    color: '#FFFFFF',
                    font: {
                        family: 'Times',
                        size: 16,


                    }
                },
                ticks: {
                    color: '#FFFFFF',
                },
                grid: {
                    display: true,
                    drawBorder: true,
                    drawOnChartArea: true,
                    drawTicks: true,
                    color: '#FFFFFF',
                },
            }
        },
        interaction: {
            intersect: false
        },
    }
};

