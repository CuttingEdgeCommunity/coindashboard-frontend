import ListCoinInfoRow from "../ListCoinInfoRow/ListCoinInfoRow"

function ListCoinInfo({ data }) {
    return (
        <div id="listCoins" className="pt-2">
            <div className="border dark:border-gray-600 h-80 mt-2 mb-4  w-full p-4 bg-white dark:bg-gray-800 relative overflow-hidden">
                <div className="w-full flex items-center justify-between mb-2 border-b pb-1 dark:border-gray-600">
                    <p className="text-gray-800 dark:text-white text-xl">
                        Details
                    </p>
                </div>
                <div className="overflow-y-scroll h-72 pb-4 px-1">
                    <ListCoinInfoRow name="Market Cap Rank" display={1} />
                    <ListCoinInfoRow
                        name="Market Cap Dominance"
                        display="38.339%"
                    />
                    <ListCoinInfoRow
                        name="Volume / Market Cap"
                        display="0.0583"
                    />
                    <ListCoinInfoRow name="24h High" display="$24,285.47" />
                    <ListCoinInfoRow name="24h Low" display="$23,848.34" />
                    <ListCoinInfoRow name="7d High" display="$24,995.08" />
                    <ListCoinInfoRow name="7d Low" display="$22,826.07" />
                </div>
            </div>
        </div>
    )
}

export default ListCoinInfo
