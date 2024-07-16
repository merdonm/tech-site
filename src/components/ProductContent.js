import React from "react";
import { ProductsLink } from "../constants";

const ProductContent = ({ handleMouseEnter, currentProduct }) => {
  // console.log(ProductsLink);

  return (
    <ul className="grid place-content-center order-1 md:place-content-start md:ps-[10%] md:pt-[20%] lg: lg:order-2 pt-[40%] lg:pt-0 lg:place-content-center lg:pe-[20%] lg:ps-0">
      {ProductsLink[0].content.map((item, index) => (
        <li
          key={index}
          className="productHover flex h-[60px] lg:h-20 items-center font-Montserrat font-bold box-border "
        >
          <div
            className={`${
              currentProduct === index
                ? "product-border"
                : "product-border-none"
            } h-10 w-px ps-6`}
          ></div>
          <a
            onMouseEnter={() => handleMouseEnter(index)}
            className="text-[25px] md:text-[30px] bg-gradient-to-r from-purple-600 via-blue-700 to-blue-400 bg-clip-text text-transparent"
            href="/"
          >
            {" "}
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ProductContent;
