import React, { useContext } from "react";
import { storeCtx } from "../context/Context";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const { food_list, crtItm, rmCrt, totalAmt } = useContext(storeCtx);
  return (
    <form className="flex items-start justify-between gap-[50px] m-[100px]">
      <div>
        <p>Delivery Info.</p>
        <div>
          <input type="text" placeholder="enter the first name" />
          <input type="text" placeholder="enter the last name" />
        </div>
        <input type="email" placeholder="Email ID" />
        <input type="text" placeholder="Street" />
        <div>
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div>
          <input type="text" placeholder="Zip Code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Mobile number" />
      </div>
      <div className="flex flex-1 flex-col">
        <p className="font-bold text-2xl">Totals</p>
        <div>
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
            <b>{totalAmt() + 2}</b>
          </div>
        </div>
        <button className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 max-w-[200px]">
          Procced to Payment
        </button>
      </div>
    </form>
  );
};

export default Order;
