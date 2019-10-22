$(function () {
    /*
     * BAR CHART
     * ---------
     */

    var bar_data = {
        data: [['January', 90], ['February', 95], ['March', 90], ['April', 85], ['May', 95], ['June', 90]],
        color: '#3c8dbc'
    }
    $.plot('#bar-chart', [bar_data], {
        grid: {
            borderWidth: 1,
            borderColor: '#f3f3f3',
            tickColor: '#f3f3f3'
        },
        series: {
            bars: {
                show: true,
                barWidth: 0.5,
                align: 'center'
            }
        },
        xaxis: {
            mode: 'categories',
            tickLength: 0
        }
    })
    /* END BAR CHART */

    /*
     * DONUT CHART
     * -----------
     */

    var donutData = [
        { label: 'Mục tiêu 1', data: 30, color: '#3c8dbc' },
        { label: 'Mục tiêu 2', data: 20, color: '#0073b7' },
        { label: 'Mục tiêu 3', data: 20, color: '#00c0ef' },
        { label: 'Mục tiêu 4', data: 30, color: '#B1D1E4' }
    ]
    $.plot('#donut-chart', donutData, {
        series: {
            pie: {
                show: true,
                radius: 1,
                innerRadius: 0.5,
                label: {
                    show: true,
                    radius: 2 / 3,
                    formatter: labelFormatter,
                    threshold: 0.1
                }

            }
        },
        legend: {
            show: false
        }
    })
    /*
     * END DONUT CHART
     */

    /*
    * Custom Label formatter
    * ----------------------
    */
    function labelFormatter(label, series) {
        return '<div style="font-size:13px; text-align:center; padding:2px; color: #fff; font-weight: 600;">'
            + label
            + '<br>'
            + Math.round(series.percent) + '%</div>'
    }
})