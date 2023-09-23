'use client';
import React, { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Hero from '../Hero';
import MoreTools from '../MoreTools';
import {HelmetProvider, Helmet } from 'react-helmet-async';


function countWords() {
  // Get the text entered by the user
  var text = document.getElementById("text").value;
  // Remove any extra white space and line breaks
  text = text.trim();
  // Split the text into an array of words
  var words = text.split(/\s+/);
  // Count the number of words
  var wordCount = words.length;
  return wordCount;
}

const Page = () => {
  const [wordCount, setWordCount] = useState(0);

  const handleCountWords = () => {
    const count = countWords();
    setWordCount(count);
  };

  return (
    <HelmetProvider>
    <section>
    <Helmet>
        <title>Word Counter</title>
        <meta name="description" content="By using this tool you can easily count any artilce words." />
        <meta name="keywords" content="word counter, free word counter, simple word counter, word counter free" />
      </Helmet>
      <Navbar />
      <Hero />
      <div className='flex flex-col ml-[80px] w-full sm:ml-[700px] mt-10'>
        <h1 className='font-semibold text-2xl'>Word Counter Tool</h1>
        <p className='font-semibold text-xl mt-5'>Enter your text below:</p>
        <textarea id="text" rows="10" cols="50" className='border-[4px] sm:w-[400px] rounded-lg sm:-ml-[50px] mt-8'></textarea>
        <button onClick={handleCountWords} className='bg-blue-500 hover:bg-blue-700 rounded-lg px-3 py-2  sm:w-[250px] mt-8 text-white'>Count Words</button>
        <p className='font-semibold sm:ml-[30px] mt-10'>Number of words: <span id="wordCount">{wordCount}</span></p>
      </div>
      <div className='sm:ml-[760px] sm:mt-[80px] ml-[170px] mt-[50px]'>
        <MoreTools />
      </div>
      <Footer />
    </section>
    </HelmetProvider>
  )
}

export default Page;
