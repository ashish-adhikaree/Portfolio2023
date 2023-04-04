import React from "react";

type PROPS = {
  children: React.ReactNode;
  index: number;
  green?: boolean;
};

export const SectionHeader: React.FC<PROPS> = ({ children, index, green }) => {
  return (
    <header
      className={`flex items-center gap-8 py-20 text-5xl font-bold ${
        green ? "text-primary-green" : "text-primary-black"
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`w-2 h-20 ${green ? "bg-primary-green" : "bg-primary-black"}`}
        ></div>
        <span className={`font-normal text-7xl text-transparent bg-gradient-to-r ${green? "from-primary-green" : "from-primary-black"}  to-transparent bg-clip-text`}>
          0{index}
        </span>
      </div>
      <span className="uppercase">{children}</span>
    </header>
  );
};
