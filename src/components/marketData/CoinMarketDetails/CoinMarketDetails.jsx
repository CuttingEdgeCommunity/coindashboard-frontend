import React from "react"
import { formatAmount } from "../../../helperFunctions/helpers"
import CoinDetails from "../../coinStaticInfo/CoinDetails/CoinDetails"

function CoinMarketDetails({ data }) {
    return (
        <div
            data-cy="coin-market-details"
            className="text-gray-400 text-xs border dark:border-gray-600 p-2 flex flex-col justify-center items-center"
        >
            <div className="flex flex-row justify-between w-full">
                <CoinDetails field="Price">{formatAmount(data.price)}</CoinDetails>
                <CoinDetails field="Market Cap">
                    ${new Intl.NumberFormat().format(data.market_cap)}
                </CoinDetails>
                <CoinDetails field="24H Volume">
                    ${new Intl.NumberFormat().format(data.daily_volume)}
                </CoinDetails>
            </div>
        </div>
    )
}

export default CoinMarketDetails
