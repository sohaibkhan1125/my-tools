import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

const page = () => {
  const centerTextStyle = {
    textAlign: 'center'
  };

  const boldCenterTextStyle = {
    fontWeight: 'bold',
    textAlign: 'center'
  };

  const blueTextStyle = {
    color: 'blue',
    fontSize: '16px',
    fontWeight: 'bold',
    textAlign: 'center'
  };

  return (
    <div>
      <Navbar />
      <div className='sm:ml-0 ml-[60px] w-full'>
        <h2 className='font-semibold text-2xl text-center mt-5'>About Us!</h2>
        <h3 style={centerTextStyle} className='font-semibold text-xl mt-8'>Welcome To <span id="W_Name1" className='font-semibold text-xl'>Latest Tools</span></h3>
        <p className='text-xl ml-2 mt-5'><span id="W_Name2">Latest Tools</span> is a Professional <span id="W_Type1">Latest Tools</span> Platform. Here we will provide you only interesting content, which you will like very much. We&apos;re dedicated to providing you the best of <span id="W_Type2">Latest Tools</span>, with a focus on dependability and <span id="W_Spec">Latest Tools</span>. We&apos;re working to turn our passion for <span id="W_Type3">Latest Tools</span> into a booming <a href="https://www.blogearns.com/2021/05/free-about-us-page-generator.html" rel="do-follow" style={{ color: 'inherit', textDecoration: 'none' }}>online website</a>. We hope you enjoy our <span id="W_Type4">Latest Tools</span> as much as we enjoy offering them to you.</p>
        <p className='text-xl ml-2 mt-5'>I will keep posting more important posts on my Website for all of you. Please give your support and love.</p>
        <p style={boldCenterTextStyle}>Thanks For Visiting Our Site <span style={blueTextStyle}>Have a nice day!</span></p>
      </div>
      <Footer />
    </div>
  );
};

export default page;
