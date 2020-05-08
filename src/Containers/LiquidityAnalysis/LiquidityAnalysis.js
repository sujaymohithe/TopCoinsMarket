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
            title : {
                text : 'Price change (24h)'
            }
        },
        legend: {
            enabled: true
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
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: 'market cap {point.x} ,volume {point.y}, price change {point.z}'
                }
            }
        },
        series: [{
            name: 'Female',
            data: [[1,2,3], [1,4,5]]
        
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