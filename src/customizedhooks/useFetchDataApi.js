import { useState, useEffect } from "react"
import axios from "axios"

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_BASE_SERVER_URL
})

const useFetchDataApi = (path,refresh= false) => {
    const [data, setData] = useState(null)
    const [status, setStatus] = useState(102)
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        async function fetching() {
            try {
                const response = await axiosClient.get(path)
                setStatus(200)
                setData(response.data)
            } catch (error) {
                setStatus(error)
            } finally {
                setLoader(false)
            }
        }
        fetching()
        if(refresh){
            const timer = setInterval(() => {
                fetching()
            }, 5000)
            return ()=>{
                clearInterval(timer)
            }
        }
    }, [path, refresh])

    return [status, loader, data]
}

export default useFetchDataApi
