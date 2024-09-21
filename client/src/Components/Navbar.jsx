import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

function Navbar() {
  const [sidenav, setsidenav] = useState(false);

  return (
    <>
      <div className="flex justify-between h-[4rem] items-center bg-slate-500 p-[1rem] relative">
        <div className="w-[4.5rem]">
          <h1>
            <Link to="/">
              <img src="./images/raven.png" alt="" />
            </Link>
          </h1>
        </div>

        <div>
          <ul className="sm:flex hidden gap-[3rem] font-semibold ">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/our-services">
              <li>Service</li>
            </Link>
            <Link to="/admissionForm">
              <li>Admission</li>
            </Link>
          </ul>
        </div>
        <button className="border border-black px-5 py-2 bg-black text-white rounded-md font-bold hover:bg-slate-900 hover:scale-110 duration-700 ease-in-out shadow-md">
          <Link to="/login">Login</Link>
        </button>

        {sidenav ? (
          <div className="bg-slate-300 w-[15rem] top-0 right-0 h-[100vh] z-10 flex justify-center fixed transition-transform duration-300 ease-in-out transform translate-x-0">
            <div className="absolute top-[18px] right-[14px]">
              <RxCross2 fontSize={25} onClick={() => setsidenav(!sidenav)} />
            </div>
            <ul className="flex gap-[3rem] font-semibold flex-col absolute top-[4rem]">
              <Link to="/">
                <li onClick={() => setsidenav(!sidenav)}>Home</li>
              </Link>
              <Link to="/our-services">
                <li onClick={() => setsidenav(!sidenav)}>Service</li>
              </Link>
              <Link to="/admissionForm">
                <li onClick={() => setsidenav(!sidenav)}>Admission</li>
              </Link>
              <Link to="/about-us">
                <li onClick={() => setsidenav(!sidenav)}>AboutUs</li>
              </Link>
            </ul>
          </div>
        ) : (
          ""
        )}

        <div className="sm:hidden block">
          <GiHamburgerMenu fontSize={20} onClick={() => setsidenav(!sidenav)} />
        </div>
      </div>
    </>
  );
}

export default Navbar;
