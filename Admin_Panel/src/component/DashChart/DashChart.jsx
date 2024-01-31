import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'
import './dash-chart.css'
const DashChart = () => {
    const colors = ['#008ffbd9', '#00e396d9', '#feb019d9', '#ff4560d9', '#775dd0d9', '#546e7ad9', '#26a69ad9', '#d10ce8d9'];
    const [state, setState] = useState({
        series: [{
            data: [21, 22, 10, 28, 16, 21, 13, 30]
        }],
        options: {
            chart: {
                height: 350,
                type: 'bar',
                events: {
                    click: function (chart, w, e) {
                    }
                }
            },
            colors: colors,
            plotOptions: {
                bar: {
                    columnWidth: '30%',
                    distributed: true,
                }
            },
            dataLabels: {
                enabled: false
            },
            legend: {
                show: false
            },
            xaxis: {
                categories: [
                    ['John', 'Doe'],
                    ['Joe', 'Smith'],
                    ['Jake', 'Williams'],
                    'Amber',
                    ['Peter', 'Brown'],
                    ['Mary', 'Evans'],
                    ['David', 'Wilson'],
                    ['Lily', 'Roberts'],
                ],
                labels: {
                    style: {
                        colors: colors,
                        fontSize: '14px'
                    }
                }
            }
        },

    })

    return (
        <>
            <div className="d-chart">
                <div id="chart">
                    <ReactApexChart options={state.options} series={state.series} type="bar" height={350} />
                </div>
            </div>
        </>
    )
}

export default DashChart