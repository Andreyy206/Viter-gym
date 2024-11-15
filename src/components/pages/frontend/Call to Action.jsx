import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className='bg-dark text-black py-24'>
      <div className='max-w-[750px] w-full mx-auto text-center'>
        <h3 className='text-white '>ANY CONCERN WITH US?</h3>
        <p className='mb-10 text-white opacity-55'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit obcaecati sunt nesciunt aliquid vitae dolorem possimus enim, necessitatibus minus hic dignissimos voluptatibus earum natus commodi excepturi expedita? Sapiente, iusto! Dignissimos.
        </p>
        <button className='btn btn-accent mx-auto text-center '>
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
