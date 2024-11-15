import {
  Dumbbell,
  LayoutDashboard,
  Shirt
} from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = ({ menu= "" }) => {
  return (
    <div className='p-4 '>
      <div className='mb-5 flex gap-2 items-center'>
        <img src= {`http://localhost/viter-gym/public/img/Logo-gym.png`} size={13} alt='' className='w-[30%] ' />
        <h4 className='uppercase mb-0'>EXTREME
           <br /> <span className='text-sm'>FITNESS </span>
            <span className='text-sm'>EQUIPMENTS </span>
        </h4>
      </div>

      <nav>
        <ul className='space-y-5'>
          <li>
            <Link
              to='/admin/dashboard'
              className={`${menu === "dashboard" ? "active" : ""} nav-link`}
            >
              {" "}
              <LayoutDashboard size={18} strokeWidth={1} /> Dashboard{" "}
            </Link>
          </li>

          <li>
            <Link
              to='/admin/gym'
              className={`${menu === "gym" ? "active" : ""} nav-link`}
            >
              {" "}
              <Dumbbell size={18} strokeWidth={1} /> Equipments{" "}
            </Link>
          </li>

          <li>
            <Link
              to='/admin/accesories'
              className={`${menu === "accesories" ? "active" : ""} nav-link`}
            >
              {" "}
              <Dumbbell size={18} strokeWidth={1} /> Accesories{" "}
            </Link>
          </li>

          <li>
            <Link
              to='/admin/apparels'
              className={`${menu === "apparels" ? "active" : ""} nav-link`}
            >
              {" "}
              <Shirt size={18} strokeWidth={1} /> Apparels{" "}
            </Link>
          </li>

        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
