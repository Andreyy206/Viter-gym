// import { imgPath } from "@/components/helpers/functions-general";
import { ShoppingBag, ShoppingCart } from "lucide-react";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isDark, setIsDark] = React.useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );
  const [theme, setTheme] = React.useState(localStorage.getItem("theme"));

  const handleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.querySelector("html").classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.querySelector("html").classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  const [scrollPosition, setScrollPosition] = React.useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

 

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <header
        className={`px-4 py-2 transition-all z-50 ${
          scrollPosition > 100
            ? "fixed top-0 left-0 w-full bg-black bg-opacity-70"
            : ""
        }`}
      >
        <div className='flex justify-between items-center '>
          <div className=''>
            <Link to='/'>
              <img src={`http://localhost/viter-gym/public/img/Logo-gym.png`} alt='' className=' bg-white  rounded-b-full w-[80px]' />
            </Link>
          </div>

          <ul className='flex gap-10 items-center'>
            <li>
              <NavLink to='' className='text-base font-bold text-white'>
                Treadmills
              </NavLink>
            </li>
            <li>
              <NavLink
                to=''
                className='text-base font-bold text-white'
              >
                Exercise Bikes
              </NavLink>
            </li>
            <li>
              <NavLink to='' className='text-base font-bold text-white'>
                Rowers
              </NavLink>
            </li>
            <li>
              <NavLink to='' className='text-base font-bold text-white'>
                Accessories
              </NavLink>
            </li>
          </ul>

          

            <ShoppingCart stroke={"#fff"} />
         
        </div>
      </header>
    </>
  );
};

export default Header;
