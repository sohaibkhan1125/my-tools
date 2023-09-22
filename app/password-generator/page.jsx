'use client';
import React, { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

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
    <section>
      <Navbar />
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
      <Footer />
    </section>
  )
}

export default Page;
