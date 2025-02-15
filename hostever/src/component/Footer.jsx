import React from 'react'
import BKashLogo from '../assets/Images/BKashLogo.png' 
import visacard from '../assets/Images/visacard.png'
const Footer = () => {
  return (
    <div className='bg-gray-800 text-white p-10'>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
        <div>
          <h3 className='text-2xl font-bold'>Contact Us</h3>
          <p>Feel free to contact with us</p>
          <p>Telephone: +8801841434323, +8801844909030</p>
          <p>Call Time: 10AM - 9PM UTC+6 Dhaka</p>
          <p>E-mail: support@hostever.com</p>
          <p>Address: 8th Floor, KA-181/3, Baitul View Holding, Bottola, Khilkhet, Dhaka-1229</p>
        </div>
        <div>
          <h3 className='text-2xl font-bold'>OUR COMPANY</h3>
          <ul>
            <li>About Us</li>
            <li>Datacenter</li>
            <li>Frequently Asked Questions</li>
            <li>Privacy Policy & ToS</li>
            <li>Contact</li>
            <li>Bulk SMS/Email Solutions</li>
            <li>Domain Whois Lookup</li>
          </ul>
        </div>
        <div>
          <h3 className='text-2xl font-bold'>MEMBER AREA</h3>
          <ul>
            <li>Customer Signup</li>
            <li>Customer Login</li>
            <li>Knowledgebase</li>
            <li>Server Status</li>
            <li>Submit Support Ticket</li>
            <li>News & Updates</li>
            <li>Our Official Blog</li>
          </ul>
        </div>
        <div>
          <h3 className='text-2xl font-bold'>Payment</h3>
          <ul className='flex gap-4'>
            <li ><img src={BKashLogo} alt="" className=' mt-5 bg-slate-100 w-30 h-14'/></li>
            <li><img src={visacard} alt="" className=' mt-5 bg-slate-100 w-30 h-14' /></li>
          </ul>
        </div>
      </div>
      <p className=' text-yellow-600 mt-3 text-sm text-center'>Copyright © 2025 Code for Host Inc. All Rights Reserved.</p>
    </div>
  )
}

export default Footer