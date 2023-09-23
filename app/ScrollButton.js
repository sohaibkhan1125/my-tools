import Link from 'next/link'
import React from 'react'

const ScrollButton = () => {
  return (
    <div>
      <Link href="/contact">
      <button
      className='text-white bg-indigo-600 hover:bg-indigo-900 mt-10 px-[70px] sm:px-8 py-4 sm:py-2 rounded-lg font-semibold '
      
    >
      Contact
    </button>
    </Link>
    </div>
  )
}

export default ScrollButton