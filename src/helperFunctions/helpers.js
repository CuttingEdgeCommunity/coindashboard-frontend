// Format the amount
export function formatAmount(amount) {
    return (
        (Number.parseFloat(amount).toFixed(5) < 0 ? "-" : "") +
        "$" +
        new Intl.NumberFormat("en-US", {
            compactDisplay: "long",
            maximumFractionDigits: 20
        }).format(Math.abs(Number.parseFloat(amount).toFixed(5)))
    )
}

const formatTimestamp = (timestamp) => new Date(timestamp).toLocaleDateString()
//extract the x and y axis
export function getChartData(data, i) {
    return data.map((element) =>
        i === "x" ? formatTimestamp(element.timestamp) : element.price
    )
}

// Getting more coins while the size of the screen is getting heigher (height) which allows to trigger scroll bar
const MIN_CONTAINER_SIZE_FOR_10COINS = 654
export const numberCoinsGettingAtOnce = () => {
    return (
        Math.ceil(
            document.getElementById("scrollable-div").offsetHeight / MIN_CONTAINER_SIZE_FOR_10COINS
        ) * 10
    )
}
