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

// // extract the coin using its the Name
// export function extractCoinByName(listCoins, name){
//     console.log(name)
//     let coin = {}
//     listCoins.forEach((currentCoin)=>{
//          if(currentCoin.name == name) coin = currentCoin
//     })
//     return coin
// }