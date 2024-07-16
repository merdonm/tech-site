

const ClientCard = ( {image,text,index,clientImg,setClientImg,id,currentIndex,setCurrentIndex ,preIndex,setPreIndex} ) => {
    
    const handleMouseEnter =()=>{
        setClientImg(true)
        setCurrentIndex(index)
    }
    const handleMouseLeave = () =>{
        setCurrentIndex("")
        setPreIndex(true)
    }
        
  return (
    <div key={index} className="px-2 py-4">
        
            <p className={`${clientImg && currentIndex === index ? 'fade-up ' : clientImg && preIndex ? 'fade-down' : 'opacity-0'} flex justify-center border-slate-50 py-2 bg-slate-50 font-Montserrat text-xs text-slate-500`}>{text}</p>
            <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="/"><img src={image} /></a>
            
          </div>
  )
}

export default ClientCard