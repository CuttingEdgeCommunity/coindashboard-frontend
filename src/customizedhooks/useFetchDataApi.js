import { useState, useEffect } from "react"
import axios from "axios"

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_BASE_SERVER_URL
})
console.log(process.env)
const useFetchDataApi = (path, params = null) => {
    const [data, setData] = useState(null)
    const [status, setStatus] = useState(102)
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        ;(async function () {
            try {
                const response = await axiosClient.get(path, { params: params })
                setStatus(200)
                setData(response.data)
            } catch (error) {
                setStatus(error)
            } finally {
                setLoader(false)
            }
        })()
    }, [path, params])

    return [status, loader, data]
}

export default useFetchDataApi
