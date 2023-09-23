'use client';;
import React, { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Hero from '../Hero';
import MoreTools from '../MoreTools';
import {HelmetProvider, Helmet } from 'react-helmet-async';


const Page = () => {
  const [kilometers, setKilometers] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const miles = kilometers * 0.621371;

    setResult(`${kilometers} kilometers is equal to ${miles} miles.`);
  };

  return (
    <HelmetProvider>
       <Helmet>
        <title>KM to Mile Converter</title>
        <meta name="description" content="With the help of this tool you can easily convert kilo meter into mile." />
        <meta name="keywords" content="kilo meter to mile converter, km to mile converter, km to mile, kilo meter to mile, convert km to mile" />
      </Helmet>
    <section>
      <Navbar />
      <Hero />
      <div className='flex flex-col sm:ml-0 ml-[120px]'>
        <form onSubmit={handleSubmit}>
         <h1 className='font-semibold text-center text-2xl mt-10'>KM to Mile Converter</h1>
          <input
            type="text"
            id="kilometers"
            className='border-[4px] rounded-lg sm:w-[400px] w-[300px] sm:ml-[600px] mt-5'
            value={kilometers}
            onChange={(e) => setKilometers(e.target.value)}
          />
           
          <button
            type="submit"
            className='text-white bg-blue-500 hover:bg-blue-700 rounded-lg px-3 py-2 ml-[70px] sm:w-[200px] sm:ml-[685px] mt-5'
          >
            Convert
          </button>
        </form>
        <label htmlFor="kilometers" className='font-semibold text-2xl text-center mt-5'>
            Distance in kilometers:
          </label>
        <div id="result" className='font-semibold text-xl sm:ml-[550px] mt-10'>{result}</div>
      </div>
      <div className='sm:ml-[720px] sm:mt-[80px] ml-[170px] mt-[50px]'>
        <MoreTools />
      </div>
      <Footer />
    </section>
    </HelmetProvider>
  );
};

export default Page;
