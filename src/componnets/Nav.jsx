import React, { useState } from "react";
import { headerLogo } from "../../assets/images/index.js";
import { navLinks } from "../constants/index.js";
import { cheveronRight, hamburger } from "../assets/icons/index.js";

const Nav = () => {
  const [isToggle, setToggle] = useState(false);
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex items-center justify-between max-container gap-16">
        <a href="/">
          <img src={headerLogo} alt="logo" />
        </a>
        <ul className="flex-1 flex text-nowrap items-center justify-center gap-16 max-lg:hidden">
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
        <div
          className={
            "text-black font-montserrat text-lg font-medium max-lg:hidden"
          }
        >
          <a>Sign in / Explore now</a>
        </div>
        <div className="hidden max-lg:flex justify-center items-center padding-x ">
          {!isToggle && (
            <img
              onClick={() => setToggle((prev) => !prev)}
              className={"z-20 bg-white  "}
              src={hamburger}
              alt="hamburger"
              width={25}
              height={25}
            />
          )}
          {isToggle && (
            <div
              className={
                "h-screen z-20 flex justify-center flex-col items-center fixed top-0 right-0 w-fit min-w-[50%]   bg-slate-gray"
              }
            >
              <button
                onClick={() => setToggle((prev) => !prev)}
                className={"absolute right-3 top-3"}
              >
                <img alt={"arrow"} src={cheveronRight} />
              </button>
              <ul className="flex-1 flex flex-col text-nowrap  items-start justify-center gap-10">
                {navLinks.map((navLink) => (
                  <li key={navLink.label}>
                    <a
                      className="font-montserrat leading-normal text-lg text-black"
                      href={navLink.href}
                    >
                      {navLink.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div
                className={
                  "text-black font-montserrat pb-10 text-lg font-medium text-center"
                }
              >
                <a href={"#"}>Sign in / Explore now</a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};
export default Nav;
