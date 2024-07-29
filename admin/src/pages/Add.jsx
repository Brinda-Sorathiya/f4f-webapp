import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets.js";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Add = () => {
  const [img, setImg] = useState(false);
  const [data, setData] = useState({
    name: "",
    price: "",
    description: "",
    category: "Salad",
  });

  const nameChangeH = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
    console.log(data)
  };

  const submitH = async (e) => {
    console.log("hii")
    const URL = "http://localhost:5000"
    e.preventDefault();
    const formdata = new FormData()
    formdata.append("name", data.name)
    formdata.append("price", Number(data.price))
    formdata.append("description", data.description)
    formdata.append("category", data.category)
    formdata.append("image", img)
    console.log(formdata)
    const res = await axios.post(`${URL}/api/food/add`, formdata)
    if(res.data.success){
      setData({
        name: "",
        price: "",
        description: "",
        category: "Salad",
      })
      setImg(false)
      toast.success("Food Added Successfully")
    }else{
      toast.error("Something Went Wrong")
    }
  }

  // useEffect(() => {
  //   console.log(data)
  // }, [data])
  

  return (
    <div className="w-[70%] ml-responsive mt-[50px] text-[16px]">
      <form 
        className="flex flex-col gap-[20px]"
        onSubmit={submitH}
        >
        <div className="flex flex-col gap-[10px] w-[120px]">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              className="text-black rounded-lg  border-[2px] border-black"
              src={img ? URL.createObjectURL(img) : assets.upload_area}
              alt="img"
            />
          </label>
          <input
            onChange={(e) => setImg(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>
        <div className="flex flex-col">
          <p>Product Name</p>
          <input
            onChange={nameChangeH}
            value={data.name}
            className="max-w-[500px] h-[40px] text-black rounded-lg p-[3px] px-[10px] border-[2px] border-black"
            type="text"
            name="name"
            placeholder="Name here"
            required
          />
        </div>
        <div>
          <p>Product Description</p>
          <textarea
            onChange={nameChangeH}
            value={data.description}
            name="description"
            className="w-full max-w-[500px] text-black rounded-lg p-[3px] px-[10px] border-[2px] border-black"
            placeholder="Description here"
            rows="6"
            required
          ></textarea>
        </div>
        <div className="flex flex-wrap gap-[50px]">
          <div>
            <div>
              <p>Product Category</p>
              <select
                className="text-black rounded-lg p-[3px] px-[10px] border-[2px] border-black"
                onChange={nameChangeH}
                value={data.category}
                name="category"
                required
              >
                <option value="Salad">Salad</option>
                <option value="Rolls">Rolls</option>
                <option value="Deserts">Deserts</option>
                <option value="Sandwich">Sandwich</option>
                <option value="Cake">Cake</option>
                <option value="Pure Veg">Pure Veg</option>
                <option value="Pasta">Pasta</option>
                <option value="Noodles">Noodles</option>
              </select>
            </div>
          </div>
          <div>
            <p>Product Price</p>
            <input
              className="text-black rounded-lg p-[3px] px-[10px] border-[2px] border-black"
              onChange={nameChangeH}
              value={data.price}
              type="number"
              name="price"
              placeholder="Price here"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 max-w-[100px]"
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
