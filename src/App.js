import React from 'react'
import Form from './Form'
import Nav from './section.js/Nav'
import Home from './section.js/Home'
import Products from './section.js/Products'
import TechDesign from './section.js/TechDesign'
import Clients from './section.js/Clients'
import FeedbackSection from './section.js/FeedbackSection'
import Footer from './section.js/Footer'
import { useCallback,useState,useEffect } from 'react'

const App = () => {
  const [y, setY] = useState(window.scrollY);
  const [navbarVisible , setNavbarVisible] = useState(false)
  const [isTrue ,setIsTrue] = useState(true)

 

    const handleNavigation = useCallback(
      e => {
        const window = e.currentTarget;
        if (y > window.scrollY) {
          setNavbarVisible(true)
         
        } else if (y < window.scrollY) {
          setNavbarVisible(false)
         
        }
        setY(window.scrollY);
       
        
        if ( window.scrollY <= 900 )
          {
            setIsTrue(false)
          }
          else{
           setIsTrue(true)
          }
        
      }, [y]
    );
    
    useEffect(() => {
      setY(window.scrollY);
      window.addEventListener("scroll", handleNavigation);
    
      return () => {
        window.removeEventListener("scroll", handleNavigation);
      };
    }, [handleNavigation]);
  return (
    <div className=' '>
      <section className={`${  navbarVisible && isTrue ? 'sticky top-0 z-50 fade-downNav' : '' } left-0 right-0`}>
     
        <Nav />
        </section>
        
       <section className='w-full'>
        < Home />
        </section>
      
      <section className='bg-white'>
        <Products />
        </section>

      <section className=''>
        <TechDesign />
        </section>

      <section className=' '>
        <Clients />
        </section> 

        <section>
          <FeedbackSection />
        </section>

        <section>
          <Footer />
        </section>
        <Form />
    </div>
  )
}

export default App


// src/App.js
// import React from 'react';
// import BackgroundImage from './components/BackgroundImage';

// function App() {
//     return (
//         <div className="App">
//             <BackgroundImage />
//         </div>
//     );
// }

// export default App;


// import React from 'react'
// import Career from "./pages/Career"

// const App = () => {
//   return (
//     <div>
//       <Career />
//     </div>
//   )
// }

// export default App