import React from 'react';
import { Container } from 'react-bootstrap';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official';
import highcharts3d from 'highcharts/highcharts-3d'
highcharts3d(Highcharts);

const LiquidityAnalysis = () => {
    const options = {
        chart: {
            type: 'scatter3d',
            options3d: {
                enabled: true,
                alpha: 20,
                beta: 30,
                depth: 200,
                viewDistance: 10,
                frame: {
                    bottom: {
                        size: 1,
                        color: 'rgba(0,0,0,0.05)'
                    }
                }
            }
        },
        title: {
            text: 'Liquidity Analysis'
        },
        yAxis: {
            min: 0,
            max: 10,
            title: {
                text: 'Volume'
            }
        },
        xAxis: {
            min: 0,
            max: 10,
            gridLineWidth: 1,
            title: {
                text: 'Market Cap'
            }
        },
        zAxis: {
            min: 0,
            max: 10,
            showFirstLabel: false,
            title: {
                text: 'Price change (24h)'
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            formatter: function () {
                debugger;
                return `Name: ${this.series.name}<br/>
                Market Cap: ${this.point.x}<br/>
                  Volume: ${this.point.y}<br/>
                  Price Change: ${this.point.z}`;
            }
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: true
                        }
                    }
                },
                // tooltip: {
                //     formatter: function () {
                //         const chart = this.point.series.chart,
                //             catsX = chart.xAxis[0].categories,
                //             catsY = chart.yAxis[0].categories,
                //             catsZ = chart.zAxis[0].options.categories;
                //         return `X: ${catsX[this.point.x]}<br/>
                //           Y: ${catsY[this.point.y]}<br/>
                //           Z: ${catsZ[this.point.z]}`;
                //     }
                // },
            }
        },
        series: [{
            "name": 'Data',
            "data": [[1.5, 2, 3]]
        },
        {
            "name": 'SQL',
            "data": [[8, 6, 3]]
        },
        {
            "name": 'Plain',
            "data": [[3, 5, 3]]
        }]
    }

    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
    )
}

export default LiquidityAnalysis;