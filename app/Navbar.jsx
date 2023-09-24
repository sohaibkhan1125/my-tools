import React from 'react';
import Link from 'next/link';


const Navbar = () => {
  return (
    <header className="border-[2px] max-w-[2000px] w-[500px] sm:w-full  h-[70px] flex">
<div className="sm:w-[15%] w-full">
  <h2 className="text-2xl font-semibold ml-[180px] sm:ml-5 mt-4 whitespace-nowrap">Latest Tools</h2>
</div>

<div className="w-[60%] hidden md:block">
  <ul className="sm:ml-[470px] sm:w-full mt-4 gap-5 flex font-semibold text-gray-600 whitespace-nowrap">
    <li>
    <Link href="/">Home</Link>
    </li>
   <li>
   <Link href="/about">About</Link>
   </li>

   <li>
   <Link href="/terms-and-conditions">Terms and Conditions</Link>
   </li>

   <li>
   <Link href="/privacy-policy">Privacy Policy</Link>
   </li>
   
  </ul>
</div>



</header>
  )
}

export default Navbar;