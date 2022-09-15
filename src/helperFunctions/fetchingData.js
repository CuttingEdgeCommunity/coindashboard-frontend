import axios from "axios"

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_BASE_SERVER_URL
})

// The list of coins from the Backend ( TableCoins.jsx )
export const getListCoins = async (page = 0, take) => {
    const data = await axiosClient.get(
        process.env.REACT_APP_COINS_PATH + `?page=${page}&take=${take}`
    )
    return data
}

export const fetchData = async (path) => {
    const data = await axiosClient.get(process.env.REACT_APP_COINS_PATH + path)
    return data
}
