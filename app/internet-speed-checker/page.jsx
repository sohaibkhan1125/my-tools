import React from 'react';
import Navbar from  '../Navbar';
import Footer from '../Footer';

const Page = () => {
  const containerStyle = {
    textAlign: 'right',
  };

  const iframeContainerStyle = {
    minHeight: '360px',
  };

  const iframeStyle = {
    border: 'none',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    minHeight: '360px',
    border: 'none',
    overflow: 'hidden !important',
  };

  return (
    <section>
        <Navbar  />
    <div className='mt-8 sm:ml-0 ml-[150px]'>
      <div style={containerStyle}>
        <div style={iframeContainerStyle}>
          <div style={{ width: '100%', height: '0', paddingBottom: '50%', position: 'relative' }}>
            <iframe src="https://openspeedtest.com/Get-widget.php" style={iframeStyle}></iframe>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </section>
  );
}

export default Page;
