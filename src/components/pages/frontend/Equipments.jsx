import useQueryData from "@/components/custom-hook/useQueryData";
import { imgPath } from "@/components/helpers/functions-general";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
const Equipments = () => {

  // const getAllEquipments = result?.data.length > 0 && result?.data.filter((item) => items.items_equipments === "Equipments")

    const {
      isLoading,
      isFetching,
      error,
      data: result,
    } = useQueryData(
      `/v1/equipments`, // endpoint
      "get", // method
      "equipments"
    );

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
        {!isLoading && 
          result?.data.map((item, key) => {
            return (
              <div
                key={key}
                className='flex px-4 relative group overflow-hidden '
              >
                <img
                  src={`${imgPath}/${item.equipments_photo}`}
                  alt=''
                  className='w-full h-[450px] object-cover'
                />
                <div className='bg-dark p-8'>
                  <h2 className='text-white '>{item.equipments_title}</h2>
                  <p className='text-white '>{item.equipments_details}</p>
                  <div className='grid grid-cols-[1fr,_100px] text-white mx-auto items-center'>
                    <h2 className='text-white'>{item.equipments_price}</h2>
                    <button className='btn btn-accent '> Add to Cart</button>
                  </div>
                  <div className='absolute bg-black bg-opacity-70 flex flex-col text-center justify-center top-full group-hover:top-0 w-[calc(100%-2rem)] h-[450px] z-40 left-4 '>
                    <h2 className='text-center text-accent'>Description</h2>
                    <p className='flex justify-center text-center mb-5 text-white opacity-70'>
                      {item.equipments_description}
                    </p>
                    <h3 className='text-accent'>Size</h3>
                    <p className='mb-4 text-white opacity-70'>
                      {item.equipments_size}
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

export default Equipments;
