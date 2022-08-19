import React from "react"
import { Line } from "react-chartjs-2"
import Chart from "chart.js/auto"

function getChartTime(data, i) {
    const arr = []
    data.forEach((element) => {
        if (i === 0) arr.push(new Date(element.timestamp).toLocaleDateString())
        else arr.push(element.price)
    })
    return arr
}

function ChartCoin({ data }) {
    const chartData = {
        labels: getChartTime(data, 0),
        datasets: [
            {
                label: "Prices",
                data: getChartTime(data, 1),
                fill: "origin",
                backgroundColor: "#09C1EC80",
                borderColor: "#09C1EC",
                borderWidth: 2
            }
        ]
    }
    return (
        <div className="w-full">
            <Line
                data={chartData}
                options={{
                    scales: {
                        y: {
                            beginAtZero: false,
                            grid: {
                                display: true
                            }
                        },
                        x: {
                            grid: {
                                display: false
                            }
                        }
                    }
                }}
            />
            {false && Chart}
        </div>
    )
}

export default ChartCoin
