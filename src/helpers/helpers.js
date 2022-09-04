// Format the amount
export function formatAmount(amount) {
    return (
        (amount < 0 ? "-" : "") +
        "$" +
        new Intl.NumberFormat().format(Math.abs(amount))
    )
}

const formatTimestamp = (timestamp) => new Date(timestamp).toLocaleDateString()
//extract the x and y axis
export function getChartData(data, i) {
    return data.map((element) =>
        i === "x" ? formatTimestamp(element.timestamp) : element.price
    )
}
