import React from "react";
import { ProductsService } from "../../services/products-service";
import styles from "./ProductList.module.css";
import ProductCard from "../../productcard/ProductCard";


export default async function ProductList() {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  var products = await ProductsService.getProducts();
  return (
    <div className={styles.contentStyle}>
      {products.map((p: any) => {
        return <ProductCard key={p.id} products={p} />;
      })}
    </div>
  );
}
