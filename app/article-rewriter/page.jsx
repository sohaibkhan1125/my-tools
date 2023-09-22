'use client';
import React, { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Page = () => {
  const [translatedText, setTranslatedText] = useState('');
  const [inputText, setInputText] = useState('');
  const [isCopied, setIsCopied] = useState(false); // State to track if text is copied

  const serverURL = "https://api.funtranslations.com/translate/article_rewrite.json";

  function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text;
  }

  function errorHandler(error) {
    console.log("Error Occurred: ", error);
    alert("Something went wrong from the server side... Please try again after some time");
  }

  function clickHandler() {
    const url = getTranslationURL(inputText);
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        const translated = json.contents.translated;
        setTranslatedText(translated);
        setIsCopied(false); // Reset the copied state when content changes
      })
      .catch(errorHandler);
  }

  function copyToClipboard() {
    // Create a temporary textarea element to hold the text
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = translatedText;
    document.body.appendChild(tempTextArea);

    // Select the text in the textarea
    tempTextArea.select();
    tempTextArea.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text to the clipboard
    document.execCommand("copy");

    // Remove the temporary textarea
    document.body.removeChild(tempTextArea);

    setIsCopied(true); // Set copied state to true
  }

  return (
    <section>
      <Navbar />
      <div className='sm:w-full w-[500px] -ml-[250px] sm:ml-0'>
        <nav className="navigation-container mt-5 ml-[400px] sm:ml-0 whitespace-nowrap sm:text-center">
          <div className="nav-brand font-semibold text-2xl">Article Rewriter</div>
        </nav>

        <textarea
          id="txt-input"
          placeholder="Put your content here then hit the paraphrase button."
          className='border-[4px] rounded-lg ml-[265px] sm:ml-[550px] mt-5 w-[480px] sm:w-[500px] h-[300px]'
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></textarea>

        <button
          id="btn-paraphrase"
          onClick={clickHandler}
          className='text-white bg-blue-500 hover:bg-blue-700 px-10 sm:px-4 py-2 ml-[420px] sm:ml-[750px] mt-5 sm:mt-5 rounded-lg'
        >
          Rewrite
        </button>

        <div id="paraphrase-txt" className='font-semibold text-xl ml-[350px] sm:ml-[650px] whitespace-nowrap mt-8 sm:mt-5'> Rewritten text will come here 👇</div>

        <div id="output" placeholder='Rewritten text here' className='border-[4px] h-[250px] mt-5 w-[485px] sm:w-[520px] ml-[265px] sm:ml-[550px] rounded-lg'>{translatedText}</div>
        
        {isCopied && (
          <div className="text-green-500 text-2xl ml-[400px] whitespace-nowrap sm:ml-[720px] mt-3">&#10004; Text Copied</div>
        )}

        <button
          className='text-white font-semibold px-5 sm:ml-[720px]  sm:px-3 py-3 sm:py-2 bg-blue-500 hover:bg-blue-700 rounded-lg ml-[400px] mt-8 sm:mt-8 whitespace-nowrap'
          onClick={copyToClipboard}
        >
          Copy to Clipboard
        </button>
      </div>
      <Footer />
    </section>
  )
}

export default Page;
