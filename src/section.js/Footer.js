import React, { useState } from "react";

const Footer = () => {
  const [style, setStyle] = useState(false);
  const [mouseEnter, setMouseEnter] = useState(false);

  const handleClick = () => {
    setStyle(true);
    // setStyle('')
  };
  const handleLeave = () => {
    setStyle(false);
  };

  const handleMouseEnter = () => {
    setMouseEnter(true);
  };

  const handleMouseLeave = () => {
    setMouseEnter(false);
  };

  return (
    <div className="bg-black  text-slate-50 ">
      <div className=" md:flex flex-wrap py-28 ">
        <div className="  mt-12 px-[10%] lg:px-0 lg:ps-[5%]">
          <a href="/">
            <p className="py-4 text-6xl font-Montserrat">Deon</p>
          </a>
          <a href="/">
            <p className="py-1 text-[1.1rem] font-Montserrat">A: Seestrasse 21</p>
          </a>
          <a href="/">
            <p className="py-1 text-[1.1rem] font-Montserrat">
              T: 00 1 23 45 67 89
            </p>
          </a>
          <a href="/">
            <p className="py-1 text-[1.1rem] font-Montserrat">E: qi@example.com</p>
          </a>
          <a href="/">
            <p className="py-1 text-[1.1rem] font-Montserrat">T: 99 8 76 54 321</p>
          </a>
        </div>

        <div className=" mt-[141px] text-[1.1rem] px-[10%] lg:px-0 lg:ps-[5%]">
          <a href="/">
            <p className="py-1 text-[1.1rem] font-Montserrat">MAIN HOME</p>
          </a>
          <a href="/">
            <p className="py-1 text-[1.1rem] font-Montserrat">CONTACT</p>
          </a>
          <a href="/">
            <p className="py-1 text-[1.1rem] font-Montserrat">PORTFOLIO</p>
          </a>
          <a href="/">
            <p className="py-1 text-[1.1rem] font-Montserrat">SHOP</p>
          </a>
          <a href="/">
            <p className="py-1 text-[1.1rem] font-Montserrat">LANDING</p>
          </a>
        </div>

        <div className=" mt-[141px] px-[10%] lg:px-0 lg:ps-[5%]">
          <a href="/">
            <p className="py-1 text-[1.1rem] font-Montserrat">ABOUT ME</p>
          </a>
          <a href="/">
            <p className="py-1 text-[1.1rem] font-Montserrat">ABOUT US</p>
          </a>
          <a href="/">
            <p className="py-1 text-[1.1rem] font-Montserrat">OUR TEAM</p>
          </a>
          <a href="/">
            <p className="py-1 text-[1.1rem] font-Montserrat">OUR PROCESS</p>
          </a>
          <a href="/">
            <p className="py-1 text-[1.1rem] font-Montserrat">OUR PRICING</p>
          </a>
        </div>

        <div className=" py-28 flex-grow px-[10%] lg:px-[5%]">
          <a href="/">
            <p className="text-3xl">Our Newsletter</p>
          </a>
          <input
            className={`bg-transparent w-full border-b pb-4 outline-none pt-10 block font-Montserrat text-[1.1rem] font-[500] ${
              style ? "text-slate-50" : "opacity-65 text-slate-400"
            }`}
            onClick={handleClick}
            onBlur={handleLeave}
            type="text"
            placeholder="Your email"
          />
          <div
            className="flex items-center mt-6"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* <hr className="border-none border-b-slate-50 py-3 mt-1"/> */}
            <div
              className={`bg-white h-[0.1px] mt-[1.7px] hr-rule w-20 ${
                mouseEnter ? "hovered" : ""
              }`}
            ></div>
            <p className="">Subscribe</p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-1 lg:gap-2 px-[10%] lg:px-0 lg:ps-[5%] text-[1.1rem] font-Montserrat font-light text-slate-500 pb-10">
        <p>&copy; {new Date().getFullYear()}</p>
        <p className="hover:text-slate-50">Qode Interactive, </p>
        <p> All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
