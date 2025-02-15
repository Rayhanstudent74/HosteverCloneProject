import React from 'react';
import winpic from '../assets/Images/winpic.png';

const Windows = () => {
  return (
    <div className="mt-4 flex justify-center items-center flex-col px-4">
      <img src={winpic} alt="Centered Image" className="w-30 h-14" />
      <h1 className='text-3xl font-bold text-center'>Windows SSD Shared Web Hosting</h1>
      <p className='text-sm font-bold mt-4 text-center'>PLASK | ASP.net (2.0 - Latest) | .net Core (2.0 - Latest) | | BDIX | FREE DOMAIN | | FREE UPTO 7d BACKUPS | 99.99% UPTIME GUARANTEE | FRIENDLY 24/7 SUPPORT ! DIRECT PHONE CALL SUPPORT</p>

      <div className="p-8 w-full">
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {[ 
            { title: "Win Basic 2GB🚀", price: "$39.99 Year", yearly: "BDT 3200/- Only(Y)",  features: [
              "2GB SSD Disk Space", "Bandwidth : 50GB", "Addon Domain : 2", "Server : Microsoft IIS 10", "Server Support : ASP.NET, MVC, .NET Core, PHP, MS SQL", "2014/16/17/19/22, MySQL Database(s), Visual Studio, Crystal Report,", "Subdomain(s), FTP Account : 10", "E-mail Account(s) : 25","Control Panel : Plesk","One Click Installer : Yes","Available call, livechat, email, ticket, Anydesk(remotely) support etc.","1 Layer Data Backup","DOMAIN 1st/y & SSL certificate : FREE"] },
            { title: "WinC Basic 5GB🔥", price: "$93.75 Year", yearly: "BDT 7500/- Only(Y)",  features: [
              "Disk Space : 5GB SSD", "Bandwidth : 125GB", "Addon Domain : 5", "Server : Microsoft IIS 10", "Server Support : ASP.NET, MVC, .NET Core, PHP, MS SQL", "2014/16/17/19/22, MySQL Database(s), Visual Studio, Crystal Report,", "Microsoft RDLC Reports, DNS Editor", "Subdomain(s), FTP Account : 15", "E-mail Account(s) : 35", "Control Panel : Plesk", "One Click Installer : Yes", "Available call, livechat, email, ticket, Anydesk(remotely) support etc.","1 Layer Data Backup","DOMAIN 1st/y & SSL certificate : FREE"] },
            { title: "WinC Basic 10GB🔥", price: "$187.50 Year", yearly: "BDT 15000/- Only(Y)",  features: [
              "Disk Space : 10GB SSD", "Bandwidth : 250GB", "Addon Domain : 8", "Server : Microsoft IIS 10", "Server Support : ASP.NET, MVC, .NET Core, PHP, MS SQL 2014/16/17/19/22, MySQL", "Database(s), Visual Studio, Crystal Report, Microsoft RDLC Reports, DNS Editor", "Subdomain(s), FTP Account : 100", "E-mail Account(s) : 50","Control Panel : Plesk","One Click Installer : Yes","Available call, livechat, email, ticket, Anydesk(remotely) support etc.","1 Layer Data Backup","DOMAIN 1st/y & SSL certificate : FREE"] },
            { title: "Win Basic 20GB🔥", price: "$300 Year", yearly: "BDT 24000/- Only(Y)", features: [
              "Disk Space : 20GB SSD", "Bandwidth : 500GB", "Addon Domain : 14", "Server : Microsoft IIS 10", "Server Support : ASP.NET, MVC, .NET Core, PHP, MS SQL 2014/16/17/19/22, MySQL", "Database(s), Visual Studio, Crystal Report, Microsoft RDLC Reports, DNS Editor", "Subdomain(s), FTP Account : 150", "E-mail Account(s) : 100", "Control Panel : Plesk", "One Click Installer : Yes","Available call, livechat, email, ticket, Anydesk(remotely) support etc.","1 Layer Data Backup","DOMAIN 1st/y & SSL certificate : FREE"] }
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

export default Windows;