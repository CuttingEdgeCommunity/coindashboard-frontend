import React from "react"
import TableCoins from "../coinsList/TableCoins/TableCoins"

function Home({ setCoinSymbol }) {
    return (
        <div>
            <div className="bg-white dark:bg-gray-800">
                <div className="text-center w-full mx-auto py-4 px-4">
                    <TableCoins setCoinSymbol={setCoinSymbol} />
                </div>
            </div>
        </div>
    )
}

export default Home
