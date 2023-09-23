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
        <title>Privacy Policy</title>
        <meta name="description" content="This is a privacy policy page of latest tools website." />
        <meta name="keywords" content="privacy policy, privacy policy page" />
      </Helmet>
      <Navbar />
 <div>Hello</div>
 <Footer />
    </section>
    </HelmetProvider>
   
  )
}

export default page