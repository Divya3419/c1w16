
import React from "react"
import data from '../data.json'
import {GroceryItem} from "./GroceryItem"



const GroceryDetails = ()=>{


    return(
        <>

        <h1>Groceries</h1>
        <div className="container">
        {data.map((ele)=>{
            return(
               <GroceryItem key ={ele.id} ele={ele}/>
            )
        })}
        </div>
</>
    )
        
}
export default GroceryDetails