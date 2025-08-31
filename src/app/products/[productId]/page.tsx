import { ProductsService } from '@/app/services/products-service';
import React from 'react'
import styles from "./Details.module.css";
import AddToCartButton from '@/app/component/addtocart/AddToCartButton';



export  async function generateMetadata(props:any){
    console.log("metadata:",props);
    const productId = props.params.productId;
    console.log("productId:",productId);
    var product;
if (productId){
        product = await ProductsService.getProductById(productId);
    return{
       title:product.title, 
    }
    }
    return {
    title:"ProductDetails"
    }

}   

export default async function ProductDetails(props:any) {

    const productId = props.params.productId;
    console.log("productId:",productId);
    var product;
    if(productId){
        product = await ProductsService.getProductById(productId);
    }
  return (

   
  <div className={styles.pageLayout}>           
  <h1 className={styles.productDetails}>Product Details</h1>
  <div className={styles.body}> 
        <div><img src={product.image} className ={styles.images}height="150px"></img></div>
         <div className={styles.detailsCard}>
        <div className={styles.title}> {product.title}</div>
        <div className={styles.price}> ₹{product.price}</div>
        <div className={styles.category}> {product.category}</div>
        <div className={styles.description}> {product.description}</div>       
        </div>      
    <AddToCartButton product ={product}/>
</div>
</div>
  )
}
