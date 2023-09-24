'use client';
import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { HelmetProvider, Helmet } from 'react-helmet-async';

const Page = () => {
  const [jpegDataUrl, setJpegDataUrl] = useState('');
  const [downloadLinkVisible, setDownloadLinkVisible] = useState(false);

  useEffect(() => {
    const imageInput = document.getElementById('imageInput');
    const convertButton = document.getElementById('convertButton');

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
            const jpegDataURL = canvas.toDataURL('image/jpeg');
            
            // Update state to display the converted JPEG image
            setJpegDataUrl(jpegDataURL);
            setDownloadLinkVisible(true);
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
        <div className='text-center flex flex-col sm:ml-0 ml-[120px] whitespace-nowrap mt-5 sm:mt-[90px]'>
          <h1 className='font-semibold text-2xl'>PNG to JPEG Converter</h1>
          <input type="file" id="imageInput" accept="image/png" className='sm:ml-[650px] mt-5' />
          <button id="convertButton" className='text-white bg-blue-500 hover:bg-blue-700 rounded-lg px-3 py-2 mt-10 w-[190px] sm:ml-[650px]'>Convert to JPEG</button>
          {jpegDataUrl && (
            <img src={jpegDataUrl} className='w-[800px] ml-[400px] rounded-lg mt-5' alt="Converted JPEG" />
          )}
          {downloadLinkVisible && (
            <a
              href={jpegDataUrl}
              download='converted_image.jpg'
              className='text-white bg-blue-500 hover:bg-blue-700 px-3 py-2 rounded-lg w-[200px] sm:ml-[650px] mt-5'>
              Download JPEG
            </a>
          )}
        </div>
        <Footer />
      </section>
    </HelmetProvider>
  );
};

export default Page;
