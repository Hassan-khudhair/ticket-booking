import React from 'react'
import { useFetch } from '../hook/useFetch'

const CountData = ({route}) => {
    const {data , loading , error} = useFetch(`http://localhost:8800/api/${route}`)


  return (
    <p>{data ? data.length : null}</p>
  )
}

export default CountData