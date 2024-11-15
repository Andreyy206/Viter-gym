import useQueryData from "@/components/custom-hook/useQueryData";
import { imgPath } from "@/components/helpers/functions-general";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
const Apparels = () => {
  // const getAllApparels = result?.data.length > 0 && result?.data.filter((item) => items.items_apparels === "Apparels")

  const {
    isLoading,
    isFetching,
    error,
    data: result,
  } = useQueryData(
    `/v1/apparels`, // endpoint
    "get", // method
    "apparels"
  );

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
      <h1 className='font-bold uppercase pb-6 px-5'>Apparels</h1>

      <Slider {...settings}>
        {!isLoading &&
          result?.data.map((item, key) => {
            return (
              <div
                key={key}
                className='flex px-4 relative group overflow-hidden '
              >
                <img
                  src={`${imgPath}/${item.apparels_photo}`}
                  alt=''
                  className='w-full h-[450px] object-cover'
                />
                <div className='bg-dark p-8'>
                  <h2 className='text-white '>{item.apparels_title}</h2>
                  <p className='text-white '>{item.apparels_details}</p>
                  <div className='grid grid-cols-[1fr,_100px] text-white mx-auto items-center'>
                    <h2 className='text-white'>{item.apparels_price}</h2>
                    <button className='btn btn-accent '> Add to Cart</button>
                  </div>
                  <div className='absolute bg-black bg-opacity-70 flex flex-col text-center justify-center top-full group-hover:top-0 w-[calc(100%-2rem)] h-[450px] z-40 left-4 '>
                    <h2 className='text-center text-accent'>Description</h2>
                    <p className='flex justify-center text-center mb-5 text-white opacity-70'>
                      {item.apparels_description}
                    </p>
                    <h3 className='text-accent'>Size</h3>
                    <p className='mb-4 text-white opacity-70'>
                      {item.apparels_size}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
      </Slider>
    </section>
  );
};

export default Apparels;
