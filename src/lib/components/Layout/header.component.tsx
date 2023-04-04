import React from "react";
import { Logo } from "../Blocks/logo.component";
import { NavBar } from "../Blocks/navbar.component";
import { NAVLINKS } from "@/lib/ts/constants/layout";

export const Header = () => {
  return (
    <header className="flex items-center px-2 h-[6rem]">
      <div className="w-full flex items-center justify-between max-w-6xl mx-auto">
        <Logo />
        <NavBar links={NAVLINKS} />
      </div>
    </header>
  );
};
