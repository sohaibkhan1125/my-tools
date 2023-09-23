'use client';
import React from 'react';
import Navbar from  '../Navbar';
import Footer from '../Footer';
import Hero from '../Hero';
import MoreTools from '../MoreTools';
import {HelmetProvider, Helmet } from 'react-helmet-async';


const Page = () => {
  const containerStyle = {
    textAlign: 'right',
  };

  const iframeContainerStyle = {
    minHeight: '360px',
  };

  const iframeStyle = {
    border: 'none',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    minHeight: '360px',
    border: 'none',
    overflow: 'hidden !important',
  };

  return (
    <HelmetProvider>
        <Helmet>
        <title>Internet Speed Checker</title>
        <meta name="description" content="This is a best internet speed checker tool. You can easily test your current internet speed." />
        <meta name="keywords" content="internet speed checker, internet speed tester, internet speed, net speed checker" />
      </Helmet>
    <section>
        <Navbar  />
        <Hero />
    <div className='mt-8 sm:ml-0 ml-[150px]'>
      <div style={containerStyle}>
        <div style={iframeContainerStyle}>
          <div style={{ width: '100%', height: '0', paddingBottom: '50%', position: 'relative' }}>
            <iframe src="https://openspeedtest.com/Get-widget.php" style={iframeStyle}></iframe>
          </div>
        </div>
      </div>
    </div>
    <div className='sm:ml-[720px] sm:mt-[80px] ml-[170px] mt-[50px]'>
      <MoreTools />
    </div>
    <Footer />
    </section>
    </HelmetProvider>
  );
}

export default Page;
