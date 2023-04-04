import React from "react";
import { NavLink } from "./navlink.component";

type PROPS = {
  links: Array<string>;
};

export const NavBar: React.FC<PROPS> = ({ links }) => {
  return (
    <nav>
      <ul className="flex items-center gap-8">
        {links.map((title, index) => (
          <li  key={index}  title={title.toUpperCase()}>
            <NavLink index={index + 1} title={title} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
