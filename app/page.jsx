'use client';
import Footer from './Footer';
import Hero from './Hero';
import Navbar from './Navbar';
import Tools from './Tools';
import {HelmetProvider, Helmet } from 'react-helmet-async';



export default function Home() {
  return (
    <HelmetProvider>
    <div>
    <Helmet>
        <title>Latest Tools</title>
        <meta name="description" content="We offer latest tools thats are very helpful for you." />
        <meta name="keywords" content="latest tools, best online tools, free online tools, tools website, website tools" />
      </Helmet>
   <Navbar />
   <Hero />
   <Tools />
   <Footer />
   </div>
   </HelmetProvider>
  )
}
