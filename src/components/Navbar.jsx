import React, { useState, useContext} from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { storeCtx } from "../context/Context";

const Navbar = ({ setLgn }) => {
  const [menu, setMenu] = useState("");
  const [show, setShow] = useState(false);
  const { token, setToken, totalAmt } = useContext(storeCtx);
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken("")
    navigate("/")
  }
  return (
    <div className="p-[30px] flex justify-between items-center">
      <div className="flex items-center justify-center">
        <lord-icon
          src="https://cdn.lordicon.com/mwgfcdaj.json"
          trigger="hover"
          style={{ width: "50px", height: "50px" }}
        ></lord-icon>

        <p className="text-red-600 text-5xl font-bold">f</p>
        <span className="text-5xl font-bold">4</span>
        <p className="text-red-600 text-5xl font-bold">f</p>
      </div>

      <ul className="flex gap-[20px] items-center cursor-pointer">
        <Link to="/">
          <li
            onClick={() => setMenu("home")}
            className={
              menu == "home"
                ? "underline decoration-red-600 underline-offset-8 decoration-2"
                : ""
            }
          >
            home
          </li>
        </Link>

        <li
          onClick={() => setMenu("menu")}
          className={
            menu == "menu"
              ? "underline decoration-red-600 underline-offset-8 decoration-2"
              : ""
          }
        >
          menu
        </li>
        <li
          onClick={() => setMenu("app")}
          className={
            menu == "app"
              ? "underline decoration-red-600 underline-offset-8 decoration-2"
              : ""
          }
        >
          mobile-app
        </li>
        <li
          onClick={() => setMenu("contact")}
          className={
            menu == "contact"
              ? "underline decoration-red-600 underline-offset-8 decoration-2"
              : ""
          }
        >
          contact us
        </li>
      </ul>
      <div className="flex gap-[20px] items-center">
        <lord-icon
          src="https://cdn.lordicon.com/anqzffqz.json"
          trigger="hover"
        ></lord-icon>
        <div onClick={() => setMenu("cart")}>
          <Link to="/cart">
            <lord-icon
              src="https://cdn.lordicon.com/eiekfffz.json"
              trigger="hover"
            ></lord-icon>
          </Link>
        </div>
        {!token ? (
          <button
            type="button"
            onClick={() => setLgn(true)}
            className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Sign In
          </button>
        ) : (
          <div className="relative">
            <lord-icon
              src="https://cdn.lordicon.com/bgebyztw.json"
              trigger="hover"
              stroke="bold"
              colors="primary:#121331,secondary:#e83a30"
              onClick={() => setShow(!show)}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "9999px",
                border: "2px dashed black",
                margin: "5px",
                overflow: "hidden",
              }}
            ></lord-icon>
            {show ? (
              <ul className="absolute backdrop-blur-md  border-[3px] border-red-600 border-dashed rounded-md ">
                <li className="flex gap-[15px] p-[10px] items-center font-bold bg-red-100">
                  <lord-icon
                    src="https://cdn.lordicon.com/taymdfsf.json"
                    trigger="hover"
                    stroke="bold"
                    colors="primary:#121331,secondary:#e83a30"
                    style={{
                      width: "30px",
                      height: "30px",
                    }}
                  ></lord-icon>
                  <p>Order</p>
                </li>
                <hr className="my-[5px] bg-red-600 h-[3px]" />
                <li className="flex gap-[15px] p-[10px] items-center font-bold bg-red-100"
                onClick={handleLogout}>
                  <lord-icon
                    src="https://cdn.lordicon.com/gwvmctbb.json"
                    trigger="hover"
                    stroke="bold"
                    colors="primary:#121331,secondary:#e83a30"
                    style={{
                      width: "30px",
                      height: "30px",
                    }}
                  ></lord-icon>
                  <p>Logout</p>
                </li>
              </ul>
            ) : (
              ""
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
