import { DevicePhoneMobileIcon, EnvelopeIcon, MapIcon } from '@heroicons/react/20/solid';
import React from 'react';

const Footer = () => {
  return (
    <div className='pt-[8rem] pb-[4rem] bg-[#02050a]'>
      <div className='grid border-b-[1px] pb-[6rem] border-gray-400 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] md:w-[80%] mx-auto gap-[3rem]'>
        {/* Address Section */}
        <div className='flex flex-col items-center md:items-start space-y-2 md:space-y-0 md:space-x-4 md:flex-row'>
          <div className='w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]'>
            <MapIcon className='w-[3.5rem] h-[3.5rem] text-black' />
          </div>
          <div className='text-center md:text-left'>
            <h1 className='text-[20px] mb-[0.2rem] font-semibold text-white'>
              Address
            </h1>
            <p className='text-[16px] w-[100%] text-white opacity-60'>
              Madura, East Java
            </p>
          </div>
        </div>

        {/* Phone Section */}
        <div className='flex flex-col items-center md:items-start space-y-2 md:space-y-0 md:space-x-4 md:flex-row'>
          <div className='w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]'>
            <DevicePhoneMobileIcon className='w-[3.5rem] h-[3.5rem] text-black' />
          </div>
          <div className='text-center md:text-left'>
            <h1 className='text-[20px] mb-[0.2rem] font-semibold text-white'>
              Phone
            </h1>
            <p className='text-[16px] w-[100%] text-white opacity-60'>
              +6285785745163 <br />
              +6287776750684
            </p>
          </div>
        </div>

        {/* Email Section */}
        <div className='flex flex-col items-center md:items-start space-y-2 md:space-y-0 md:space-x-4 md:flex-row'>
          <div className='w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]'>
            <EnvelopeIcon className='w-[3.5rem] h-[3.5rem] text-black' />
          </div>
          <div className='text-center md:text-left'>
            <h1 className='text-[20px] mb-[0.2rem] font-semibold text-white'>
              Send Us Email
            </h1>
            <p className='text-[16px] w-[100%] text-white opacity-60'>
              alvarooieyar@gmail.com <br />
              213200209@almaata.ac.id
            </p>
          </div>
        </div>
      </div>
      <div className='w-[80%] mt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-center md:justify-between'>
  <div className='text-[18px] mb-[2rem] md:mb-0 text-white opacity-20 text-center md:text-left'>
    Webdev warriors 2023 | All Reserved
  </div>
  <div className='flex items-center justify-center md:justify-end space-x-10'>
    <p className='text-[18px] text-white opacity-20'>Terms & Condition</p>
    <p className='text-[18px] text-white opacity-20'>Privacy Policy</p>
    <p className='text-[18px] text-white opacity-20'>Sitemap</p>
  </div>
</div>
    </div>
  );
};

export default Footer;
