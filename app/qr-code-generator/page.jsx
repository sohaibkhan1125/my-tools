'use client';

import React, { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Page = () => {
  // Define the state for error visibility
  const [errorVisible, setErrorVisible] = useState(false);
  const [qrImageUrl, setQrImageUrl] = useState('');

  // Define the styles as objects
  const qrErrorMsgContainerStyle = {
    margin: 'auto',
  };

  const qrErrorMsgStyle = {
    borderRadius: '0%',
    fontFamily: 'poppins, sans-serif',
    margin: 'auto',
  };

  // Function to handle close button click
  const handleCloseError = () => {
    setErrorVisible(false);
  };

  // Function to handle generate button click
  const handleGenerateClick = () => {
    const inputValue = document.getElementById('qr-input-content').value;
    
    if (inputValue.trim() !== '') {
      setErrorVisible(false);
      const finalURL = 'https://chart.googleapis.com/chart?cht=qr&chl=' + encodeURIComponent(inputValue) + '&chs=200x200&chld=L|0';
      setQrImageUrl(finalURL);
    } else {
      setErrorVisible(true);
      setQrImageUrl('');
    }
  };

  return (
    <section>
      <Navbar />
      <div className='-ml-[500px] sm:ml-0 mt-[70px]'>
        <p className='font-semibold text-3xl sm:ml-[20px] whitespace-nowrap mt-5 sm:text-center'>QR Code Generator</p>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" />

        <div id="qr-form-container">
          <input className="form-control border-[4px] rounded-lg py-3 sm:py-0 ml-[520px] sm:ml-[550px] mt-8 w-[450px] sm:w-[500px]" id="qr-input-content" placeholder="Enter text/link" required="" type="text" />
          <br />
          <button id="qr-call-btn" type="button" onClick={handleGenerateClick} className='text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 ml-[690px] sm:ml-[730px] mt-8 rounded-lg'>Generate</button>
        </div>

        <div id="qr-error-msg-container" style={qrErrorMsgContainerStyle}>
          <p><br /></p>
          {errorVisible && (
            <div id="qr-error-msg" style={qrErrorMsgStyle}>
              <strong>Warning! Please Enter Something...</strong>
              <button id="close-qr-error" onClick={handleCloseError} style={{ backgroundColor: 'transparent', border: 'none', fontSize: '16px', fontWeight: 'bold' }} type="button">?</button>
            </div>
          )}
        </div>

        <div className="text-center" id="qr-download-section">
          {qrImageUrl && (
            <>
              <img src={qrImageUrl} className='qr-code ml-[650px] mt-5  sm:ml-[700px]' alt='QR Code' />
              <p><br /></p>
              <a href={qrImageUrl} download='qrcode.png'>
                <button id='qr-download-btn' type='button' style={{ fontSize: '12px' }} className='text-white bg-blue-500 hover:bg-blue-700 px-10 sm:px-7 py-3 font-semibold sm:py-2 rounded-lg sm:ml-0 ml-[640px]'>Download</button>
              </a>
            </>
          )}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Page;
