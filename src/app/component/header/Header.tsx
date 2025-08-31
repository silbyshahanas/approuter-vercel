'use client'

import Link from 'next/link'
import React, {useState } from 'react'
import './Header.css'
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation'

export default function Header() {
 const [searchText, setSearchText] = useState("");
 const router = useRouter();
      const onSearchChange = (($e:any)=>{
  setSearchText($e.target.value);
});

const handleSearch = () => {
    if (searchText) {
      router.push(`/search?value=${searchText}`);
    }
  };
  
 const pathname = usePathname()
//  console.log("Current pathname:", pathname);
  return (
    <header className="for-header">
      <div className="container-fluid for-fixedheader ">
        <div className="row align-items-center ">
         
          {/* <!-- for logo --> */}
          <div className="col-auto">
             <Image className='for-logo' src = {'/images/demoLogo.png'} alt ="this is logo" width={150} height={150}/>
          </div>

          {/* <!-- for home --> */}
          <div className="for-home nav-item col-auto text-white d-none d-md-block">
            <Link href ="/" className="nav-link " aria-current={pathname === '/' ? 'page' : undefined}><strong> Home</strong></Link> 
          </div>

          {/* <!-- for searchbar col-sm-2 col-lg-8--> */}
          <div className="col for-searchbar btn d-flex">
            <select className="for-select">
              <option value="ALL">All</option>
            </select>
            <input
              type="text"
              placeholder="search for item"
              className="form-control"
              onChange={onSearchChange}
            />
            <button onClick={handleSearch} className="btn btn-warning">
              <i className="bi bi-search"></i>
            </button>
          </div>
 {/* <!-- for products --> */}
          <div className="col-auto nav-item  text-white d-none d-sm-block for-detail-section">
            <Link href ="/products" className="nav-link "aria-current={pathname === '/products' ? 'page' : undefined} ><strong> Products</strong></Link>
          </div>
          {/* <!-- for about us --> */}
          <div className="col-auto nav-item text-white d-none d-sm-block for-detail-section">
            <Link href ="/about-us" className="nav-link "aria-current={pathname === '/about-us' ? 'page' : undefined} > <strong>About US</strong></Link>
          </div>

          {/* <!-- for contact us --> */}
          <div className="col-auto nav-item text-white  d-none d-xl-block for-detail-section">
             <Link href ="/contact-us" className="nav-link " aria-current={pathname === '/contact-us' ? 'page' : undefined} > <strong>Contact US</strong></Link>
          </div>
          {/* <!-- Cart --> */}
          <div className="col-auto nav-item for-cart text-white">
          <Link href ="/cart" className="nav-link " aria-current={pathname === '/cart' ? 'page' : undefined} > <strong>🛒 Cart</strong></Link></div>
        </div>
      </div>
    </header>
  )
}
