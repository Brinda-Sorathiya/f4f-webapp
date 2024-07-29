import React, { useState } from "react";
import { menu_list } from "../assets/assets";

const Expmenu = ({catagory, setCategory}) => {
  return (
    <div>
      <h1 className="text-3xl text-red-600 font-bold mb-[30px]">
        Explore the menu
      </h1>
      <p className="max-w-[1000px] mb-[30px]">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe nihil
        reprehenderit veniam quas deleniti nesciunt voluptates nemo, esse
        minima, atque itaque recusandae sunt vel illo dolore at repellendus
        laborum sint!
      </p>
      <div className="grid grid-cols-8-100 gap-[30px] text-center items-center justify-between overflow-x-scroll">
        {menu_list.map((item, index) => {
          return (
            <div
              key={index}
              
            >
              <img src={item.menu_image} alt="img" onClick={() => setCategory(prev=>prev===item.menu_name?"all":item.menu_name)}
              className={
                catagory === item.menu_name
                  ? "border-[5px] border-red-600 rounded-full"
                  : "border-2 border-transparent"
              } />
              <span className="text-gray-500">{item.menu_name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Expmenu;
