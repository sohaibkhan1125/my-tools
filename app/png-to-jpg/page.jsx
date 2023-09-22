'use client';
import React, { useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

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
    <section>
      <Navbar />
      <div className='text-center flex flex-col sm:mt-[90px]'>
        <h1 className='font-semibold text-2xl'>PNG to JPEG Converter</h1>
        <input type="file" id="imageInput" accept="image/png" className='sm:ml-[650px] mt-5' />

        <button id="convertButton" className='text-white bg-blue-500 hover:bg-blue-700 rounded-lg px-3 py-2 mt-10 w-[190px] sm:ml-[650px]'>Convert to JPEG</button>


        <img id="outputImage" className='w-[800px] ml-[400px] rounded-lg mt-5' alt="Converted JPEG" style={{ display: 'none' }} />

        <a id="downloadLink" style={{ display: 'none' }} className='text-white bg-blue-500 hover:bg-blue-700 px-3 py-2 rounded-lg w-[200px] sm:ml-[650px] mt-5'>Download JPEG</a>


      </div>

      <Footer />
    </section>
  )
}

export default Page;