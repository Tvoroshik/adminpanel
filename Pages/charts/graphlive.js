var cfg = sessionStorage.getItem('cfg_tree_node');
var cfg_data = cfg.split(';');
var label_graf_name;
var color = Chart.helpers.color;

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
                type: 'realtime',
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

                realtime: {
                    duration: 20000,
                    refresh: 1000,
                    delay: 2000,
                    onRefresh:
                        chart => {
                            var data = sessionStorage.getItem('data_from_server');
                            data = data.split(';');
                            //console.log(data);
                            chart.data.datasets[0].data.push({
                                x: Date.now(),
                                y: Number(data[1]),
                            });
                            chart.data.datasets[1].data.push({
                                x: Date.now(),
                                y: Number(data[2]),
                            });
                        },
                }
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
