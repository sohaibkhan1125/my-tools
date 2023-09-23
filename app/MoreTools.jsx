import React from 'react';
import Link from 'next/link';

const MoreTools = () => {
  return (
    <div>
        <Link href="/">
         <button className='text-white bg-indigo-500 hover:bg-indigo-700 rounded-lg px-6 py-2'>
            More Tools
         </button>
        </Link>
    </div>
  )
}

export default MoreTools