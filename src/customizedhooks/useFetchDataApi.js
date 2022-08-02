import {useState, useEffect} from "react";
import axios from "axios";
import configData from "./../configData.json"

const axiosClient = axios.create({
    baseURL: configData.BASE_SERVER_URL
})

const useFetchDataApi = (url)=>{
    
    const [data, setData] = useState()
    const [status,setStatus] = useState("")
    const [loader, setLoader] = useState(true)

    useEffect(() => {

        (async function (){
            try{
                const response = await axiosClient.get(url)
                setStatus(response.status)
                setData(response.data);
            }catch(error){
                setStatus(error)
            }finally{
                setLoader(false)
            }
        })()

    },[])
    
    return [status,loader,data]
}

export default useFetchDataApi
