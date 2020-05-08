import React from 'react';
import './LiquidityAnalysis.css';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import highcharts3d from 'highcharts/highcharts-3d';
highcharts3d(Highcharts);

const LiquidityAnalysis = props => {
    let plotData = props.coinMarketData;
    //Calculate min and max value for chart x-axis line
    let MCValues = plotData.map(function (v) {
        return v.quote.USD.market_cap;
    });
    const maxValueX = Math.max.apply(null, MCValues);
    const minValueX = Math.min.apply(null, MCValues);

    //Calculate min and max value for chart y-axis line
    let volumeValues = plotData.map(function (v) {
        return v.quote.USD.volume_24h;
    });
    const maxValueY = Math.max.apply(0, volumeValues);
    const minValueY = Math.min.apply(0, volumeValues);

    //Calculate min and max value for chart z-axis, calculating obsolute price here
    //obsolute price calculation below is my understanding
    let PCValues = plotData.map(function (v) {
        return v.quote.USD.price + ((v.quote.USD.percent_change_24h / 100) * v.quote.USD.price);
    });
    const maxValueZ = Math.max.apply(0, PCValues);
    const minValueZ = Math.min.apply(0, PCValues);
    //converting response aray to required array format for plotting
    plotData = plotData.map((eachPlot, index) => {
        return {
            "name": eachPlot.name,
            "data": [[eachPlot.quote.USD.market_cap,
            eachPlot.quote.USD.volume_24h,
            eachPlot.quote.USD.price + ((eachPlot.quote.USD.percent_change_24h / 100) * eachPlot.quote.USD.price)
            ]]
        }
    });

    const options = {
        chart: {
            type: 'scatter3d',
            height: 700,
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
            min: minValueY,
            max: maxValueY,
            title: {
                text: 'Volume',
                align: 'high',
                offset: 0,
                rotation: 0,
                y: -40
            }
        },
        xAxis: {
            min: minValueX,
            max: maxValueX,
            gridLineWidth: 1,
            title: {
                text: 'Market Cap',
                offset: 50,
                rotation: 0,
            },
        },
        zAxis: {
            min: minValueZ,
            max: maxValueZ,
            showFirstLabel: false,
            title: {
                text: 'Price change (24h)',
                align: 'high',
                z: 50,
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            formatter: function () {
                return `Name: ${this.series.name}<br/>
                Market Cap ($): ${this.point.x}<br/>
                  Volume ($): ${this.point.y}<br/>
                  Absolute Price ($): ${this.point.z}`;
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
                            enabled: false
                        }
                    }
                },
            }
        },
        series: plotData
    }

    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
    )
}

export default LiquidityAnalysis;