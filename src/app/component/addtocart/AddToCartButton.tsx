'use client'

import React, { useContext, useState } from 'react'
import { CartContext } from '@/app/component/cart-context/CartContext';
import Link from 'next/link';
// import ShowCart from '@/app/cart/page';
import styles from './CartButton.module.css'

export default function AddToCartButton(props:any) {
  // console.log("props:",props)
  const item = props.product;
  const{addToCart}= useContext(CartContext);
 
  return (
    <div className={styles.buttonStyle}>
      <Link href = {"/cart"}><button onClick={()=>{
            addToCart(item);
            // ShowCart();
        }}>Add to Cart</button></Link> 
      </div>
  )
}



