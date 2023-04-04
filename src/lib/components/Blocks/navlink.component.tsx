import Link from "next/link";
import React from "react";

type PROPS = {
  index: number;
  title: string;
};

export const NavLink: React.FC<PROPS> = ({ index, title }) => {
  return (
    <Link href={`#${title}`}>
      <span className="text-primary-green">0{index}&nbsp;</span>{" "}
      <span className="uppercase font-light">
        {title}
      </span>
    </Link>
  );
};
