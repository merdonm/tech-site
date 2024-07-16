import React from "react";
import Button from "../components/Button";
import { ClientImg } from "../constants";
import ClientCard from "../components/ClientCard";
import { useState } from "react";



const Clients = () => {
    const [clientImg, setClientImg] = useState(false);
    const [currentIndex , setCurrentIndex] = useState("")
    const [preIndex , setPreIndex] = useState(false)

  return (
    <div className="grid lg:grid-cols-2">
      <div className="px-[10%] lg:ps-32 font-Montserrat py-36">
        <p className="py-3 text-sm font-semibold text-gray-400">BRANDS</p>
        <p className="py-1 text-4xl lg:text-5xl font-[500] lg:font-bold">Clients and</p>
        <p className="py-1 text-4xl lg:text-5xl font-[500] lg:font-bold">Frequent</p>
        <p className="py-1 text-4xl lg:text-5xl font-[500] lg:font-bold">Partners</p>
        <p className="lg:pe-72 pt-8">
          Ut enim ad minim veniam, quis nostrud exercitation ullamconisi ut
          aliquip ex
        </p>
        <Button />
      </div>

      <div className="flex flex-wrap items-center justify-center lg:py-16 lg:me-5">
        {ClientImg.map((item, index) => (
          <ClientCard
            image={item.clientImage}
            text = {item.text}
            id = {item.id}
            index={index}
            clientImg={clientImg}
            setClientImg={setClientImg}
            currentIndex = {currentIndex}
            setCurrentIndex = {setCurrentIndex}
            preIndex = {preIndex}
            setPreIndex = {setPreIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default Clients;
