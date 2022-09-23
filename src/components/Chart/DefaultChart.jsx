import React from "react"
import { Line } from "react-chartjs-2"
import { Chart, registerables } from "chart.js"
import { getChartData } from "../../helperFunctions/helpers"
import { DEFAULT_CHART, DEFAULT_OPTIONS } from "helperFunctions/constants"
Chart.register(...registerables)

function DefaultChart() {
    const extractedData = DEFAULT_CHART
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
        <div className="w-full relative">
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl opacity-70 font-semibold text-gray-500 dark:text-gray-400 ">
                Chart Unavailable
            </p>
            <Line data={chartData} options={DEFAULT_OPTIONS} />
        </div>
    )
}

export default DefaultChart
