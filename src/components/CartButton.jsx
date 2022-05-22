
import React,{ useState} from "react"

export const CartButton = () => {
  const[count,setCount]=useState(0)
  const[cart,setCart]=useState(true)

    const handleadd=()=>{
  setCart(false)
  setCount(1)

    }

    const inc=()=>{
      setCount(count+1)
    }
    
    const dec=()=>{
      if(count>1){
      setCart(false)
      }
      else{
        setCart(true)
      }
      setCount(count-1)
    }
  return <>
  {cart ?
  <button onClick={handleadd}>ADD TO CART</button>
  :
  <div>
      <button onClick={dec}>-</button>
       <p className="count-item">{count}</p> 
      <button onClick={inc}>+</button>
  </div>}
</>
}
