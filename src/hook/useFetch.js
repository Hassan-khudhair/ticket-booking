import { useEffect, useState } from "react"
import axios from 'axios'

export function useFetch(url){

    const [data , setData] = useState()
    const [error , setError] = useState()
    const [loading , setLoading] = useState(false)
    const token = localStorage.getItem('token')


    useEffect(()=>{
        const getData = ()=>{
          setLoading(true)
          axios({
            method:'get',
            url: url,
            headers:{authorization:token}
          })
          .then(res => {
            
            setData(res.data)
          }
          )
          .catch(err=>setError(err))
          .finally(setLoading(false))
        }
        return getData();
    }, [] )

    return {data , loading , error}
    
    
}