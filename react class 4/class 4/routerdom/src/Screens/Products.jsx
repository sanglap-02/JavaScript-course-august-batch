import React from 'react'

function Products() {
  return (
    <div className='mb-4 h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-lg shadow-lg'>

      <div className='mt-8 w-full grid grid-cols-1 md:grid-cols-3 gap-6'>
        <div className='bg-white p-4 rounded-lg shadow-md'>
          <h2 className='text-xl font-semibold text-blue-500 mb-2'>Products 1</h2>
          <p className='text-gray-700'>Detailed information about Products 1 goes here.</p>
        </div>

        <div className='bg-white p-4 rounded-lg shadow-md'>
          <h2 className='text-xl font-semibold text-blue-500 mb-2'>Products 2</h2>
          <p className='text-gray-700'>Detailed information about Products 2 goes here.</p>
        </div>

        <div className='bg-white p-4 rounded-lg shadow-md'>
          <h2 className='text-xl font-semibold text-blue-500 mb-2'>Products 3</h2>
          <p className='text-gray-700'>Detailed information about Products 3 goes here.</p>
        </div>
        <div className='bg-white p-4 rounded-lg shadow-md'>
          <h2 className='text-xl font-semibold text-blue-500 mb-2'>Products 3</h2>
          <p className='text-gray-700'>Detailed information about Products 3 goes here.</p>
        </div>
        <div className='bg-white p-4 rounded-lg shadow-md'>
          <h2 className='text-xl font-semibold text-blue-500 mb-2'>Products 3</h2>
          <p className='text-gray-700'>Detailed information about Products 3 goes here.</p>
        </div>
        <div className='bg-white p-4 rounded-lg shadow-md'>
          <h2 className='text-xl font-semibold text-blue-500 mb-2'>Products 3</h2>
          <p className='text-gray-700'>Detailed information about Products 3 goes here.</p>
        </div>
      </div>
    </div>
  )
}

export default Products