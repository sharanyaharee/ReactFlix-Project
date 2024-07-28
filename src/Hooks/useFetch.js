import {useState,useEffect} from 'react'
import axios from'axios'



export const useFetch =(url,customParams={})=>{
    const [data,setData] =useState({})
    const [loading,setLoading] =useState(true)
    const [error,setError] = useState(null)


    const options = {
        method : "get",
        baseURL: "https://api.themoviedb.org/3/",
        url: url,
        params: {
            api_key : "e3ef60114f3455d412ea55db83f798b2",
            //api_key:import.meta.env.VITE_API_KEY,
            ...customParams
        }
    }
    const{page,query}= customParams

    useEffect(()=>{
        const fetchData =async()=>{
            try{
                let {data}=await axios(options)
                setData(data)
                setTimeout(()=>{
                setLoading(false)
            },100)
            }catch(error){
                setError(error.message)
                
                    setLoading(false)
             
                
            }
        };
        fetchData()

    },[page,query,url]);



    
 return [data,loading,error]
 
}