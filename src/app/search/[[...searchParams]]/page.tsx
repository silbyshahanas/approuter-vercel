import { ProductsService } from '@/app/services/products-service';
import React from 'react'
import styles from './SearchList.module.css';
import ProductCard from '@/app/productcard/ProductCard';

export default async function SearchFunction(props:any) {
    
    var searchText = props.searchParams.value;
    console.log("searchtext:",props);
     console.log("searchtext:",searchText);
    var searchList = await ProductsService.getProducts();
    
 
  const filteredProducts = searchList.filter((p:any) => {
    return p.title.toLowerCase().includes(searchText.toLowerCase());
  });

  
  return (
    <div className={styles.contentStyle}>
      {filteredProducts.map((p:any) => {
        return (
          <div>
            <ProductCard key={p.id} products={p} />
          </div>
        );
      })}
    </div>
  );
}

 
