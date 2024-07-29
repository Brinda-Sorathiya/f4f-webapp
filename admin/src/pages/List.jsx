import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const URL = "http://localhost:5000";
const List = () => {
  const [list, setList] = useState([]);

  const fList = async () => {
    const res = await axios.get(`${URL}/api/food/list`);
    if (res.data.success) {
      console.log(res.data);
      setList(res.data.data);
    } else {
      toast.error("Something Went Wrong");
    }
  };

  const remove = async (id) => {
    const res = await axios.post(`${URL}/api/food/remove`, { id: id });
    await fList();
    if (res.data.success) {
      toast.success("Food Removed Successfully");
    } else {
      toast.error("Something Went Wrong");
    }
  };

  useEffect(() => {
    fList();
  }, []);

  return (
    <div className="w-[85%] mt-[20px] p-[10px]">
      <p className="mb-[40px] text-red-600 text-3xl font-bold">Food List</p>
      <div>
        <div className="grid grid-cols-1-1.5-1-1-1-0.5 items-center gap-[5px]">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        <hr className="my-[30px] bg-gray-400 h-[3px]" />
        {list.map((item, index) => {
          return (
            <div key={index}>
              <div className="grid grid-cols-1-1.5-1-1-1-0.5 items-center ">
                <img
                  src={`${URL}/images/` + item.image}
                  className="w-[50px] rounded-lg"
                />
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p>{item.price}</p>
                <span
                  onClick={() => remove(item._id)}
                  className="rounded-full bg-red-600 text-center font-bold text-white p-[5px] w-[35px] cursor-pointer"
                >
                  ---
                </span>
              </div>
              <hr className="my-[30px] bg-gray-300 h-[2px]" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
