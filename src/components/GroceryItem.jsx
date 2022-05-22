
import {CartButton} from "./CartButton";


export const GroceryItem = ({ele}) => {
  return <>
 <div>
    <p style={{textAlign: 'left',backgroundColor: 'red',borderRadius:"250px",width:"10%",height:"40px",color:"white"}}>{ele.discount}</p>
     <img src={ele.imgURL} alt="" />
       <p>{ele.title}</p>
       <div style={{display: 'grid',gridTemplateColumns:"repeat(2,1fr)"}}>
      
         <p>{ele.sellingPrice}</p>
         <p style={{textDecoration:"line-through"}}>MRP: {ele.mrp}</p>
       </div>
         
         <CartButton/>
                </div>

  </>;
}
