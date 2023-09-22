'use client';;
import React, { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Page = () => {
  const [kilometers, setKilometers] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const miles = kilometers * 0.621371;

    setResult(`${kilometers} kilometers is equal to ${miles} miles.`);
  };

  return (
    <section>
      <Navbar />
      <div className='flex flex-col'>
        <form onSubmit={handleSubmit}>
         <h1 className='font-semibold text-center text-2xl mt-10'>KM to Mile Converter</h1>
          <input
            type="text"
            id="kilometers"
            className='border-[4px] rounded-lg sm:w-[400px] sm:ml-[600px] mt-5'
            value={kilometers}
            onChange={(e) => setKilometers(e.target.value)}
          />
           
          <button
            type="submit"
            className='text-white bg-blue-500 hover:bg-blue-700 rounded-lg px-3 py-2 sm:w-[200px] sm:ml-[685px] mt-5'
          >
            Convert
          </button>
        </form>
        <label htmlFor="kilometers" className='font-semibold text-2xl text-center mt-5'>
            Distance in kilometers:
          </label>
        <div id="result" className='font-semibold text-xl sm:ml-[550px] mt-10'>{result}</div>
      </div>
      <Footer />
    </section>
  );
};

export default Page;
