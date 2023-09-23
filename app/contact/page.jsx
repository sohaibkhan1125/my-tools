import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Image from 'next/image';


const Page = () => {
  return (
    <div>
      <Navbar />
      <div className='mt-5 w-full sm:ml-0 ml-[80px]'>
        <h1 className='font-semibold text-2xl text-center'>Contact Us !</h1>
        <h2 style={{ textAlign: 'center' }} className='font-semibold text-xl mt-5'>Welcome to <span id="W_Name"> Latest Tools</span>!</h2>

        <p style={{ fontSize: '17px' }} className='text-xl text-center mt-10'>Please email us if you have any queries about the site, advertising, or anything else.</p>

        <div style={{ textAlign: 'center' }}>
          <Image
           width={250}
           height={165}
          className='sm:ml-[600px] mt-5'
            alt="contact-us"
            src="https://lh3.googleusercontent.com/-BA7qy8h_v1g/YLVCWDNZdCI/AAAAAAAAALw/rsHNJWX0BK4P5CuB0ymG8QkJ9A9E8KchgCLcBGAsYHQ/w320-h87/email-us-1805514__480.webp"
          />
          <p style={{ marginLeft: '25%' }}>
            <i className="fas fa-envelope-open-text" style={{ color: '#2c3e50', fontSize: '20px' }}></i> <b><i> <span id="W_Email"><a href="mailto:admin@latesttools.com">admin@latesttools.com</a></span></i></b><br />
            <i className="fab fa-whatsapp-square" style={{ color: '#3edc81', fontSize: '20px' }}></i> <b><span id="W_whatsapp"><a href="tel:"></a></span></b><br />
          </p>
          <h3 style={{ color: '#3e005d' }}>We will revert to you as soon as possible...!</h3>
          <p style={{ color: '#3e005d', textAlign: 'center' }}>Thank you for contacting us! <br /><b>Have a great day</b></p>
          <span style={{ fontSize: '1px', opacity: '0' }}>This page is generated with the help of <a href="https://www.blogearns.com/2021/06/free-contact-us-page-generator.html" style={{ color: 'inherit' }}>Contact Us Page Generator</a></span>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
