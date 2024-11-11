import { Dot } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="bg-[url('./public/img/banner.jpg')] bg-cover bg-no-repeat bg-[left_top_-400px] min-h-screen relative ">
      <div className='container'>
        <div className='px-4 py-2 transition-all z-50'>
            <div className='flex justify-between items-center '>
          <div className=''>
            <Link to='/'>
              <img src=".public/img/" alt='' className='w-[80px]' />
            </Link>
          </div>
          </div>

        </div>

        <div className='absolute top-[14vw] left-1/2 -translate-x-1/2 text-center uppercase'>
          <h1 className='text-white mb-1 text-[clamp(50px,_6vw,_180px)]'>
            Extreme Fitness Equipments
          </h1>
          <p className='text-dark flex justify-center font-bold text-[clamp(18px,_6vw,_20px)]'>
            Shop Now
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home
