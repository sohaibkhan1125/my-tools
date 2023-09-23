'use client';

import React, { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Image from 'next/image';
import Hero from '../Hero';
import MoreTools from '../MoreTools';
import {HelmetProvider, Helmet } from 'react-helmet-async';


const Page = () => {
  const [outputImageUrl, setOutputImageUrl] = useState('');
  
  const handleRemoveBackground = () => {
    const imageInput = document.getElementById("image-input");
    const downloadButton = document.getElementById("download-button");

    if (!imageInput.files || !imageInput.files[0]) {
      alert("Please select an image to remove the background from");
      return;
    }

    const formData = new FormData();
    formData.append("image_file", imageInput.files[0]);

    fetch("https://api.remove.bg/v1.0/removebg", {
      method: "POST",
      body: formData,
      headers: {
        "X-Api-Key": "A62r1PcA69YC2onaMye3MqnZ" 
      }
    })
      .then(response => response.blob()) 
      .then(blob => {
        const objectURL = URL.createObjectURL(blob);
        setOutputImageUrl(objectURL);
        downloadButton.disabled = false;
      })
      .catch(error => {
        alert(error);
      });
  };

  const handleDownloadImage = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = outputImageUrl;
    downloadLink.download = document.getElementById("image-input").files[0].name;
    
    document.body.appendChild(downloadLink);
    
    downloadLink.click();
    
    document.body.removeChild(downloadLink);
  };

  return (
    <HelmetProvider>
    <section>
    <Helmet>
        <title>Image Background Remover</title>
        <meta name="description" content="By using this tool anyone can easily remove their images background free." />
        <meta name="keywords" content="image background remover, background remover, image background changer, image backgrounder, bg remover, free image background remover" />
      </Helmet>
      <Navbar />
      <Hero />
      <p className='font-semibold text-3xl text-center mt-5 ml-[40px]'>Image Background Remover</p>
      <div class="-ml-[150px] sm:ml-[400px] mt-8">
        <div class="ml-[200px]">
          <input type="file" id="image-input" accept="image/*"/>
          <button id="submit-button" onClick={handleRemoveBackground} className='text-white bg-blue-500 hover:bg-blue-700 px-3  mt-5  rounded-lg py-2'>Remove Background</button>
        </div>
        <div class="output-container">
          {outputImageUrl && <img id="output-image"  className='w-[300px] ml-[270px] mt-10 rounded-lg border-[2px]' src={outputImageUrl} alt="Output"/>}
        </div>
        <br/>
        <div class="download-container">
          <button id="download-button" onClick={handleDownloadImage} class="text-white bg-blue-500 hover:bg-blue-700 rounded-lg px-3 py-2 ml-[200px] sm:ml-[350px]">Download Image</button>
        </div>
        <Image  width={250}
              height={165} className='rounded-lg ml-[180px] w-[450px] sm:ml-[230px] mt-10 sm:w-[450px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT02HrFZuXLBvLA0Xjk-fvoUwkONkJi3OZIKw&usqp=CAU" alt="" />
      </div>
      <div className='sm:ml-[780px] ml-[170px] mt-[50px] sm:mt-[80px]'>
     <MoreTools />
     </div>
      <Footer  />
    </section>
    </HelmetProvider>
  );
}

export default Page;
