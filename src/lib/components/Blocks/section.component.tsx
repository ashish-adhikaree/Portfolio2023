import React from "react";

type PROPS = {
  children: React.ReactNode;
  id: string;
  className?: string;
  height?: string;
  background?: string;
};

export const SectionWrapper: React.FC<PROPS> = ({
  children,
  id,
  height,
  background,
  className,
}) => {
  return (
    <section
      style={{
        height: height ? height : "100vh",
        background: background ? background : "transparent",
      }}
      id={id}
    >
      <div className={`max-w-6xl  mx-auto ${className ? className : ""}`}>
        {children}
      </div>
    </section>
  );
};
