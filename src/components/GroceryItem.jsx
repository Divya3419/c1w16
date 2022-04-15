// reusable card component
import CartButton from "./CartButton"
const GroceryItem = ({ele}) => {

  return( 

<div>
  <p>{ele.discount}</p>
  <img src={ele.imgURL} alt="" />
  <p>{ele.title}</p>
  <p>{ele.mrp}</p>
<p>{ele.sellingPrice}</p>
<button>Add to Cart</button>
  <CartButton/>
</div>
  
  )
};
export default GroceryItem;
