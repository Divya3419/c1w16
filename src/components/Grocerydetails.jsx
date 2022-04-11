import React from "react"
import data from '../data.json'


const GroceryDetails = ()=>{
console.log(data)

    return(
        <>
        <h1>Groceries</h1>
        <div className="container">
            {/* map through the data and display the cards */}
        
            <p> {data.title} </p>
            <p>{data.mrp}</p>
            <p>{data.sellingPrice}</p>

        </div>
        </>
    )
}
export default GroceryDetails