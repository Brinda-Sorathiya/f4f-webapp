import React, { useContext } from "react";
import { storeCtx } from "../context/Context";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { food_list, crtItm, rmCrt, totalAmt } = useContext(storeCtx);
  const nvgt = useNavigate();
  return (
    <div className="w-full mb-[50px]">
      <div>
        <div className="grid grid-cols-1-1.5-1-1-1-0.5 items-center gap-[5px]">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr className="my-[30px] bg-gray-400 h-[3px]" />
        {food_list.map((item, index) => {
          if (crtItm[item._id] > 0) {
            return (
              <div>
                <div className="grid grid-cols-1-1.5-1-1-1-0.5 items-center ">
                  <img src={item.image} className="w-[50px] rounded-lg" />
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <p>{crtItm[item._id]}</p>
                  <p>{item.price * crtItm[item._id]}</p>
                  <span onClick={()=>rmCrt(item._id)} className="rounded-full bg-red-600 text-center font-bold text-white p-[5px] w-[35px] cursor-pointer">---</span>
                </div>
                <hr className="my-[30px] bg-gray-300 h-[2px]" />
              </div>
            );
          }
        })}
      </div>
      <div className="flex justify-between mt-[30px] gap-[80px]">
        <div className="flex flex-1 flex-col">
          <p className="font-bold text-2xl">Totals</p>
          <div >
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>{totalAmt()}</p>
            </div>
            <div className="flex justify-between">
              <p>Delivery Charge</p>
              <p>{2}</p>
            </div>
            <hr className="my-[10px] bg-gray-300 h-[2px]" />
            <div className="flex justify-between">
              <b>Total</b>
              <b>{totalAmt()+2}</b>
            </div>
          </div>
          <button className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 max-w-[200px]" onClick={()=>nvgt('/order')}>Procced to Checkout</button>
        </div>
        <div>
          <p>If you have a promo code, enter it here</p>
          <div className="bg-gray-700 rounded-lg flex justify-center items-center p-[5px] gap-[20px]">
            <input type="text" placeholder="Enter the promo-code" className='text-black rounded-lg p-[3px] px-[10px]'/>
            <button className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-2.5 py-[5px] text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 max-w-[200px]">submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
