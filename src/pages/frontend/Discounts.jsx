import { Dot } from 'lucide-react';
import React from 'react'

const Discounts = () => {
  return (
    <>
      <section>
        <div className='grid grid-cols-2 '>
          <div className='relative'>
            <img
              src={`http://localhost/viter-gym/public/img/discounts-1.png`}
              alt=''
              className='w-full object-cover h-[550px]'
            />
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center uppercase  bg-black bg-opacity-75 group-hover:top-0'>
              <h1 className='text-white mb-1 text-[clamp(50px,_6vw,_180px)] scale-50'>
                Free Shipping
              </h1>
              <p className='text-white flex justify-center font-bold text-[clamp(18px,_6vw,_20px)]'>
                On Orders over $1499
              </p>
            </div>
          </div>

          <div className='relative'>
            <img
              src={`http://localhost/viter-gym/public/img/discounts-2.png`}
              alt=''
              className='w-full object-cover h-[550px]'
            />

            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center uppercase  bg-black bg-opacity-75 group-hover:top-0'>
              <h1 className='text-white mb-1 text-[clamp(50px,_6vw,_180px)] scale-50'>
                Order Online
              </h1>
              <p className='text-white flex justify-center font-bold text-[clamp(18px,_6vw,_20px)]'>
                Hours: 8AM - 11PM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="bg-[url('./public/img/banner.jpg')] bg-cover bg-[left_top_-400px] min-h-screen relative ">
        <h1>Free Shipping</h1>
        <h2>On Orders over $1499</h2>
      </section> */}
    </>
  );
}

export default Discounts
