import axios from "axios"

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_BASE_SERVER_URL
})

export const getListCoins = async () => {
    try {
        const data = await axiosClient.get(
            process.env.REACT_APP_COINS_PATH + `?page=0&take=50`
        )
        return data.data
    } catch (error) {
        return error
    } 
}