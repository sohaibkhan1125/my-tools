'use client';
import { useState } from 'react';

export default function ScrollButton() {
  const handleGetStartedClick = () => {
    const targetSection = document.getElementById('targetSection');
    targetSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button
      className='text-white bg-indigo-600 hover:bg-indigo-900 mt-10 px-[70px] sm:px-4 py-4 sm:py-1 rounded-lg font-semibold '
      onClick={handleGetStartedClick}
    >
      Get Started
    </button>
  );
}
