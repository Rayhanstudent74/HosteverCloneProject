import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = (key) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown')) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className='bg-indigo-700 text-white p-3 fixed top-0 left-0 w-full z-50'>
      <div className='container mx-auto flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>Hostever</h1>
        <p className='text-sm'>support@hostever.com +8801844909023, +8801841434323 (10AM to 9PM)</p>
        <button onClick={toggleMenu} className='md:hidden text-white text-2xl'>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <nav className={`${menuOpen ? 'block' : 'hidden'} md:flex md:justify-center md:items-center md:gap-6 mt-4 md:mt-0`}>
        <ul className='flex flex-col md:flex-row md:space-x-6 text-center'>
          {[
            { name: 'Domain Options', key: 'domain', options: ['Register a Domain', 'Transfer a Domain', 'Domain Pricing List', 'Domain Reseller', 'Dot .BD Domain', 'Whois Lookup'] },
            { name: 'Hosting Options', key: 'hosting', options: ['USA Advance Shared Hosting', 'BDIX Advance Shared Hosting', 'Singapore Advance Shared Hosting', 'Budget USA Linux Shared Hosting', 'Budget BDIX Linux Hosting Pack', 'WordPress Hosting'] },
            { name: 'Server Options', key: 'servers', options: ['Managed Virtual Server', 'Unmanaged Linux VPS', 'BDIX MANAGED VPS', 'Windows Cloud VPS', 'Dedicated Servers', 'BDIX Dedicated Server'] },
            { name: 'Service Options', key: 'services', options: ['Corporate Web Hosting', 'SSL Certificate', 'Business Email', 'Enterprise Email', 'Web Development'] },
            { name: 'Help Options', key: 'help', options: ['Support Ticket', 'Self Support & Knowledgebase', 'Email History', 'How to Pay'] },
            { name: 'Offer Options', key: 'offers', options: ['Special Offers', 'Discounts'] },
          ].map((menu) => (
            <li key={menu.key} className='relative dropdown'>
              <button onClick={() => toggleDropdown(menu.key)} className='hover:bg-indigo-600 px-4 py-2 rounded transition-colors duration-300'>
                {menu.name}
              </button>
              {activeDropdown === menu.key && (
                <ul className='absolute left-0 bg-white text-gray-900 shadow-lg rounded-md mt-2 p-2 w-48 z-50'>
                  {menu.options.map((option, index) => (
                    <li key={index} className='px-4 py-2 text-sm hover:text-violet-600 transition-colors duration-300'>
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li>
            <button className='hover:text-violet-600 px-4 py-2 transition-colors duration-300'>Blog</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
