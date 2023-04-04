import React from "react";

type PROPS = {
  children: React.ReactNode;
  className?: string;
};

export const Description: React.FC<PROPS> = ({ children, className }) => {
  return <h3 className={`max-w-[min(100vh,_500px)] ${className? className: ''}`}>{children}</h3>;
};
