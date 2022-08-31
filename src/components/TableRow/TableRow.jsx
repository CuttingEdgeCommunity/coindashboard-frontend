import React, { useCallback, useEffect, useState } from "react"
import CoinImage from "../CoinImage/CoinImage"
import {formatAmount} from "../../helpers/helpers"
function TableRow({
    type,
    rank,
    name,
    symbol,
    price,
    urlImage,
    alt,
    hour,
    day,
    week,
    setCoinName
}) {
    const [windowSize, setWindowSize] = useState(window.innerWidth)
    useEffect(()=>{
        if(rank === 1){
            setCoinName(name)
        }
    },[])
    const handleClick = useCallback(() => {
        setCoinName(name)
    }, [name, setCoinName])

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
                <div data-cy="list-item" className="flex text-sm w-1/5 flex-col ml-2 items-start justify-between">
                    {type !== "header" ? (
                        <a
                            href="#dashboard"
                            onClick={handleClick}
                            className="flex items-center"
                        >
                            <CoinImage
                                urlImage={urlImage}
                                alt={alt}
                                ratioChange={true}
                            />
                            <p className="dark:text-white ml-1 text-md md:text-lg overflow-hidden break-words">
                                {windowSize >= 655
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
                <div className="flex flex-col justify-center w-1/5 items-center">
                    <dd className="text-xs md:text-lg font-semibold text-gray-900 dark:text-white">
                        {hour
                            ?  formatAmount(hour.nominal_change)
                            : "1 Hour"}
                    </dd>
                    {(hour && hour.pct_change.toPrecision(2)) >= 0 ? (
                        <dd className="text-green-500 font-semibold text-md">
                            {hour && hour.pct_change.toPrecision(2) + " %"}
                        </dd>
                    ) : (
                        <dd className="text-red-500 font-semibold text-md">
                            {hour && hour.pct_change.toPrecision(2) + " %"}
                        </dd>
                    )}
                </div>
                <div className="flex flex-col justify-center items-center w-1/5">
                    <dd className="text-xs md:text-lg font-semibold text-gray-900 dark:text-white">
                        {day
                            ? formatAmount(day.nominal_change)
                            : "1 Day"}
                    </dd>
                    {(day && day.pct_change.toPrecision(2)) >= 0 ? (
                        <dd className="text-green-500 font-semibold text-md">
                            {day && day.pct_change.toPrecision(2) + " %"}
                        </dd>
                    ) : (
                        <dd className="text-red-500 font-semibold text-md">
                            {day && day.pct_change.toPrecision(2) + " %"}
                        </dd>
                    )}
                </div>
                <div className="flex flex-col justify-center items-center w-1/5">
                    <dd className="text-xs md:text-lg font-semibold text-gray-900 dark:text-white">
                        {week
                            ? formatAmount(week.nominal_change)
                            : "1 Week"}
                    </dd>
                    {(week && week.pct_change.toPrecision(2)) >= 0 ? (
                        <dd className="text-green-500 font-semibold text-md">
                            {week && week.pct_change.toPrecision(2) + " %"}
                        </dd>
                    ) : (
                        <dd className="text-red-500 font-semibold text-md">
                            {week && week.pct_change.toPrecision(2) + " %"}
                        </dd>
                    )}
                </div>
                <div className="text-green-400 text-sm md:text-md font-semibold w-1/5">
                    {price
                        ? formatAmount(price)
                        : "Price"}
                </div>
            </div>
        </div>
    )
}

export default TableRow
