import React from 'react';

function Home() {
  return (
    <div className='mb-4 h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-lg shadow-lg'>
      <h1 className='text-4xl font-bold text-white mb-4'>Home</h1>
      <p className='text-white text-lg mb-6'>Welcome to the Home page! Explore our content and discover more.</p>

      <button className='bg-white text-blue-500 font-semibold py-2 px-4 rounded-full hover:bg-blue-500 hover:text-white transition duration-300'>
        Get Started
      </button>

      <div className='mt-8 w-full grid grid-cols-1 md:grid-cols-3 gap-6'>
        <div className='bg-white p-4 rounded-lg shadow-md'>
          <h2 className='text-xl font-semibold text-blue-500 mb-2'>Feature 1</h2>
          <p className='text-gray-700'>Detailed information about Feature 1 goes here.</p>
        </div>

        <div className='bg-white p-4 rounded-lg shadow-md'>
          <h2 className='text-xl font-semibold text-blue-500 mb-2'>Feature 2</h2>
          <p className='text-gray-700'>Detailed information about Feature 2 goes here.</p>
        </div>

        <div className='bg-white p-4 rounded-lg shadow-md'>
          <h2 className='text-xl font-semibold text-blue-500 mb-2'>Feature 3</h2>
          <p className='text-gray-700'>Detailed information about Feature 3 goes here.</p>
        </div>
        <div className='bg-white p-4 rounded-lg shadow-md'>
          <h2 className='text-xl font-semibold text-blue-500 mb-2'>Feature 3</h2>
          <p className='text-gray-700'>Detailed information about Feature 3 goes here.</p>
        </div>
        <div className='bg-white p-4 rounded-lg shadow-md'>
          <h2 className='text-xl font-semibold text-blue-500 mb-2'>Feature 3</h2>
          <p className='text-gray-700'>Detailed information about Feature 3 goes here.</p>
        </div>
        <div className='bg-white p-4 rounded-lg shadow-md'>
          <h2 className='text-xl font-semibold text-blue-500 mb-2'>Feature 3</h2>
          <p className='text-gray-700'>Detailed information about Feature 3 goes here.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
