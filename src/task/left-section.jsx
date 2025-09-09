import React from "react";

const LeftSection = () => {
  return (
      <div className="bg-[rgb(008,075,062)] text-white flex flex-col justify-center p-10 w-[450px] rounded-l-[50px]">
        <div>
          <img
            className="w-45 h-30 shrink-0 mb-6"
            src="/public/logo.png"
            alt="market"
          />
        </div>

        <p className="text-[32px] text-[rgb(249,226,186)] mt-96">
          Say hello to global food and beverage producers and suppliers, all in
          one place
        </p>
      </div>
  );
};

export default LeftSection;
