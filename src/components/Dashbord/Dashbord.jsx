import React from "react"
import CoinInfo from "../CoinInfo/CoinInfo"
import ChartCoin from "../Chart/ChartCoin"
import CoinMarketData from "../CoinMarketData/CoinMarketData"
import ListCoinInfo from "../ListCoinInfo/ListCoinInfo"
import Loader from "../Loader/Loader"
import ErrorRequestMessage from "../ErrorRequestMessage/ErrorRequestMessage"
import { fetchData } from "../../customizedhooks/fetchingData"
import { useQuery } from "react-query"

function Dashbord({ coinSymbol }) {
    // do the API call using ---- /api/coins/coinName and set the refresh param to TRUE
    const coinPath = "/" + coinSymbol
    const {
        isLoading: loaderCoinInfo,
        data: coinInfo,
        error: statusCoinInfo
    } = useQuery(
        ["coinsInfo", coinSymbol],
        () =>
        fetchData(
            coinPath
            )
    )
    // const {isLoading:loaderCoinInfo, data:coinInfo, error:statusCoinInfo} = useQuery("listCoins", ()=> fetchData(process.env.REACT_APP_COINS_PATH + "/" + coinSymbol),{
    //     staleTime: 5_000,
    //     refetchInterval: 5_000
    // })
    // do the API call for the Chart component using ---- /api/coins/coinName/chart and set the refresh param to TRUE
    const chartPath = "/" + coinSymbol + "/chart"
    const {
        isLoading: loaderCoinChart,
        data: coinChart,
        error: statusCoinChart
    } = useQuery(
        ["coinsMarketChart", coinSymbol],
        () =>
        fetchData(
            chartPath
            ),
        {
            staleTime: 30_000,
        }
    )
    // do the API call for the coin market using ---- /api/coins/coinName/marketdata and set the refresh param to TRUE
    // const [statusCoinMarket, loaderCoinMarket, coinMarket] = useFetchDataApi(
    //     process.env.REACT_APP_COINS_PATH + "/" + coinSymbol + "/marketdata",
    //     true
    // )
    const marketdataPath = "/" + coinSymbol + "/marketdata"
    const {
        isLoading: loaderCoinMarket,
        data: coinMarket,
        error: statusCoinMarket
    } = useQuery(
        ["coinsMarketData", coinSymbol],
        () =>
        fetchData(
            marketdataPath
            ),
        {
            staleTime: 5_000,
            refetchInterval: 5_000
        }
    )
    return (
        <main
            id="dashboard"
            className="pt-4 px-2 grid md:grid-cols-3 gap-2 grid-cols-1 h-full dark:bg-gray-800 dark:text-white"
        > 
            <div className="md:col-span-2 col-span-1">
                {!loaderCoinMarket && !loaderCoinInfo ? (
                    statusCoinMarket ? (
                        <ErrorRequestMessage
                            message={statusCoinMarket.message}
                        />
                    ) : (
                        <CoinMarketData
                            data={coinMarket.data[0]}
                            urlImage={coinInfo.data[0].image_url || null}
                        />
                    )
                ) : (
                    <Loader height={80} width={80} />
                )}

                {!loaderCoinChart ? (
                    statusCoinChart ? (
                        <ErrorRequestMessage
                            message={statusCoinChart.message}
                            margin
                        />
                    ) : (
                        <ChartCoin data={coinChart.data} />
                    )
                ) : (
                    <Loader chart={true} />
                )}
            </div>
            <div>
                {!loaderCoinInfo ? (
                    statusCoinInfo ? (
                        <ErrorRequestMessage message={statusCoinInfo.message} />
                    ) : (
                        <CoinInfo data={coinInfo.data[0]} />
                    )
                ) : (
                    <Loader height={80} width={80} />
                )}
                {!loaderCoinMarket ? (
                    statusCoinMarket ? (
                        <ErrorRequestMessage
                            message={statusCoinMarket.message}
                            margin
                        />
                    ) : (
                        <ListCoinInfo data={coinMarket.data[0]} />
                    )
                ) : (
                    <Loader height={80} width={80} chart />
                )}
            </div>
        </main>
    )
}

export default Dashbord
