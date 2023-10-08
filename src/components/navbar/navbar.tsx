import { UserButton } from "@clerk/nextjs";
import React from "react";
import Logo from "./logo";
import ThemeSwitcher from "./ThemeSwitcher";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <nav>
      <Logo />
      <div className="">
        <UserButton afterSignOutUrl="/" />
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default NavBar;
