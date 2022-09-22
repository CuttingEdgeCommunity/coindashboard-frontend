import React from "react"

import CoinImage from "../CoinImage/CoinImage"

import AltImage from "./../../../img/star.png"

function CoinInfo({ data }) {
    const extractedData = data.data[0]
    const addressstyle = { display: extractedData.is_token ? "flex" : "none" }
    return (
        <div
            data-cy="coin-info"
            className="flex flex-col justify-center items-center border dark:border-gray-600 bg-white dark:bg-gray-800 p-4"
        >
            <div className="flex-row gap-4 flex justify-center items-center">
                <CoinImage
                    urlImage={extractedData.image_url || AltImage}
                    alt="alt"
                />
                <div className=" flex flex-col">
                    <span className="text-gray-600 dark:text-white text-lg font-medium">
                        {extractedData.name} ({extractedData.symbol.toUpperCase()})
                    </span>
                    <div className="text-gray-400 text-xs mb-2">
                        <p>Genisis block : {extractedData.genesis_date} </p>
                        <p style={addressstyle}>
                            Contract address : {extractedData.contract_address}
                        </p>
                    </div>
                    <div className="text-gray-400 text-xs">
                        {extractedData.description?.length > 100
                            ? `${extractedData.description.substring(0, 250)}...`
                            : extractedData.description}

                        <br />
                        {extractedData.links && (
                            <div className="flex-row mt-2 gap-4 text-xs">
                                <a
                                    href={extractedData.links[0].url}
                                    target="_blink"
                                    className="mr-2"
                                >
                                    {extractedData.links[0].title}
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoinInfo
