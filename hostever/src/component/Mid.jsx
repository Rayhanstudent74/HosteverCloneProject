import React from 'react';

const Mid = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 justify-center'>
      {Array(1).fill().map((_, index) => (
        <div key={index} className='bg-white text-gray-900 p-6 rounded-lg shadow-md flex flex-col h-full'>
          <h1 className='text-lg font-bold mb-2'>High Performance</h1>
          <p className='text-gray-700 flex-grow'>
            We provide high-performance & scalable web servers. We use enterprise-grade hardware to give your site an extra speed boost! All of our servers come with SSD RAID-10.
          </p>
        </div>
      ))}
      {Array(1).fill().map((_, index) => (
        <div key={index + 4} className='bg-white text-gray-900 p-6 rounded-lg shadow-md flex flex-col h-full'>
          <h1 className='text-lg font-bold mb-2'>Enhance Security</h1>
          <p className='text-gray-700 flex-grow'>
          Website security is important, Ensuring that your website is secure should be a priority. Protection against all known attacks up to 30 Gbps, our network protects from over 95% of the most common DDoS attacks.
          </p>
        </div>
      ))}

{Array(1).fill().map((_, index) => (
        <div key={index} className='bg-white text-gray-900 p-6 rounded-lg shadow-md flex flex-col h-full'>
          <h1 className='text-lg font-bold mb-2'>Spam Guard</h1>
          <p className='text-gray-700 flex-grow'>
          SpamGuard is Web-based Email filtering service which provides the highest level of security, stability and complete protection for your website with anti-DDos System.
          </p>
        </div>
      ))}

{Array(1).fill().map((_, index) => (
        <div key={index} className='bg-white text-gray-900 p-6 rounded-lg shadow-md flex flex-col h-full'>
          <h1 className='text-lg font-bold mb-2'>Unbeatable Support</h1>
          <p className='text-gray-700 flex-grow'>
          Unbeatable Uptime With Unbeatable Support, Our customer support is 24x7x365. With your hosting package, you also gain 24x7 accesses to our expert support team.
          </p>
        </div>
      ))}
    </div>
  );
};

export default Mid;