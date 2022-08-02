import axios from "axios";
import {useState, useEffect} from "react";

const axiosClient = axios.create({
    baseURL: "https://api.coingecko.com/api/v3"
})

const useAxios = (url)=>{
    
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

export default useAxios
