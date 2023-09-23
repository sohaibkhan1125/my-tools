import Link from 'next/link';
import React from 'react';


const Footer = () => {
  return (
    <footer className='flex flex-col sm:flex-row w-[500px] sm:w-full border-[2px] h-[520px] sm:h-[300px] mt-[130px] bg-[#2C2C2C] text-white'>
     <div className='w-[500px] sm:w-[20%] sm:ml-[20px]'>
        <h2 className='font-semibold text-4xl sm:text-2xl ml-[140px] sm:ml-6 whitespace-nowrap mt-[40px]'>Latest Tools</h2>
        <p className='text-center sm:text-start  text-2xl sm:text-xl sm:ml-5 text-gray-300 mt-3'>Our aim is to provide latest tools that are very helpful for you.</p>
        <p className='sm:ml-3 hidden sm:block sm:mt-[100px]'><span>&#169;</span>Latest Tools. 2023</p>
     </div>

     <div className='w-[500px] mt-5 sm:mt-0 sm:ml-[200px] sm:w-[70%]'>
        <p className='sm:ml-[190px] ml-[120px] mt-[35px] text-4xl sm:text-2xl font-semibold'>Important Links</p>
        <ul className='sm:ml-[200px]  ml-[130px]  mt-3 text-2xl flex flex-col gap-y-3 sm:text-xl text-gray-300 '>
            <li>
                <Link href="/">Home</Link>
            </li>

            <li>
                <Link href="/about">About</Link>
            </li>

            <li>
                <Link href="/contact">Contact</Link>
            </li>

            <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
            </li>

            <li>
                <Link href="/terms-and-conditions">Terms and Conditions</Link>
            </li>
        </ul>
     </div>

     
    </footer>
  )
}

export default Footer