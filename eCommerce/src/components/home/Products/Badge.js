import React from "react";

const Badge = ({ text }) => {
  return (
    <div className="bg-primeColor w-[40px] h-[30px] text-white flex justify-center items-center text-sm font-semibold hover:bg-black duration-300 cursor-pointer">
      {text}
    </div>
  );
};

export default Badge;
