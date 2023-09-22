import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className='flex flex-col sm:flex-row w-[500px] sm:w-full border-[2px] h-[700px] sm:h-[300px] mt-[130px] bg-[#2C2C2C] text-white'>
     <div className='w-[500px] sm:w-[20%]'>
        <h2 className='font-semibold text-4xl sm:text-2xl ml-[140px] sm:ml-6 whitespace-nowrap mt-[40px]'>Latest Tools</h2>
        <p className='text-center sm:text-start  text-2xl sm:text-xl sm:ml-5 text-gray-300 mt-3'>Our aim is to provide latest tools that are very helpful for you.</p>
        <p className='sm:ml-3 hidden sm:block sm:mt-[100px]'><span>&#169;</span>Latest Tools. 2023</p>
     </div>

     <div className='w-[500px] mt-5 sm:mt-0 sm:ml-[200px] sm:w-[60%]'>
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

     <div className='w-[500px] sm:w-[20%] ml-2 sm:ml-0 flex flex-col gap-4 mt-[50px] sm:mt-[30px]'>
        <p className='sm:text-2xl ml-[140px] text-4xl font-semibold sm:-ml-[40px] whitespace-nowrap'>Follow Us</p>
        <div className='flex sm:flex-col gap-x-5 ml-[130px] sm:ml-0 sm:gap-y-6 mt-5 sm:mt-0'>
        <a href="/">
     <FaFacebook className='sm:text-3xl text-5xl text-blue-600' />
     </a>

     <a href="/">
     <FaInstagram className='sm:text-3xl text-5xl text-red-600' />
     </a>

     <a href="/">
     <FaTwitter className='sm:text-3xl text-5xl text-[#1DA1F2]' />
     </a>
     </div>
     <p className='sm:ml-3 ml-[140px] mt-2 block sm:hidden sm:mt-[100px]'><span>&#169;</span>Latest Tools. 2023</p>

     </div>
    </footer>
  )
}

export default Footer