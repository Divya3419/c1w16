import React,{useState} from 'react'
// keep the add to cart component here
const CartButton = () => {
    //manage state of the count 
    const[count,setCount]=useState(0);
  return <>
  {/* add to cart button */}
  {/* count with - and  + button */}
  <div>
      <button onClick={()=>{setCount(count-1)}}>-</button>
      <p className="count-item">{count}</p>
      <button onClick={()=>{setCount(count+1)}}>+</button>
  </div>
  </>;
};
export default CartButton
