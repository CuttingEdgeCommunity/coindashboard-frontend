import React, { useCallback, useEffect, useState } from "react"
import CoinImage from "../../coinStaticInfo/CoinImage/CoinImage"
import { formatAmount } from "../../../helperFunctions/helpers"
import TableColumn from "./TableColumn"

const MIN_WINDOW_WIDTH = 655

function TableRow({
    type,
    rank,
    name,
    symbol,
    price,
    urlImage,
    hour,
    day,
    week,
    setCoinSymbol
}) {
    const [windowSize, setWindowSize] = useState(window.innerWidth)
    useEffect(() => {
        if (rank === 1) {
            setCoinSymbol(symbol)
        }
    }, [rank, symbol, setCoinSymbol])
    const handleClick = useCallback(() => {
        setCoinSymbol(symbol)
    }, [symbol, setCoinSymbol])

    useEffect(() => {
        const handleWindowSize = () => {
            setWindowSize(window.innerWidth)
        }
        window.addEventListener("resize", handleWindowSize)
    })

    return (
        <div className="flex items-center mb-2 pb-2 dark:border-gray-600 justify-between border-b">
            <div className="flex items-center w-full justify-around">
                <div className="flex flex-col justify-center w-10 items-center">
                    <dd className="text-xs md:text-lg text-gray-900 dark:text-white">
                        {rank ? rank : "#"}
                    </dd>
                </div>
                <div
                    data-cy="list-item"
                    className="flex text-sm w-1/5 flex-col ml-2 items-start justify-between"
                >
                    {type !== "header" ? (
                        <a
                            href="#dashboard"
                            onClick={handleClick}
                            className="flex items-center"
                        >
                            <CoinImage
                                urlImage={urlImage}
                                alt="alt"
                                ratioChange={true}
                            />
                            <p className="dark:text-white ml-1 text-md md:text-lg overflow-hidden break-words">
                                {windowSize >= MIN_WINDOW_WIDTH
                                    ? name
                                        ? name
                                        : "Name"
                                    : symbol
                                    ? symbol.toUpperCase()
                                    : "Name"}
                            </p>
                        </a>
                    ) : (
                        <span className="flex items-center">
                            <p className="dark:text-white ml-1 text-sm md:text-lg">
                                {name ? name : "Name"}
                            </p>
                        </span>
                    )}
                </div>

                <div className="text-green-400 text-sm md:text-xl font-semibold w-1/5">
                    {price ? formatAmount(price) : "Price"}
                </div>
                <TableColumn data={hour} text="1 Hour" />
                <TableColumn data={day} text="1 Day" />
                <TableColumn data={week} text="1 Week" />
            </div>
        </div>
    )
}

export default TableRow
