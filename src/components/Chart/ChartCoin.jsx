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
const DEFAULT_CHART = [
    {
        timestamp: 1663200000000,
        price: null
    },
    {
        timestamp: 1663286400000,
        price: null
    },
    {
        timestamp: 1663372800000,
        price: null
    },
    {
        timestamp: 1663459200000,
        price: null
    },
    {
        timestamp: 1663545600000,
        price: null
    },
    {
        timestamp: 1663632000000,
        price: null
    },
    {
        timestamp: 1663718400000,
        price: null
    }
]

function ChartCoin({ data }) {
    const extractedData = data.data || DEFAULT_CHART
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
            <Line data={chartData} options={OPTIONS} />
        </div>
    )
}

export default ChartCoin
