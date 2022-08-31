import React from "react"
import { Line } from "react-chartjs-2"
import { Chart, registerables } from "chart.js"
import {getChartData} from "../../helpers/helpers"
Chart.register(...registerables)
const OPTIONS = {
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
}

function ChartCoin({ data }) {
    
    const chartData = {
        labels: getChartData(data, 'x'),
        datasets: [
            {
                label: "Prices",
                data: getChartData(data, 'y'),
                fill: "origin",
                backgroundColor: "#09C1EC80",
                borderColor: "#09C1EC",
                borderWidth: 2
            }
        ]
    }

    return (
        <div className="w-full">
            <Line data={chartData} options={OPTIONS} />
        </div>
    )
}

export default ChartCoin
