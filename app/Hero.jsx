// Hero.jsx
import React from 'react';
import ScrollButton from './ScrollButton'; 

const Hero = () => {
  return (
    <section className='w-[500px] sm:w-full h-[500px] bg-[#1E1D1E] flex flex-col'>
      <div className='sm:text-center mt-5 text-center sm:mt-[100px]'>
        <h2 className='  sm:mt-[50px]  text-[50px] text-white font-bold'>
          Discover Best Online Tools
        </h2>
        <p className='text-gray-400 text-xl ml-2 sm:ml-0'>
          We provide the best online tools that are very helpful for you.
        </p>
      
        <ScrollButton />
      </div>

      
      <div id='targetSection'></div>
    </section>
  );
};

export default Hero;
