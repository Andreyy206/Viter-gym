import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
const Products = () => {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className='overflow-x-hidden '>
      <h1 className='font-bold uppercase pb-6 px-5'>Equipments</h1>

      {/* <li className={`text-2xl font-bold ${currentTab === 0 ? "text-accent" : ""}`}><button onClick={() => setCurrentTab(0)}>Machines</button></li>
      <li className={`text-2xl font-bold ${currentTab === 1 ? "text-accent" : ""}`}><button onClick={() => setCurrentTab(1)}>Dumbells</button></li> */}

      <Slider {...settings}>
        <div className='flex px-4 '>
          <img
            src='./public/img/Products-1.png'
            alt=''
            className='w-full h-[450px] object-cover'
          />
          <div className='bg-dark p-8'>
            <h2 className='text-white'>Weights</h2>
            <p className='text-white'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et,
              repellat.
            </p>
            <div className='grid grid-cols-[1fr,_100px] text-white mx-auto items-center'>
              <h2 className='text-white'>Php 10,999</h2>
              <button className='btn btn-accent '>Add to Cart</button>
            </div>
          </div>
        </div>



        <div className='flex px-4'>
          <img
            src='./public/img/Products-2.png'
            alt=''
            className='w-full h-[450px] object-cover'
          />
          <div className='bg-dark p-8'>
            <h2 className='text-white'>Weights</h2>
            <p className='text-white'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et,
              repellat.
            </p>
            <div className='grid grid-cols-[1fr,_100px] text-white mx-auto items-center'>
              <h2 className='text-white'>Php 10,999</h2>
              <button className='btn btn-accent '>Add to Cart</button>
            </div>
          </div>
        </div>

        <div className='flex px-4'>
          <img
            src='./public/img/Products-3.png'
            alt=''
            className='w-full h-[450px] object-cover'
          />
          <div className='bg-dark p-8'>
            <h2 className='text-white '>Weights</h2>
            <p className='text-white '>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et,
              repellat.
            </p>
            <div className='grid grid-cols-[1fr,_100px] text-white mx-auto items-center'>
              <h2 className='text-white'>Php 10,999</h2>
              <button className='btn btn-accent '>Add to Cart</button>
            </div>
          </div>
        </div>

        <div className='flex px-4'>
          <img
            src='./public/img/Products-4.png'
            alt=''
            className='w-full h-[450px] object-cover'
          />
          <div className='bg-dark p-8'>
            <h2 className='text-white '>Weights</h2>
            <p className='text-white '>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et,
              repellat.
            </p>
            <div className='grid grid-cols-[1fr,_100px] text-white mx-auto items-center'>
              <h2 className='text-white'>Php 10,999</h2>
              <button className='btn btn-accent '>Add to Cart</button>
            </div>
          </div>
        </div>

        <div className='flex px-4'>
          <img
            src='./public/img/Products-5.png'
            alt=''
            className='w-full h-[450px] object-cover'
          />
          <div className='bg-dark p-8'>
            <h2 className='text-white '>Weights</h2>
            <p className='text-white '>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et,
              repellat.
            </p>
            <div className='grid grid-cols-[1fr,_100px] text-white mx-auto items-center'>
              <h2 className='text-white'>Php 10,999</h2>
              <button className='btn btn-accent '>Add to Cart</button>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default Products;
