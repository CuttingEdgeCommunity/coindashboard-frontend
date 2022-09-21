import ListCoinInfoRow from "../ListCoinInfoRow/ListCoinInfoRow"
import { formatAmount } from "../../../helperFunctions/helpers"

function ListCoinInfo({ data }) {
    const extractedData = data.data[0]
    return (
        <div id="list-coin-info" className="pt-2">
            <div className="border dark:border-gray-600 h-80 mt-2 mb-4  w-full p-4 bg-white dark:bg-gray-800 relative overflow-hidden">
                <div className="w-full flex items-center justify-between mb-2 border-b pb-1 dark:border-gray-600">
                    <p className="text-gray-800 dark:text-white text-xl">Details</p>
                </div>
                <div className="h-72 pb-4 px-1">
                    <ListCoinInfoRow
                        name={"Market Cap Rank"}
                        display={"#" + extractedData.marketCapRank}
                    />
                    <ListCoinInfoRow
                        name="Volume / Market Cap"
                        display={(
                            extractedData.CurrentQuote.daily_volume /
                            extractedData.CurrentQuote.market_cap
                        ).toPrecision(3)}
                    />
                    <ListCoinInfoRow
                        name={"Nominal change (Hour)"}
                        display={formatAmount(
                            extractedData.CurrentQuote.deltas[0].nominal
                        )}
                    />
                    <ListCoinInfoRow
                        name={"Nominal change (Day)"}
                        display={formatAmount(
                            extractedData.CurrentQuote.deltas[1].nominal
                        )}
                    />
                    <ListCoinInfoRow
                        name={"Nominal change (Week)"}
                        display={formatAmount(
                            extractedData.CurrentQuote.deltas[2].nominal
                        )}
                    />
                    {/* <ListCoinInfoRow
                        name="Market Cap Dominance"
                        display={
                            extractedData.CurrentQuote.market_cap_dominance + "%"
                        }
                    />

                    <ListCoinInfoRow
                        name={"24h High"}
                        display={formatAmount(extractedData.CurrentQuote.h24_high)}
                    />
                    <ListCoinInfoRow
                        name={"24h Low"}
                        display={formatAmount(extractedData.CurrentQuote.h24_low)}
                    />
                    <ListCoinInfoRow
                        name={"7d High"}
                        display={formatAmount(extractedData.CurrentQuote.d7_high)}
                    />
                    <ListCoinInfoRow
                        name={"7d Low"}
                        display={formatAmount(extractedData.CurrentQuote.d7_low)}
                    /> */}
                </div>
            </div>
        </div>
    )
}
export default ListCoinInfo
