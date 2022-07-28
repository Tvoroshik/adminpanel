var cfg = sessionStorage.getItem('cfg_tree_node');
var cfg_data = cfg.split(';');
var label_graf_name;
var color = Chart.helpers.color;

function Graph(prev, time, datagraph, timeline, length, num_graph) {
    datagraph = datagraph.split(';');
    timeline = timeline.split(';');
    time2 = time2.split(';');
    datetime2 = datetime2.split(';');
    console.log('length = ', length);
    // console.log('datetime2 = ', datetime2);
    // console.log('time = ', time);
    console.log('time = ', time);
    //console.log('timeline = ', timeline);

    if (length > 0 & num_graph == 0) {

        data.push({ x: time, y: prev });
        //console.log('prev = ', prev);
        //if (myBarChart) myBarChart.destroy();

    }

    const totalDuration = 0;
    const delayBetweenPoints = totalDuration / data.length;
    const previousY = (context1) => context1.index === 0 ? context1.chart.scales.y.getPixelForValue(100) : context1.chart.getDatasetMeta(context1.datasetIndex).data[context1.index - 1].getProps(['y'], true).y;

    var config = {
        type: 'line',
        data:
        {
            datasets:
                [{
                    backgroundColor: color(chartColors.grey).alpha(0.5).rgbString(),
                    borderColor: chartColors.grey,
                    fill: false,
                    lineTension: 0,
                    radius: 0,
                    //data: data[num_graph],
                    data: data,
                },
                {
                    backgroundColor: color(chartColors.grey).alpha(0.5).rgbString(),
                    borderColor: chartColors.grey,
                    fill: false,
                    lineTension: 0,
                    radius: 0,
                    //data: data[num_graph],
                    data: data2,
                },
                {
                    backgroundColor: color(chartColors.grey).alpha(0.5).rgbString(),
                    borderColor: chartColors.grey,
                    fill: false,
                    lineTension: 0,
                    radius: 0,
                    //data: data[num_graph],
                    data: data3,
                },
                {
                    backgroundColor: color(chartColors.grey).alpha(0.5).rgbString(),
                    borderColor: chartColors.grey,
                    fill: false,
                    lineTension: 0,
                    radius: 0,
                    //data: data[num_graph],
                    data: data4,
                },
                {
                    backgroundColor: color(chartColors.grey).alpha(0.5).rgbString(),
                    borderColor: chartColors.grey,
                    fill: false,
                    lineTension: 0,
                    radius: 0,
                    //data: data[num_graph],
                    data: data5,
                },
                {
                    backgroundColor: color(chartColors.grey).alpha(0.5).rgbString(),
                    borderColor: chartColors.grey,
                    fill: false,
                    lineTension: 0,
                    radius: 0,
                    //data: data[num_graph],
                    data: data6,
                }
                ]
        },
        options:
        {
            responsive: true,
            animation: {
                x: {
                    type: 'number',
                    easing: 'linear',
                    duration: delayBetweenPoints,
                    from: NaN, // the point is initially skipped
                },
                y: {
                    type: 'number',
                    easing: 'linear',
                    duration: delayBetweenPoints,
                    from: previousY,

                }

            },
            interaction: {
                intersect: false
            },
            plugins: {
                legend: false
            },
            scales: {
                x: {
                    x: {
                        min: '2021-11-07 00:00:00',
                    },
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
                    type: 'linear',
                },
            }
        }
    };
};
