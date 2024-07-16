import React from "react";
import { rightIcon } from "../assets";

const FeedbackSection = () => {
  return (
    <div className="grid xl:grid-cols-2 text-slate-700 ">
      <div className="bg-gradient1 py-10 md:py-20 lg:py-40 xl:ps-32  md:flex px-[10%] ">

        <div className="">
          <h2 className="text-3xl xl:text-4xl font-medium md:font-semibold font-Montserrat py-5">
            JOIN OUR TEAM
          </h2>
          <p className=" font-Montserrat text-base lg:pe-10 xl:font-semibold">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudanti.</p>
        </div>
        <div className="border-[3px] inline-block px-5 py-5 md:px-6 md:flex rounded-full mt-5 md:my-5 lg:py-6 xl:px-8">
          <img
            src={rightIcon}
            // width={40}
            // height={40}
            className="w-10 xl:w-20"
            
          />
          
          
        </div>
      </div>



      <div className="bg-gradient2 py-10 md:py-20 lg:py-40 xl:ps-32  md:flex px-[10%] ">

        <div className="">
          <h2 className="text-3xl xl:text-4xl font-medium md:font-semibold font-Montserrat py-5">
          OUR NEWSLETTER
          </h2>
          <p className=" font-Montserrat text-base lg:pe-10 xl:font-semibold">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudanti.</p>
        </div>
        <div className="border-[3px] inline-block px-5 py-5 md:px-6 md:flex rounded-full mt-5 md:my-5 lg:py-6 xl:px-8">
          <img
            src={rightIcon}
            // width={40}
            // height={40}
            className="w-10 xl:w-20"
            
          />
          
          
        </div>
      </div>
    </div>
  );
};

export default FeedbackSection;
