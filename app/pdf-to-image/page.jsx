'use client';
import React, { useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Hero from '../Hero';
import MoreTools from '../MoreTools';
import {HelmetProvider, Helmet } from 'react-helmet-async';


const Page = () => {
  useEffect(() => {
    // Load PDF.js library directly from a CDN
    const pdfjsScript = document.createElement('script');
    pdfjsScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.5.207/pdf.js'; // Add the PDF.js library link
    pdfjsScript.async = true;
    pdfjsScript.onload = () => {
      // Initialize PDF.js after the script is loaded
      initPdfJs();
    };
    document.head.appendChild(pdfjsScript);
  }, []);

  const initPdfJs = () => {
    // PDF.js is now available
    const pdfjs = window['pdfjs-dist/build/pdf'];

    // Set the worker source
    pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    // Your PDF.js code here
    const pdfInput = document.getElementById('pdf-input');
    const convertButton = document.getElementById('convert-button');
    const output = document.getElementById('output');
    const downloadButton = document.getElementById('download-button');

    convertButton.addEventListener('click', () => {
      // Ensure a PDF file has been selected
      if (!pdfInput.files || pdfInput.files.length === 0) {
        return alert('Please select a PDF file to convert');
      }

      // Read the selected PDF file
      const fileReader = new FileReader();
      fileReader.onload = (event) => {
        // Convert the PDF to an image using PDF.js
        const pdfData = event.target.result;
        const loadingTask = pdfjs.getDocument({ data: pdfData });
        loadingTask.promise.then((pdf) => {
          pdf.getPage(1).then((page) => {
            const scale = 1.5;
            const viewport = page.getViewport({ scale });
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;
            const renderTask = page.render({ canvasContext: ctx, viewport });
            renderTask.promise.then(() => {
              // Output the image as a data URL
              const imageUrl = canvas.toDataURL('image/png');
              const imageElement = document.createElement('img');
              imageElement.src = imageUrl;
              output.innerHTML = '';
              output.appendChild(imageElement);
            });
          });
        });
      };
      fileReader.readAsArrayBuffer(pdfInput.files[0]);
    });

    downloadButton.addEventListener('click', () => {
      // Get the image element
      const imageElement = document.querySelector('#output img');
      if (!imageElement) {
        return;
      }

      // Create a download link
      const link = document.createElement('a');
      link.download = 'image.png';
      link.href = imageElement.src;

      // Trigger the download
      link.click();
    });
  };

  return (
    <HelmetProvider>
    <section>
    <Helmet>
        <title>PDF to Image</title>
        <meta name="description" content="Best pdf to image converter tool here. Simply paste your pdf and get image." />
        <meta name="keywords" content="pdf to image, pdf to image converter, convert pdf to image, pdf to png,pdf to jpg" />
      </Helmet>
     
      <Navbar />
      <Hero />
      <div className='text-center flex flex-col sm:ml-0 ml-[100px] mt-5'>
        <h1 className="font-semibold text-2xl sm:text-3xl whitespace-nowrap sm::ml-0 -ml-3">PDF to Image Converter</h1>
        <input type="file" id="pdf-input" className='sm:ml-[650px] mt-8' />
        <button
          id="convert-button"
          className='bg-blue-500 text-white hover:bg-blue-700 rounded-lg px-2 w-[200px] sm:w-[240px] py-2 ml-[60px] sm:ml-[630px] mt-8'
        >
          Convert to Image
        </button>
        <div id="output" className='sm:mt-0 mt-3'></div>
        <button
          id="download-button"
          className='text-white bg-blue-500 hover:bg-blue-700 px-2 py-2 rounded-lg w-[200px] sm:w-[240px] ml-[60px] sm:ml-[630px] mt-10'
        >
          Download Image
        </button>
      </div>
      <div className='sm:ml-[680px] sm:mt-[80px] ml-[170px] mt-[50px]'>
        <MoreTools />
      </div>
      <Footer />
    </section>
    </HelmetProvider>
  );
};

export default Page;
