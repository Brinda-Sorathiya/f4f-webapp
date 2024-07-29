import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  const [active, setActive] = useState("");

  return (
    <div className="w-[18%] min-h-screen border border-gray-400 border-[2px] border-t-0 border-l-0 container">
      <div className="pt-[50px] pl-[20%] flex flex-col gap-[20px]">
        <Link
          to="/add"
          className={`flex items-center gap-[12px] border border-r-0 border-gray-400 py-[8px] px-[10px] border-[3px] cursor-pointer ${
            active === "add" ? "bg-red-100 border-red-700" : ""
          }`}
          onClick={() => setActive("add")}
        >
          <lord-icon
            src="https://cdn.lordicon.com/zrkkrrpl.json"
            trigger="hover"
            stroke="bold"
            colors="primary:#121331,secondary:#e83a30"
            style={{ width: "30px", height: "30px" }}
          ></lord-icon>
          <p>Add Items</p>
        </Link>
        <Link
          to="/list"
          className={`flex items-center gap-[12px] border border-r-0 border-gray-400 py-[8px] px-[10px] border-[3px] cursor-pointer ${
            active === "list" ? "bg-red-100 border-red-700" : ""
          }`}
          onClick={() => setActive("list")}
        >
          <lord-icon
            src="https://cdn.lordicon.com/wzwygmng.json"
            trigger="hover"
            stroke="bold"
            colors="primary:#121331,secondary:#e83a30"
            style={{ width: "30px", height: "30px" }}
          ></lord-icon>
          <p>List Items</p>
        </Link>
        <Link
          to="/order"
          className={`flex items-center gap-[12px] border border-r-0 border-gray-400 py-[8px] px-[10px] border-[3px] cursor-pointer ${
            active === "order" ? "bg-red-100 border-red-700" : ""
          }`}
          onClick={() => setActive("order")}
        >
          <lord-icon
            src="https://cdn.lordicon.com/odavpkmb.json"
            trigger="hover"
            stroke="bold"
            colors="primary:#121331,secondary:#e83a30"
            style={{ width: "30px", height: "30px" }}
          ></lord-icon>
          <p>Order</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
