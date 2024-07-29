import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { storeCtx } from "../context/Context";

const Fditm = ({ id, name, price, descp, img }) => {
  const { crtItm, ppCrt, rmCrt } = useContext(storeCtx);

  return (
    <div className="shadow-xl rounded-lg animate-zoom-in">
      <div className="relative">
        <img className="rounded-t-lg" src={img} alt={name} />
        {!crtItm[id] ? (
          <img
            className="absolute right-[15px] bottom-[15px]"
            src={assets.add_icon_white}
            onClick={() => ppCrt(id)}
            alt=""
          />
        ) : (
          <div className="flex absolute right-[15px] bottom-[15px] bg-white rounded-full items-center gap-[5px] p-[5px] ">
            <img src={assets.remove_icon_red} onClick={() => rmCrt(id)} />
            <p>{crtItm[id]}</p>
            <img src={assets.add_icon_green} onClick={() => ppCrt(id)} />
          </div>
        )}
      </div>
      <div className="p-[20px]">
        <div className="flex justify-between mb-[10px] items-center">
          <h3 className="text-[20px] font-bold">{name}</h3>
          <img className="h-[20px]" src={assets.rating_starts} alt="ratings" />
        </div>
        <div>
          <p className="mb-[10px]">{descp}</p>
          <p className="text-[25px]  mb-[5px] text-red-600">$ {price}</p>
        </div>
      </div>
    </div>
  );
};

export default Fditm;
