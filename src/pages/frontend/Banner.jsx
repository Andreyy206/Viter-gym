import { ShoppingCart } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <>
      <section className="bg-[url('./public/img/banner.jpg')] bg-cover bg-no-repeat bg-[left_top_-400px] min-h-screen relative ">
        <div className='container'>
          <div className='bg-primary py-5 w-[1800px] '>
            <div className='container max-w-[1300px] w-full mx-auto px-4 '>
              <div className='flex justify-between items-center'>
                <img
                  src='./public/img/Logo-gym.png'
                  alt=''
                  className='w-[90px]'
                />
                <ul className='flex gap-11 items-center font-bold '>
                  <li>
                    <Link to='/'>Treadmills</Link>
                  </li>
                  <li>
                    <Link to='/'>Exercise Bikes</Link>
                  </li>
                  <li>
                    <Link to='/'>Rowers</Link>
                  </li>
                  <li>
                    <Link to='/'>Accessories</Link>
                  </li>
                </ul>
                <button className='font-bold'>
                  <ShoppingCart />
                </button>
              </div>
            </div>
          </div>

          <div className='absolute top-[14vw] left-1/2 -translate-x-1/2 text-center uppercase text-start'>
            <h1 className='text-white mb-1 text-[clamp(50px,_6vw,_180px)]  bg-black bg-opacity-75 group-hover:top-0  '>
              Extreme Fitness Equipments
            </h1>

            <div className='flex pt-9 '>
              <button className='btn btn-accent min-w-[100px] text-[17px] flex justify-center px-8 '>
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner
