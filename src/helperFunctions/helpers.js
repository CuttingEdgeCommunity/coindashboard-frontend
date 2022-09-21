import { MIN_CONTAINER_SIZE_FOR_10COINS } from "./constants"

// Format the amount
export function formatAmount(amount) {
    return (
        (Number.parseFloat(amount).toFixed(20) < 0 ? "-" : "") +
        "$" +
        formatNumber(amount)
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
export const numberCoinsGettingAtOnce = () => {
    return (
        Math.ceil(
            document.getElementById("scrollable-div").offsetHeight /
                MIN_CONTAINER_SIZE_FOR_10COINS
        ) * 10
    )
}

// Format any Float number and display 3 important decimal without considering 0s
function formatNumber(x) {
    const array = Math.abs(x).toFixed(10).toString().split(".")
    if (array.length > 1) {
        const arrayZeros = Array.from(array[1])
        const consecutiveZeros = []
        let next2Index = 0
        let next3Index = 0
        for (let index = 0; index < arrayZeros.length; index++) {
            if (arrayZeros[index] !== "0") break
            consecutiveZeros.push("0")
            next3Index = index
            next2Index = index
            if (arrayZeros[index + 2]) next2Index = index + 2
            if (arrayZeros[index + 3]) next3Index = index + 3
        }
        consecutiveZeros.push(
            arrayZeros[next2Index - 1],
            arrayZeros[next2Index],
            arrayZeros[next3Index]
        )
        array[1] = consecutiveZeros.join("")
        if (Number.parseInt(array[1]) === 0) array[1] = "00"
    }
    array[0] = Intl.NumberFormat().format(Number.parseInt(array[0]))
    return array.join(".")
}

// Sorting By
export function sortBy(array, paramName) {
    switch (paramName) {
        case "prices":
            return array.sort((a, b) => a.CurrentQuote.price - b.CurrentQuote.price)
        default:
            return array.sort((a, b) => a.marketCapRank - b.marketCapRank)
    }
}
