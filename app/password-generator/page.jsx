'use client';
import React, { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Hero from '../Hero';
import MoreTools from '../MoreTools';
import {HelmetProvider, Helmet } from 'react-helmet-async';


const Page = () => {
  const [password, setPassword] = useState('');
  const [copied, setCopied] = useState(false); // State to track whether the password has been copied

  const generatePassword = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
    const passwordLength = 12;
    let newPassword = '';

    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      newPassword += characters[randomIndex];
    }

    setPassword(newPassword);
    setCopied(false); // Reset the copied state when generating a new password
  };

  const copyToClipboard = () => {
    const passwordInput = document.getElementById('password');
    passwordInput.select();
    document.execCommand('copy');
    setCopied(true); // Update the copied state to indicate that the password has been copied
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Password Generator</title>
        <meta name="description" content="This is a simple passsword generator tool. With the help of this tool anyone can easily generate their password." />
        <meta name="keywords" content="password generator, generate password, password generator free, password generator tool" />
      </Helmet>
    <section>
      <Navbar />
      <Hero />
      <div className='text-center sm:mt-[100px] flex flex-col'>
        <div className="container ">
          <h1 className='font-semibold text-3xl sm:ml-0 ml-[100px] whitespace-nowrap sm:text-2xl '>Password Generator</h1>
          <div className="result-container">
            <input id="password" className="password-result border-[4px] w-[350px] sm:w-[300px] ml-[70px] rounded-lg sm:ml-[80px] mt-5" type="text" value={password} readOnly />
            {copied ? (
              // Show a tick mark when the password has been copied
              <span className="text-green-500 ml-2">&#10003;</span>
            ) : (
              // Show the copy button when the password hasn't been copied
              <button id="copy" className="copy-btn text-white bg-blue-500 hover:bg-blue-700 rounded-lg px-4 sm:mt-0 mt-10 sm:px-2 py-1 ml-[100px] sm:ml-5" onClick={copyToClipboard}>Copy</button>
            )}
          </div>
          <button id="generate" className="generate-btn text-white bg-blue-500 hover:bg-blue-700 rounded-lg sm:ml-0 ml-[100px] px-3 py-2 mt-10 sm:mt-7" onClick={generatePassword}>Generate Password</button>
        </div>
      </div>
      <div className='sm:ml-[720px] sm:mt-[80px] ml-[170px] mt-[50px]'>
        <MoreTools />
      </div>
      <Footer />
    </section>
    </HelmetProvider>
  )
}

export default Page;
