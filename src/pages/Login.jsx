import React, { useState, useEffect, useContext} from "react";
import { assets } from "../assets/assets";
import { storeCtx } from "../context/Context";
import axios from 'axios'

const Login = ({ setLgn }) => {
  const { url, setToken } = useContext(storeCtx);

  const [sts, setSts] = useState("Sign Up");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  

  const onCngHdr = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onLgn = async (e) => {
    e.preventDefault();
    let newUrl = url
    if(sts === "Login"){
      newUrl = newUrl + "/api/user/login"
    }else{
      newUrl = newUrl + "/api/user/register"
    }
    try{
      const res = await axios.post(newUrl, data)
      if(res.data.success){
        localStorage.setItem("token", res.data.token)
        setToken(res.data.token)
        setLgn(false)
      }else{
        alert(res.data.message)
      }
    }catch(error){
      console.log(error)
      alert(error)
    }
    
  };

  

  return (
    <div className="grid absolute z-1 h-full w-full backdrop-blur-sm ">
      <form
        onSubmit={onLgn}
        className="place-self-center bg-black/60 text-white p-[25px] animate-zoom-in rounded-lg"
      >
        <div>
          <h2 className="text-2xl font-bold text-center mb-[20px]">{sts}</h2>
          <p
            className="text-4xl font-bold cursor-pointer absolute top-[0px] right-[15px] hover:text-red-500"
            onClick={() => setLgn(false)}
          >
            x
          </p>
        </div>
        <div className="flex flex-col gap-[20px] mb-[20px]">
          {sts === "Login" ? (
            <></>
          ) : (
            <input
              type="text"
              name="name"
              onChange={onCngHdr}
              value={data.name}
              placeholder="Name"
              className="text-black rounded-md p-[3px] px-[10px] border-[4px] border-red-600"
              required
            />
          )}
          <input
            type="email"
            name="email"
            onChange={onCngHdr}
            value={data.email}
            placeholder="Email"
            className="text-black rounded-md p-[3px] px-[10px] border-[4px] border-red-600"
            required
          />
          <input
            type="password"
            name="password"
            onChange={onCngHdr}
            value={data.password}
            placeholder="Password"
            className="text-black rounded-md p-[3px] px-[10px] border-[4px] border-red-600"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          {sts === "Sign Up" ? "Register" : "Login"}
        </button>
        <div className="flex mb-[5px]">
          <input type="checkbox" required />
          <p>I agree to terms of use and privacy policy</p>
        </div>
        {sts == "Login" ? (
          <p>
            Create new account?{" "}
            <span
              className="text-blue-400 cursor-pointer"
              onClick={() => setSts("Sign Up")}
            >
              Click here
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span
              className="text-blue-400 cursor-pointer"
              onClick={() => setSts("Login")}
            >
              Click here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
