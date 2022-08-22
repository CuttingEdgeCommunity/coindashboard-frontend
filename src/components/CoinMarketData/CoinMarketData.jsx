import React from "react"
import CoinImage from "../CoinImage/CoinImage"
import CoinMarketDetails from "../CoinMarketDetails/CoinMarketDetails"
import CoinMarketHeader from "../CoinMarketHeader/CoinMarketHeader"

function CoinMarketData({ data, urlImage }) {
    console.log(data)
    return (
        <div className="bg-white dark:bg-gray-800 p-4 pt-1">
            <div className="flex-row flex gap-2">
                <CoinImage urlImage={urlImage} alt="Alternative" />
                <div className=" flex flex-col w-full">
                    <CoinMarketHeader
                        name={data.name}
                        symbol={data.symbol}
                        price={data.CurrentQuote.price}
                        lastUpdate={new Date(
                            data.CurrentQuote.last_update_timestamp
                        ).toLocaleString()}
                    />
                    <CoinMarketDetails data={data.CurrentQuote} />
                </div>
            </div>
        </div>
    )
}

export default CoinMarketData
