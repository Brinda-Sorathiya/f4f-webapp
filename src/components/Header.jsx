import React from 'react';
import headerImage from '../assets/header_img.jpg'; // Adjust the import path if necessary

const Header = () => {
  return (
    <div 
      className="h-50vh mb-[30px] bg-no-repeat bg-cover bg-center rounded-lg px-[50px] place-content-end overflow-y-scroll"
      style={{ backgroundImage: `url(${headerImage})` }}
    >
        <h2 className='font-bold text-6xl b-0 max-w-[500px] text-white mb-[20px]'>Here is the food for foodie</h2>
        <p className='font-bold max-w-[700px] my-[20px] text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum odio nihil quibusdam totam numquam, sint dolorem inventore maxime, expedita fugiat et ipsam vel itaque minima quia vitae aliquam dignissimos tempore.</p>
        <button className='bg-white text-red-600 hover:bg-gray-300 font-bold p-[10px] rounded-full mb-[20px]'>View Menu</button>
    </div>
  );
};

export default Header;
