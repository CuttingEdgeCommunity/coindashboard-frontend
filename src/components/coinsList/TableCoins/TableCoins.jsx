import { useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import { useInfiniteQuery, useQuery } from "react-query"
import TableRow from "../TableRow/TableRow"
import LoaderCoinItems from "../../loaders/LoaderCoinItems/LoaderCoinItems"
import ErrorRequestMessage from "../../ErrorRequestMessage/ErrorRequestMessage"
import Loader from "../../loaders/Loader/Loader"
import altImage from "./../../../img/star.png"

import { fetchData, getListCoins } from "../../../helperFunctions/fetchingData"
import { numberCoinsGettingAtOnce } from "../../../helperFunctions/helpers"
import { useEffect } from "react"

function TableCoins({ setCoinSymbol }) {
    // Do our API call using ----- /api/coins
    const [items, setItems] = useState({})
    const [loader, setLoader] = useState(true)
    const [reqError, setReqError] = useState()
    const [input, setInput] = useState("")

    const { isLoading, data, error, hasNextPage, fetchNextPage } = useInfiniteQuery(
        "listCoins",
        ({ pageParam = 0 }) => getListCoins(pageParam, numberCoinsGettingAtOnce()),
        {
            getNextPageParam: (undifined, allPages) => {
                const nextPage = allPages.length
                return allPages.length * numberCoinsGettingAtOnce() >= 241
                    ? undefined
                    : nextPage
            },
            staleTime: 30_000,
            refetchInterval: 30_000
        }
    )
    const marketdataPath = "/search/" + input.trim()
    const {
        isLoading: searchLoading,
        data: searchResult,
        error: searchError
    } = useQuery(["search", marketdataPath], () => fetchData(marketdataPath))

    useEffect(() => {
        if (input.trim().length === 0) {
            setReqError(error)
            setLoader(isLoading)
            setItems(data)
        } else {
            setReqError(searchError)
            setLoader(searchLoading)
            setItems(searchResult)
        }
    }, [input, searchResult, data])

    const fetchNext = async () => {
        return await fetchNextPage()
    }
    const handleChange = (e) => {
        setInput(e.target.value)
    }

    return (
        <div id="list-coins" className="pt-2 h-screen">
            <div className="border dark:border-gray-600 h-5/6 w-full p-4 pb-6 bg-white dark:bg-gray-800 relative overflow-hidden">
                <div className="w-full flex data-center justify-between mb-2 border-b pb-1 dark:border-gray-600">
                    <p className="text-gray-800 dark:text-white text-xl">Coins</p>
                    <div className=" relative ">
                        <input
                            type="text"
                            id="simple-email"
                            onChange={handleChange}
                            className=" flex-1 appearance-none border-b border-gray-700s dark:border-gray-300 w-full px-4 bg-white dark:bg-gray-800 dark:text-white text-gray-700 placeholder-gray-400 text-base focus:outline-none "
                            placeholder="Search"
                        />
                    </div>
                </div>

                <TableRow type="header" />
                <div id="scrollable-div" className="overflow-y-scroll h-5/6 px-1">
                    {!loader ? (
                        reqError ? (
                            <ErrorRequestMessage
                                message={reqError?.message || "Unknown error"}
                                margin
                            />
                        ) : items.pages ? (
                            <InfiniteScroll
                                dataLength={
                                    items.pages.length * numberCoinsGettingAtOnce()
                                } //This is important field to render the next data
                                next={fetchNext}
                                hasMore={hasNextPage}
                                scrollableTarget={"scrollable-div"}
                                loader={<LoaderCoinItems />}
                                className="infinite-scroll"
                            >
                                {items?.pages?.map((page, pageIndex) =>
                                    page.data?.map((coin, index) => {
                                        if (
                                            coin.name
                                                .toUpperCase()
                                                .indexOf(input.toUpperCase()) === -1
                                        )
                                            return null

                                        return (
                                            <TableRow
                                                key={index + 1 + pageIndex * 10}
                                                rank={index + 1 + pageIndex * 10}
                                                name={coin.name}
                                                symbol={coin.symbol}
                                                price={coin.CurrentQuote.price}
                                                urlImage={coin.image_url || altImage}
                                                hour={coin.CurrentQuote.deltas[0]}
                                                day={coin.CurrentQuote.deltas[1]}
                                                week={coin.CurrentQuote.deltas[2]}
                                                setCoinSymbol={setCoinSymbol}
                                                marketCap={
                                                    coin.CurrentQuote.market_cap
                                                }
                                            />
                                        )
                                    })
                                )}
                            </InfiniteScroll>
                        ) : (
                            <div>
                                {items?.data?.length === 0 ? (
                                    <ErrorRequestMessage
                                        info
                                        message={'No result for "' + input + '"'}
                                        margin
                                    />
                                ) : (
                                    items.data.map((coin, index) => (
                                        <TableRow
                                            key={index}
                                            rank={index + 1}
                                            name={coin.name}
                                            symbol={coin.symbol}
                                            price={coin.CurrentQuote.price}
                                            urlImage={coin.image_url || altImage}
                                            hour={coin.CurrentQuote.deltas[0]}
                                            day={coin.CurrentQuote.deltas[1]}
                                            week={coin.CurrentQuote.deltas[2]}
                                            setCoinSymbol={setCoinSymbol}
                                        />
                                    ))
                                )}
                            </div>
                        )
                    ) : (
                        <div className="w-full h-5/6 flex justify-center items-center">
                            <Loader />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default TableCoins
