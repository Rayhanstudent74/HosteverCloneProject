import React from 'react';

const Dashboard = () => {
  return (
    <div className='bg-violet-700 mt-0 p-6 md:p-9 text-fuchsia-100 font-bold text-center rounded-lg mt-16'>
      <h2 className='text-2xl md:text-4xl'>Professional & Reliable Web Hosting</h2>
      <h1 className='text-5xl md:text-8xl'>DOMAIN REGISTRATION</h1>
      <p className='text-sm md:text-base'>Search here to find your dream domain now</p>
      
      <div className='flex flex-col md:flex-row justify-center mt-4 space-y-3 md:space-y-0 md:space-x-2'>
        <input 
          type="text" 
          placeholder='Enter your domain name' 
          className='border-2 border-gray-300 w-full md:w-96 h-12 p-4 text-slate-950 rounded-lg md:rounded-l-lg' 
        />
        <button className='bg-violet-800 text-white h-12 px-6 rounded-lg md:rounded-r-lg hover:bg-indigo-700'>Search now</button>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8'>
        {[{name: '.com', price: '$12.70/1stY'}, {name: '.net', price: '$17.50/Y'}, {name: '.info', price: '$5.00/1stY'}, {name: '.xyz', price: '$3.80/1stY'}, {name: '.org', price: '$13.50/Y'}, {name: '.com.bd', price: '$18.75/Y'}]
          .map((domain, index) => (
            <div key={index} className='bg-white text-gray-900 p-4 rounded-lg shadow-md flex flex-col items-center transform transition duration-300 hover:scale-105'>
              <button>
                <h1 className='text-lg md:text-xl font-bold'>{domain.name}</h1>
                <p className='text-sm'>Starting From</p>
                <h3 className='text-md font-semibold'>{domain.price}</h3>
              </button>
            </div>
          ))}
      </div>
      
      <div className='mt-6'>
        <button className='bg-indigo-600 text-white h-12 px-6 rounded-lg hover:bg-indigo-700 transform transition duration-300 hover:scale-105 '>Click Here for domain listing and pricing</button>
      </div>
    </div>
  );
}

export default Dashboard;
