import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between align-center py-[8px] px-[4%]">
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

      <lord-icon
        src="https://cdn.lordicon.com/bgebyztw.json"
        trigger="hover"
        stroke="bold"
        colors="primary:#121331,secondary:#e83a30"
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "9999px",
          border: "2px dashed black",
          margin: "5px",
          overflow: "hidden",
        }}
      ></lord-icon>
    </div>
  );
};

export default Navbar;
