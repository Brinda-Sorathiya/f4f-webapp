import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="text-white bg-gray-700 flex-col items-center gap-[20px] p-[50px] w-full">
      <div className="w-full grid grid-cols-2-1-1 gap-[20px] ">
        <div >
          <div className="flex items-center mb-[5px]">
            <lord-icon
              src="https://cdn.lordicon.com/mwgfcdaj.json"
              trigger="hover"
              style={{ width: "50px", height: "50px" }}
            ></lord-icon>
            <p className="text-red-600 text-5xl font-bold">f</p>
            <span className="text-5xl font-bold">4</span>
            <p className="text-red-600 text-5xl font-bold">f</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
            fugit doloribus debitis cumque quidem, sed aut, officia nostrum,
            quos totam necessitatibus repellat commodi quo odio! Perferendis
            eveniet voluptatum rerum cumque.
          </p>
          <div className="flex my-[10px] gap-[10px]">
            <img src={assets.facebook_icon} alt="img" />
            <img src={assets.twitter_icon} alt="img" />
            <img src={assets.linkedin_icon} alt="img" />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold">COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold">TOUCH IN WITH</h2>
          <ul>
            <li>1234-5678-90</li>
            <li>contact@f4f.com</li>
          </ul>
        </div>
      </div>
      <hr className='my-[10px] bg-gray-400 h-[2px]'/>
      <p>Copyright 2024 &#169; f4f.com - All Rights Reserved</p>
    </div>
  );
};

export default Footer;
