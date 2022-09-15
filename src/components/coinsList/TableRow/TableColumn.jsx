import React from "react"
import { formatAmount } from "../../../helperFunctions/helpers"

function TableColumn({ data, text }) {
    return (
        <div className="flex flex-col justify-center items-center w-1/5">
            <dd className="text-xs md:text-lg font-semibold text-gray-900 dark:text-white">
                {data ? formatAmount(data.nominal) : text}
            </dd>
            {(data && data.pct.toPrecision(5)) >= 0 ? (
                <dd className="text-green-500 font-semibold text-xs md:text-md">
                    {Number.parseFloat(data.pct).toFixed(5) + " %"}
                </dd>
            ) : (
                <dd className="text-red-500 font-semibold text-xs md:text-md">
                    {data && Number.parseFloat(data.pct).toFixed(5) + " %"}
                </dd>
            )}
        </div>
    )
}

export default TableColumn
