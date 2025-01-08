import React from "react";
import { headerLogo } from "../../assets/images/index.js";
import { navLinks } from "../constants/index.js";
import { hamburger } from "../assets/icons/index.js";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex items-center justify-between max-container gap-16">
        <a href="/">
          <img src={headerLogo} alt="logo" />
        </a>
        <ul className="flex-1 flex items-center justify-center gap-16 max-lg:hidden">
          {navLinks.map((navLink) => (
            <li key={navLink.label}>
              <a
                className="font-montserrat leading-normal text-lg text-slate-gray"
                href={navLink.href}
              >
                {navLink.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger" width="25" height="25" />
        </div>
      </nav>
    </header>
  );
};
export default Nav;
