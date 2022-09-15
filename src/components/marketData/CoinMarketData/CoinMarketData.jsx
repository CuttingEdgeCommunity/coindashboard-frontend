import React from "react"
import CoinImage from "../../coinStaticInfo/CoinImage/CoinImage"
import CoinMarketDetails from "../CoinMarketDetails/CoinMarketDetails"
import CoinMarketHeader from "../CoinMarketHeader/CoinMarketHeader"

import altImage from "./../../../img/star.png"

function CoinMarketData({ data }) {
    const extractedData = data.data[0]
    const urlImage = extractedData.url_image
    return (
        <div
            data-cy="coin-market-data"
            className="bg-white dark:bg-gray-800 p-4 pt-1"
        >
            <div className="flex-row flex gap-2">
                <CoinImage urlImage={urlImage || altImage} alt="Alt" />
                <div className=" flex flex-col w-full">
                    <CoinMarketHeader
                        name={extractedData.name}
                        symbol={extractedData.symbol}
                        price={extractedData.CurrentQuote.price}
                        lastUpdate={new Date(
                            extractedData.CurrentQuote.last_update_timestamp
                        ).toLocaleString()}
                    />
                    <CoinMarketDetails data={extractedData.CurrentQuote} />
                </div>
            </div>
        </div>
    )
}

export default CoinMarketData
