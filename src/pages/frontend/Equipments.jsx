import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
const Equipments = () => {
  //  function SampleNextArrow(props) {
  //    const { onClick } = props;
  //    return (
  //      <button className='absolute -top-12 right-6' onClick={onClick}>
  //        <ChevronRight stroke={"#fff"} size={30} />
  //      </button>
  //    );
  //  }

  //  function SamplePrevArrow(props) {
  //    const { onClick } = props;
  //    return (
  //      <button className='absolute -top-12 right-14' onClick={onClick}>
  //        <ChevronLeft stroke={"#fff"} size={30} />
  //      </button>
  //    );
  //  }
  //  var settings = {
  //    dots: false,
  //    infinite: true,
  //    speed: 500,
  //    slidesToShow: 5,
  //    slidesToScroll: 1,
  //    nextArrow: <SampleNextArrow />,
  //    prevArrow: <SamplePrevArrow />,
  //  };

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

      <Slider {...settings}>

        <div className='flex px-4 relative group overflow-hidden '>
          <img
            src='./public/img/Products-1.png'
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
              <button className='btn btn-accent '> Add to Cart</button>
            </div>
            <div className='absolute bg-black bg-opacity-70 flex flex-col text-center justify-center top-full group-hover:top-0 w-[calc(100%-2rem)] h-[450px] z-40 left-4 '>
              <h2 className='text-center text-accent'>Details</h2>
              <p className='flex justify-center text-center mb-5 text-white opacity-70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae impedit natus eum eaque mollitia numquam.</p>
              <h3 className="text-accent">Size</h3>
              <p className='mb-4 text-white opacity-70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, minus.</p>
              </div>
          </div>
        </div>
        <div className='flex px-4 relative group overflow-hidden '>
          <img
            src='./public/img/Products-2.png'
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
              <button className='btn btn-accent '> Add to Cart</button>
            </div>
            <div className='absolute bg-black bg-opacity-70 flex flex-col text-center justify-center top-full group-hover:top-0 w-[calc(100%-2rem)] h-[450px] z-40 left-4 '>
              <h2 className='text-center text-accent'>Details</h2>
              <p className='flex justify-center text-center mb-5 text-white opacity-70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae impedit natus eum eaque mollitia numquam.</p>
              <h3 className="text-accent">Size</h3>
              <p className='mb-4 text-white opacity-70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, minus.</p>
              </div>
          </div>
        </div>
        <div className='flex px-4 relative group overflow-hidden '>
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
              <button className='btn btn-accent '> Add to Cart</button>
            </div>
            <div className='absolute bg-black bg-opacity-70 flex flex-col text-center justify-center top-full group-hover:top-0 w-[calc(100%-2rem)] h-[450px] z-40 left-4 '>
              <h2 className='text-center text-accent'>Details</h2>
              <p className='flex justify-center text-center mb-5 text-white opacity-70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae impedit natus eum eaque mollitia numquam.</p>
              <h3 className="text-accent">Size</h3>
              <p className='mb-4 text-white opacity-70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, minus.</p>
              </div>
          </div>
        </div>
        <div className='flex px-4 relative group overflow-hidden '>
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
              <button className='btn btn-accent '> Add to Cart</button>
            </div>
            <div className='absolute bg-black bg-opacity-70 flex flex-col text-center justify-center top-full group-hover:top-0 w-[calc(100%-2rem)] h-[450px] z-40 left-4 '>
              <h2 className='text-center text-accent'>Details</h2>
              <p className='flex justify-center text-center mb-5 text-white opacity-70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae impedit natus eum eaque mollitia numquam.</p>
              <h3 className="text-accent">Size</h3>
              <p className='mb-4 text-white opacity-70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, minus.</p>
              </div>
          </div>
        </div>
        <div className='flex px-4 relative group overflow-hidden '>
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
              <button className='btn btn-accent '> Add to Cart</button>
            </div>
            <div className='absolute bg-black bg-opacity-70 flex flex-col text-center justify-center top-full group-hover:top-0 w-[calc(100%-2rem)] h-[450px] z-40 left-4 '>
              <h2 className='text-center text-accent'>Details</h2>
              <p className='flex justify-center text-center mb-5 text-white opacity-70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae impedit natus eum eaque mollitia numquam.</p>
              <h3 className="text-accent">Size</h3>
              <p className='mb-4 text-white opacity-70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, minus.</p>
              </div>
          </div>
        </div>
        
      </Slider>
    </section>
  );
};

export default Equipments;