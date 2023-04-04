import React from "react";

type PROPS = {
  children: React.ReactNode;
  className?: string;
};

export const Title: React.FC<PROPS> = ({ children, className }) => {
  return <h2 className={`text-3xl font-bold uppercase ${className? className: ''}`}>{children}</h2>;
};
