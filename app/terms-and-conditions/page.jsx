'use client';
import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import {HelmetProvider, Helmet } from 'react-helmet-async';


const page = () => {
  return (
    <HelmetProvider>
    <section>
    <Helmet>
        <title>Terms and Conditions</title>
        <meta name="description" content="This is a terms and conditions page of latest tools website." />
        <meta name="keywords" content="terms and conditions, terms and conditions page" />
      </Helmet>
      <Navbar />
    <div>Hello</div>
    <Footer />
    </section>
    </HelmetProvider>
  )
}

export default page