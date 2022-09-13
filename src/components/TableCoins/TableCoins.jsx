import { useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import { useInfiniteQuery } from "react-query"
import TableRow from "../TableRow/TableRow"
import LoaderCoinItems from "../LoaderCoinItems/LoaderCoinItems"
import ErrorRequestMessage from "../ErrorRequestMessage/ErrorRequestMessage"
import Loader from "../Loader/Loader"
import altImage from "./../../img/star.png"

import { getListCoins } from "../../customizedhooks/fetchingData"

const take = () => {
    return (
        Math.ceil(
            document.getElementById("scrollable-div").offsetHeight / 654
        ) * 10
    )
}

function TableCoins({ setCoinSymbol }) {
    // Do our API call using ----- /api/coins
    const [input, setInput] = useState("")
    const {
        isLoading,
        data: items,
        error,
        hasNextPage,
        fetchNextPage
    } = useInfiniteQuery(

        "listCoins",
        ({ pageParam = 0 }) => getListCoins(pageParam, take()),
        {
            getNextPageParam: (undifined, allPages) => {
                const nextPage = allPages.length
                return allPages.length * take() >= 241
                    ? undefined
                    : nextPage
            },
            staleTime: 5_000,
            refetchInterval: 5_000
        }
    )

    const fetchNext = async () => {
        return await fetchNextPage()
    }
<<<<<<< HEAD
    useEffect(() => {
        const fetching = async () => {
            try {
                const data = await axiosClient.get(
                    process.env.REACT_APP_COINS_PATH + `?page=0&take=${take()}`
                )
                setItems(data.data)
                setStatusCoins(data.status)
            } catch (error) {
                setStatusCoins(error)
            } finally {
                setLoaderCoins(false)
            }
        }
        fetching()
    }, [])

    useEffect(()=>{
        // Call the api every 5 secondes using a timer and stock it in the localstorage
        const refreshData = async () => {
            try {
                const data = await axiosClient.get(
                    process.env.REACT_APP_COINS_PATH + `?take=${items.length}`
                )
                window.localStorage.setItem("data", JSON.stringify(data.data))
            } catch (error) {
                console.log(error)
            }
        }
        const timer = setInterval(refreshData, 10_000);
        return ()=>{
            clearInterval(timer)
        }
    })

    const fetchData = async () => {
        try {
            const data = await axiosClient.get(
                process.env.REACT_APP_COINS_PATH +
                    `?page=${page}&take=${take()}`
            )
            setItems([...items, ...data.data])
            if (data.data.length < take() || data.data.length === 0) {
                setHasMore(false)
            } else {
                setPage(page + 1)
            }
            setStatusCoins(data.status)
        } catch (error) {
            setHasMore(false)
        } finally {
            setLoaderCoins(false)
        }
    }

=======
>>>>>>> migration
    const handleChange = (e) => {
        setInput(e.target.value)
        // make an API call with input state as a params
    }

    return (
        <div id="list-coins" className="pt-2 h-screen">
            <div className="border dark:border-gray-600 h-5/6 w-full p-4 pb-6 bg-white dark:bg-gray-800 relative overflow-hidden">
                <div className="w-full flex data-center justify-between mb-2 border-b pb-1 dark:border-gray-600">
                    <p className="text-gray-800 dark:text-white text-xl">
                        Coins
                    </p>
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
                <div
                    id="scrollable-div"
                    className="overflow-y-scroll h-5/6 px-1"
                >
                    {!isLoading ? (
                        error ? (
                            <ErrorRequestMessage
                                message={error.message}
                                margin
                            />
                        ) : (
                            <InfiniteScroll
                                dataLength={items.pages.length * take()} //This is important field to render the next data
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
                                                .indexOf(
                                                    input.toUpperCase()
                                                ) === -1
                                        )
                                            return null
                                        return (
                                            <TableRow
                                                key={(index + 1) + (pageIndex)*10}
                                                rank={(index + 1) + (pageIndex)*10}
                                                name={coin.name}
                                                symbol={coin.symbol}
                                                price={coin.CurrentQuote.price}
                                                urlImage={
                                                    coin.image_url || altImage
                                                }
                                                hour={
                                                    coin.CurrentQuote.deltas[0]
                                                }
                                                day={
                                                    coin.CurrentQuote.deltas[1]
                                                }
                                                week={
                                                    coin.CurrentQuote.deltas[2]
                                                }
                                                setCoinSymbol={setCoinSymbol}
                                            />
                                        )
                                    })
                                )}
                            </InfiniteScroll>
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
