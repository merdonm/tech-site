
import ProductImage from "../components/ProductImage";
import ProductContent from "../components/ProductContent";
import { useState } from "react";

const Products = () => {
    const [currentProduct , setCurrentProduct] = useState(0)


    const handleMouseEnter = (index) =>{
        setCurrentProduct(index)
        console.log(currentProduct);
        console.log("INdex",index);
        
    }

    // const handleMouseLeave = ()=>{
        
    //     setCurrentProduct(0)
    // } 
    
  return (
    
      <div className=" lg:min-h-[700px] border grid lg:grid-cols-2 ">
        <ProductImage 
        currentProduct = {currentProduct}
        setCurrentProduct = {setCurrentProduct}
        />
        <ProductContent
        currentProduct = {currentProduct}
         handleMouseEnter= {handleMouseEnter}
        //  handleMouseLeave={handleMouseLeave}
        />
      </div>
  );
};

export default Products;
