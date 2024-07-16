import React from 'react';
import './customStyles.css';
import { videoBg } from '../assets';



const VideoComponent = () => {
  return (

    <video className='bgVideoStyle ' autoPlay muted controls loop controlsList="nodownload nofullscreen noremoteplayback" src={videoBg} />


  );
};

export default VideoComponent;
