import VideoComponent from "../components/VideoComponent"
import { HomeText } from "../constants"
import Button from "../components/Button"
import TextCard from "../components/TextCard"

const Home = () => {
  return (
    <div className="relative"> 
        < VideoComponent />
        
        <div className="md:ps-32 px-[7%] z-20 absolute top-64 text-slate-50">
        {HomeText.map((text)=>
        < TextCard key={text.id} text ={text}/> )}
        <Button />
      </div>

    </div>
  )
}

export default Home