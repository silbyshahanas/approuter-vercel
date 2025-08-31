'use client'


import React, { useEffect } from 'react'
import Image from "next/image"
import './Carousel.css'
import Script from 'next/script';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Carousel() {
  return (
      <div className="home-layout">

        <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      />

    
         {/* <!-- navigation bar --> */}
        <nav className="for-nav ">
          <div className="container-fluid">
     
    <div className="row text-white">
    
      <div className="col-auto">
         <button className="navbar-toggler"> 
          <span className="navbar-toggler-icon"></span>
        </button> All</div>
    
      <div className="col-auto">Amazon miniTV</div>
      <div className="col-auto">Sell</div>
      <div className="col-auto">Best Sellers</div>
      <div className="col-auto">Today's Deals</div>
      <div className="col-auto d-none d-sm-block">Mobiles</div>
      <div className="col-auto d-none d-sm-block">Prime</div>
       <div className="col-auto d-none d-md-block">Electronics</div>
       <div className="col-auto d-none d-md-block">Customer Service</div>
       <div className="col-auto d-none d-lg-block">New Releases</div>
       <div className="col-auto d-none d-lg-block">Home & Kitchen</div>
       <div className="col-auto d-none d-xl-block">Fashion</div>
       <div className="col-auto d-none d-xl-block">Amazon Pay</div>
       <div className="col-auto d-none d-xl-block">Computers</div>
       <div className="col-auto d-none d-xxl-block">Gift Cards</div>
       <div className="col-auto  d-none d-xxl-block">Books</div>
       
    </div>    
          </div>
        </nav>
    <div id="carouselExample" className="carousel slide carousel-body">
      <div className="carousel-inner">
        <div className="carousel-item active">
          {/* <img src={img1} className="d-block w-100" alt="..."/> */}
            <Image className="d-block w-100" src = {'/images/banner1.png'} alt ="..." width={150} height={150}/>
          <div className="carousel-caption for-carousel1 d-none d-md-block">
            <h2 className="text-Carousel1">Upto 60% off</h2>
            <h3>Fashion&Beauty</h3>
            <p>LATEST TRENDS</p>
          </div>
        </div>
        <div className="carousel-item">
          {/* <img src={img2} className="d-block w-100" alt="..."/> */}
            <Image className="d-block w-100" src = {'/images/banner2.png'} alt ="..." width={150} height={150}/>
           <div className="carousel-caption for-carousel2 d-none d-md-block">
            <h2 className="text-Carousel2">Upto 50% off</h2>
            <h3 className="text-Carousel2">KidsDress</h3>
            <p className="text-Carousel2">LATEST TRENDS</p>
          </div>
        </div>
        <div className="carousel-item">
          {/* <img src={img3} className="d-block w-100" alt="..."/> */}
            <Image className="d-block w-100" src = {'/images/banner3.png'} alt ="..." width={150} height={150}/>
            <div className="carousel-caption for-carousel3 d-none d-md-block">
            <h2 className="text-Carousel3">Upto 30% off</h2>
            <h3 className="text-Carousel3">Mobiles&Gadgets</h3>
            <p className="text-Carousel3">LATEST OFFERS</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
        </div>
  )
}
