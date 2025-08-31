import { Metadata } from "next";
import React, { Suspense } from "react";
import ProductList from "../component/productlist/ProductList";

export const metadata: Metadata = {
  title: "ProductList",
};

export default function Products() {
  return (
    <div>
      <Suspense fallback={<span style={{ color: 'red' }}>Loading</span>}>
        <ProductList />
      </Suspense>
    </div>
  );
}
