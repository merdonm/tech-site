import { ProductsLink } from '../constants'

const ProductImage = ({currentProduct,setCurrentProduct}) => {

  
  return (
    
       <div className='order-2 lg:order-1 flex lg:items-center '>
        {ProductsLink.map((item)=>(
            <div className=''>
                <img className='px-[10%] md:ps-60  lg:ps-28 py-[10%]  lg:py-0 transition-transform' src={item.productImages[currentProduct]} alt='image' />
            </div>
        ))}
       </div>

  )
}

export default ProductImage