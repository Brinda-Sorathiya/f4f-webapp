import { createContext, useState, useEffect} from "react";
// import { food_list } from "../assets/assets";
import axios from 'axios'

export const storeCtx = createContext(null)


const Context = (props) => {

  const url = "http://localhost:5000"

  const [crtItm, setcrtItm] = useState({})
  const [token, setToken] = useState(localStorage.getItem("token"))
  const [food_list, setFdlist] = useState([])
  
  const ppCrt = async (id) => {
    if(!crtItm[id]){
      setcrtItm((prev)=>({...prev, [id]:1}))
    }else{
      setcrtItm((prev)=>({...prev, [id]:prev[id]+1}))
    }
    if(token){
      console.log(id)
      await axios.post(`${url}/api/cart/add`,{itemId: id}, {headers:{token}})
    }
  }

  const rmCrt = async (id) => {
    setcrtItm((prev)=>({...prev, [id]:prev[id]-1}))
    if(token){
      await axios.post(`${url}/api/cart/remove`,{id}, {headers:{token}})
    }
  }

  const totalAmt = () =>{
    let total = 0;
    for(let i in crtItm){
      total += crtItm[i]*food_list[i].price
    }
    return total
  }

  const foodLF = async () => {
    const res = await axios.get(url+"/api/food/list")
    setFdlist(res.data.data)
  }

  const loadData = async () => {
    const res = await axios.post(url+"/api/cart/get",{}, {headers:{token}})
    setcrtItm(res.data.cartData)
  }

  useEffect(() => {
    
    async function load() {
      await foodLF()
      if(localStorage.getItem("token")){
        setToken(localStorage.getItem("token"))
        loadData()
      }
    }
    load()
  }, [])
  

    const ctxVal = {
      food_list,
        crtItm,
        ppCrt,
        rmCrt,
        setcrtItm,
        totalAmt,
        url,
        token,
        setToken
    }

  return (
    <storeCtx.Provider value = {ctxVal}>
         {props.children}
    </storeCtx.Provider>
  )
}

export default Context
