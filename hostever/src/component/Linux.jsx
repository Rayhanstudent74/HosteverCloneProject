import React from 'react';
import panguinpic from '../assets/Images/panguinpic.png';

const Linux = () => {
  return (
    <div className="mt-4 flex justify-center items-center flex-col px-4">
      <img src={panguinpic} alt="Centered Image" className="w-30 h-14" />
      <h1 className='text-3xl font-bold text-center'>Linux SSD/NVMe Shared Web Hosting</h1>
      <p className='text-sm font-bold mt-4 text-center'>CPANEL | DIRECT ADMIN | BDIX | FREE DOMAIN | SOFTACULOUS | FREE 3 LAYER UPTO 7days BACKUPS | 99.9999% UPTIME GUARANTEE | FRIENDLY 24/7 SUPPORT ! DIRECT PHONE CALL SUPPORT</p>

      <div className="p-8 w-full">
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[ 
            { title: "Budget Linux Plans 🔥", price: "$1.88 Monthly", yearly: "1800/- Yearly", monthly: "180 Tk Monthly", features: [
              "5GB to 50GB SSD Disk Space", "Up to 1000GB/m Bandwidth", "Best for beginners & demo sites", "LiteSpeed + LS Cache + HTTP2", "WordPress Optimized", "No Shell(SSH) Access", "Lifetime Free SSL", "1st/7 FREE DOMAIN on Yearly Order"] },
            { title: "🚀Advance Linux Plans🔥", price: "$3.19 Monthly", yearly: "2800/- Yearly", monthly: "280 Tk Monthly", features: [
              "2GB to 50GB SSD Disk Space", "Unmetered/m Bandwidth", "Best for Affiliate, AdSense, Corporate", "Support for NodeJS, Python, Ruby", "More resource, more power", "98.9999% Uptime Guarantee", "LiteSpeed + LS Cache + HTTP2", "WordPress Optimized", "Shell(SSH) Access", "3 Layer Daily Secure Data Backup", "Lifetime Free SSL", "1st/7 FREE DOMAIN on Yearly Order"] },
            { title: "Budget BDIX Plans🔥", price: "$3.19 Monthly", yearly: "1800/- Yearly", monthly: "180 Tk Monthly", features: [
              "5GB to 50GB SSD Disk Space", "Up to 1000GB/m Bandwidth", "Best for Bangladeshi Storage", "LiteSpeed + LS Cache + HTTP2", "WordPress Optimized", "No Shell(SSH) Access", "Lifetime Free SSL", "1st/7 FREE DOMAIN on Yearly Order"] },
            { title: "🚀Advance BDIX Plans🔥", price: "$3.19 Monthly", yearly: "2800/- Yearly", monthly: "280 Tk Monthly", features: [
              "2GB to 50GB SSD Disk Space", "Unmetered/m Bandwidth", "Best for News, eCommerce, Blog", "99.999% Uptime Guarantee", "LiteSpeed + LS Cache + HTTP2", "WordPress Optimized", "Shell(SSH) Access", "3 Layer Daily Secure Data Backup", "Lifetime Free SSL", "1st/7 FREE DOMAIN on Yearly Order"] }
          ].map((plan, index) => (
            <div key={index} className="bg-cyan-100 shadow-lg rounded-lg p-4 hover:bg-cyan-200 transform transition duration-300 hover:scale-105">
              <h2 className="text-xl font-bold mb-4">{plan.title}</h2>
              <p className="text-gray-700 mb-2"><span className='text-green-700 font-bold'>{plan.yearly}</span></p>
              <p className="text-gray-700 mb-4">{plan.monthly}</p>
              <ul className="list-disc list-inside mb-4 text-sm text-justify">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-gray-700">{feature}</li>
                ))}
              </ul>
              <p className="text-2xl font-bold mb-4">{plan.price}</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">View Plans & Purchase Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Linux;