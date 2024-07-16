// src/components/BackgroundImage.js
import React from 'react';

const BackgroundImage = () => {
    return (
        <div className="bg-cover bg-center bg-no-repeat sm:bg-auto sm:bg-center sm:bg-none h-screen" style={{ backgroundImage: `url('https://deon.qodeinteractive.com/wp-content/uploads/2021/11/Home-11-parallax-img.jpg')` }}>
            <div className="h-full flex flex-col justify-center items-center text-white text-center">
                <h1 className="text-4xl font-bold mb-4">Welcome to My Website</h1>
                <p className="text-lg">This is a paragraph with a background image.</p>
            </div>
        </div>
    );
};

export default BackgroundImage;
