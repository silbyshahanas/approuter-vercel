'use client'

import React, { useContext } from 'react'
import styles from './Cart.module.css'
import { CartContext } from '../cart-context/CartContext';


export default function ShowCart() {
  const { itemsInCart } = useContext(CartContext);
    //  console.log("itemsInCart:",itemsInCart);
  return ( 
<div className={styles.cartStyle}>
    <h1 className={styles.shoppingCart}>Shopping Cart</h1>
    <ol>
{
itemsInCart.map((i:any)=>{
    return(

<li><div className={styles.body}> 
        <div><img src={i.image} className ={styles.images}height="150px"></img></div>
         {/* <div className={styles.id}>Product-id:{prod.id }</div> */}
         <div className={styles.cartDetails}>
        <div className={styles.title}> {i.title}</div>
        <div className={styles.price}> ₹{i.price}</div>
        <div className={styles.category}> {i.category}</div>
        <div className={styles.description}> {i.description}</div>
        <div className={styles.ratings}>rating: {i.rating.rate}</div>
        </div>
</div></li>
    )
})


}
</ol>
</div>

     );
}
