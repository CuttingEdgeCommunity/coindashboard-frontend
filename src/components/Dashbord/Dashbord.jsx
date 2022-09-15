import React from "react"
import CoinInfo from "../coinStaticInfo/CoinInfo/CoinInfo"
import ChartCoin from "../Chart/ChartCoin"
import CoinMarketData from "../marketData/CoinMarketData/CoinMarketData"
import ListCoinInfo from "../marketData/ListCoinInfo/ListCoinInfo"
import { fetchData } from "../../helperFunctions/fetchingData"
import { useQuery } from "react-query"
import RenderComponent from "./RenderComponent"

function Dashbord({ coinSymbol }) {
    // do the API call using ---- /api/coins/coinName and set the refresh param to TRUE
    const coinPath = "/" + coinSymbol
    const {
        isLoading: loaderCoinInfo,
        data: coinInfo,
        error: coinInfoError
    } = useQuery(["coinsInfo", coinSymbol], () => fetchData(coinPath))
    // do the API call for the Chart component using ---- /api/coins/coinSymbol/chart
    const chartPath = "/" + coinSymbol + "/chart"
    const {
        isLoading: loaderCoinChart,
        data: coinChart,
        error: coinChartError
    } = useQuery(["coinsMarketChart", coinSymbol], () => fetchData(chartPath), {
        staleTime: 30_000
    })
    // do the API call for the Market data component using ---- /api/coins/coinSymbol/marketdata
    const marketdataPath = "/" + coinSymbol + "/marketdata"
    const {
        isLoading: loaderCoinMarket,
        data: coinMarket,
        error: coinMarketError
    } = useQuery(["coinsMarketData", coinSymbol], () => fetchData(marketdataPath), {
        staleTime: 30_000,
        refetchInterval: 30_000
    })
    return (
        <main
            id="dashboard"
            className="pt-4 px-2 grid md:grid-cols-3 gap-2 grid-cols-1 h-full dark:bg-gray-800 dark:text-white"
        >
            <div className="md:col-span-2 col-span-1">
                <RenderComponent
                    loader={loaderCoinMarket || loaderCoinInfo}
                    error={coinMarketError}
                >
                    <CoinMarketData data={coinMarket} />
                </RenderComponent>

                <RenderComponent
                    loader={loaderCoinChart}
                    error={coinChartError}
                    margin
                    chart
                >
                    <ChartCoin data={coinChart} />
                </RenderComponent>
            </div>
            <div>
                <RenderComponent loader={loaderCoinInfo} error={coinInfoError}>
                    <CoinInfo data={coinInfo} />
                </RenderComponent>

                <RenderComponent
                    loader={loaderCoinMarket}
                    error={coinMarketError}
                    margin
                    chart
                >
                    <ListCoinInfo data={coinMarket} />
                </RenderComponent>
            </div>
        </main>
    )
}

export default Dashbord
