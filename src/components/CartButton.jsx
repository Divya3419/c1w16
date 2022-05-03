import React,{useState} from 'react'

const CartButton = () => {
    
    const[count,setCount]=useState(0);

    const [cart,setCart]=useState(true);

    const addCart=()=>{
      setCart(false);
      setCount(1)
    }

    const handleChange = (value) => {
      let result = count + value;
      if (result > 0) {
        setCart(false);
      }
       else {
        setCart(true);
      }
      setCount(count + value);
    };
  return cart ? (
    <button onClick={addCart}>Add to Cart</button>
  ) :( <>
  <div>
      <button onClick={()=>handleChange(-1)}>-</button>
      <p className="count-item">{count}</p>
      <button onClick={()=>handleChange(1)}>+</button>
  </div>
  </>
  )
};
export default CartButton
