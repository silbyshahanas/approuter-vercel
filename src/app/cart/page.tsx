import React from 'react'
import ShowCart from '../component/cart-page/CartPage'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Cart",
};
export default function Cart() {
  return (
    <div>

<ShowCart/>

    </div>
  )
}
