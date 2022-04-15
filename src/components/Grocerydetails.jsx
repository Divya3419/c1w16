import React from "react";
import data from '../data.json';
import GroceryItem from "./GroceryItem";
import styles from "./Grocerydetails.module.css";


const GroceryDetails = ()=>{


    return(
        <>
        <h1 style={{color:"pink",border:"2px solid black"}}>Groceries</h1>
        <div className={styles.container}>
            {/* map through the data and display the cards */}
        {data.map((ele)=>{
            return(
<GroceryItem key={ele.id} ele={ele}/>
            )
        })}
       

        </div>
        </>
    )
}
export default GroceryDetails