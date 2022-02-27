import axios from "axios"
import { useEffect, useState } from "react"

const useGetProducts = (API) => {

  const [products, setProducts] = useState([])
  useEffect(async()=>{
    const response  = await axios(API)  
    console.log(response.data)
    setProducts(response.data)
  },[])

  return products

}

export default useGetProducts