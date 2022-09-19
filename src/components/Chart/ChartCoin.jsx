import React from "react"
import { Line } from "react-chartjs-2"
import { Chart, registerables } from "chart.js"
import { getChartData } from "../../helperFunctions/helpers"
Chart.register(...registerables)
const OPTIONS = {
    plugins: {
        legend: {
            display: false
        }
    },
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
    const extractedData = data.data
    const chartData = {
        labels: getChartData(extractedData, "x"),
        datasets: [
            {
                label: "Prices",
                data: getChartData(extractedData, "y"),
                fill: "origin",
                backgroundColor: "#09C1EC80",
                borderColor: "#09C1EC",
                borderWidth: 2
            }
        ]
    }

    return (
        <div className="w-full">
            ,
            <Line data={chartData} options={OPTIONS} />
        </div>
    )
}
export default ChartCoin
