import Link from 'next/link'
import classNames from 'classnames';
import React from 'react'
import styles from'./ProductCard.module.css'


export default function ProductCard(props:any) {
var prod = props.products;
// console.log("prod:",prod);
  return (
  <div className={styles.body}> 
     <Link href={'/products/'+ prod.id}>          
         <div><img src={prod.image} className ={styles.images}height="150px"></img></div>
         <div className={classNames(styles.title,styles.ellipsisText)}>{prod.title }</div> 
     </Link> 
        <div className={styles.price}> ₹{prod.price}</div>
        <div className={styles.category}> {prod.category}</div>
        <div className={classNames(styles.description,styles.ellipsisText)}>{prod.description}</div>
        <div className={styles.ratings}> Rating:{prod.rating.rate}</div>   
</div>    



    
  )
}
