import TableRow from "../TableRow/TableRow"
import InfiniteScroll from "react-infinite-scroll-component"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import LoaderCoinItems from "../LoaderCoinItems/LoaderCoinItems"
import Loader from "../Loader/Loader"
import ErrorRequestMessage from "../ErrorRequestMessage/ErrorRequestMessage"

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_BASE_SERVER_URL
})

function TableCoins({ setCoinSymbol }) {
    // Do our API call using ----- /api/coins
    const [items, setItems] = useState([])
    const [page, setPage] = useState(2)
    const [hasMore, setHasMore] = useState(true)
    const [loaderCoins, setLoaderCoins] = useState(true)
    const [statusCoins, setStatusCoins] = useState(102)
    const [input, setInput] = useState("")

    const take = () => {
        return (
            Math.ceil(
                document.getElementById("scrollable-div").offsetHeight / 654
            ) * 10
        )
    }

    useEffect(() => {
        const fetching = async () => {
            try {
                const data = await axiosClient.get(
                    process.env.REACT_APP_COINS_PATH + `?page=1&take=${take()}`
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

    const fetchData = async () => {
        try {
            const data = await axiosClient.get(
                process.env.REACT_APP_COINS_PATH +
                    `?page=${page}&take=${take()}`
            )
            setItems([...items, ...data.data])
            if (data.data.length < 10 || data.data.length === 0) {
                setHasMore(false)
            } else {
                setPage(page + 1)
            }
            setStatusCoins(data.status)
        } catch (error) {
            setStatusCoins(error)
        } finally {
            setLoaderCoins(false)
        }
    }

    const handleChange = (e) => {
        setInput(e.target.value)
        // make an API call with input state as a params
    }

    return (
        <div id="list-coins" className="pt-2 h-screen">
            <div className="border dark:border-gray-600 h-5/6 w-full p-4 pb-6 bg-white dark:bg-gray-800 relative overflow-hidden">
                <div className="w-full flex items-center justify-between mb-2 border-b pb-1 dark:border-gray-600">
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
                    {!loaderCoins ? (
                        statusCoins !== 200 ? (
                            <ErrorRequestMessage
                                message={statusCoins.message}
                                margin={true}
                            />
                        ) : (
                            <InfiniteScroll
                                dataLength={items.length} //This is important field to render the next data
                                next={fetchData}
                                hasMore={hasMore}
                                scrollableTarget={"scrollable-div"}
                                loader={<LoaderCoinItems />}
                                className="infinite-scroll"
                            >
                                {items.map((coin, index) => {
                                    if (
                                        coin.name
                                            .toUpperCase()
                                            .indexOf(input.toUpperCase()) === -1
                                    )
                                        return null
                                    return (
                                        <TableRow
                                            key={index}
                                            rank={index + 1}
                                            name={coin.name}
                                            symbol={coin.symbol}
                                            price={coin.CurrentQuote.price}
                                            urlImage={coin.image_url}
                                            alt={coin.symbol}
                                            hour={coin.CurrentQuote.deltas[0]}
                                            day={coin.CurrentQuote.deltas[1]}
                                            week={coin.CurrentQuote.deltas[2]}
                                            setCoinSymbol={setCoinSymbol}
                                        />
                                    )
                                })}
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
