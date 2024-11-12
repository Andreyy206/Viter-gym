import { Facebook, Instagram, Mail, Twitter, Youtube } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className='py-10 bg-accent text-white '>
        <div className='container'>
          <div className='flex flex-col lg:flex-row space-y-4 lg:space-y-0 justify-between items-center'>
            <ul className='flex gap-5'>
              <li>
                <Link>
                  <Facebook />
                </Link>
              </li>
              <li>
                <Link>
                  <Twitter />
                </Link>
              </li>
              <li>
                <Link>
                  <Instagram />
                </Link>
              </li>
              <li>
                <Link>
                  <Mail />
                </Link>
              </li>
            </ul>
            <p className='mb-0 text-center text-white'>
              Baloc Road, Brgy. San Ignacio San Pablo City, Laguna 4000
            </p>
            <p className='mb-0 text-center text-white'>Extreme Fitness Equipments </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
