import React from "react";
import Button from "../components/Button";
import bgimage from '../assets/images/tech-design-image/Home-11-parallax-img.jpg'

const TechDesign = () => {
  return (
    <div className="techDesignStyle" style={{backgroundImage :  `url(${bgimage})`}}>
      <div className=" font-Montserrat font-semibold px-[10%] lg:ps-32 text-white py-64">
        <p className="text-xs lg:text-sm py-3">MODERN</p>
        <p className="text-2xl lg:text-[3.2rem] lg:py-3 py2">TECH</p>
        <p className="text-2xl lg:text-[3.2rem] lg:py-3 py-2">& SOFTWARE </p>
        <p className="text-2xl lg:text-[3.2rem] lg:py-3 py-2">DESIGN</p>
        <Button />
      </div>
    </div>
  );
};
  
export default TechDesign;
