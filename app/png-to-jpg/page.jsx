'use client';
import React, { useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Image from 'next/image';
import Hero from '../Hero';
import MoreTools from '../MoreTools';
import {HelmetProvider, Helmet } from 'react-helmet-async';



const Page = () => {
  useEffect(() => {
    const imageInput = document.getElementById('imageInput');
    const convertButton = document.getElementById('convertButton');
    const outputImage = document.getElementById('outputImage');
    const downloadLink = document.getElementById('downloadLink');

    convertButton.addEventListener('click', () => {
      if (imageInput.files.length > 0) {
        const file = imageInput.files[0];
        const reader = new FileReader();

        reader.onload = function (event) {
          const img = new Image();
          img.src = event.target.result;

          img.onload = function () {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);

            // Convert the canvas content to JPEG format
            const jpegDataUrl = canvas.toDataURL('image/jpeg');

            // Display the converted JPEG image
            outputImage.src = jpegDataUrl;
            outputImage.style.display = 'block';

            // Set the download link href and display it
            downloadLink.href = jpegDataUrl;
            downloadLink.download = 'converted_image.jpg';
            downloadLink.style.display = 'block';
          };
        };

        reader.readAsDataURL(file);
      } else {
        alert('Please select a PNG image to convert.');
      }
    });
  }, []); 
  return (
    <HelmetProvider>
    <section>
    <Helmet>
        <title>PNG to JPG</title>
        <meta name="description" content="By using this tool anyone can easily convert their png image into jpg." />
        <meta name="keywords" content="png to jpg, png to jpg converter, convert png to jpg" />
      </Helmet>
      <Navbar />
      <Hero />
      <div className='text-center flex flex-col sm:ml-0 ml-[120px] whitespace-nowrap mt-5 sm:mt-[90px]'>
        <h1 className='font-semibold text-2xl'>PNG to JPEG Converter</h1>
        <input type="file" id="imageInput" accept="image/png" className='sm:ml-[650px] mt-5' />

        <button id="convertButton" className='text-white bg-blue-500 hover:bg-blue-700 rounded-lg px-3 py-2 mt-10 w-[190px] sm:ml-[650px]'>Convert to JPEG</button>


        <Image  width={250}
              height={165} id="outputImage" className='w-[800px] ml-[400px] rounded-lg mt-5' alt="Converted JPEG" style={{ display: 'none' }} />

        <a id="downloadLink" style={{ display: 'none' }} className='text-white bg-blue-500 hover:bg-blue-700 px-3 py-2 rounded-lg w-[200px] sm:ml-[650px] mt-5'>Download JPEG</a>


      </div>
      <div className='sm:ml-[680px] sm:mt-[80px] ml-[150px] mt-[50px] '>
        <MoreTools />
      </div>
      <Footer />
    </section>
    </HelmetProvider>
  )
}

export default Page;
