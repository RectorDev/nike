import React from "react";
import { footerLogo } from "../assets/images/index.js";
import { footerLinks, socialMedia } from "../constants/index.js";
import { copyrightSign } from "../assets/icons/index.js";

const Footer = () => {
  return (
    <section className={"max-container"}>
      <div
        className={
          "flex justify-between items-start gap-20 flex-wrap max-lg:flex-col"
        }
      >
        <div className={"flex flex-col items-start"}>
          <a>
            <img width={150} height={46} src={footerLogo} />
          </a>
          <p
            className={
              "mt-6 text-base leading-7" + " font-montserrat sm:max-w-sm"
            }
          >
            Get shoes ready for the new term at your nearest Nike store. Find
            your perfect Size In Store. Get Rewards
          </p>
          <div className={"flex items-center gap-5 mt-8 "}>
            {socialMedia.map((item) => (
              <div
                className={
                  "flex justify-center items-center w-12 h-12 bg-white rounded-full"
                }
              >
                <img width={24} height={24} src={item.src} alt={item.src} />
              </div>
            ))}
          </div>
        </div>
        <div
          className={"flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap"}
        >
          {footerLinks.map((item) => (
            <div key={item}>
              <h4
                className={
                  "text-white font-montserrat text-2xl leading-normal font-medium mb-6"
                }
              >
                {item.title}
              </h4>
              <ul>
                {item.links.map((link) => (
                  <li
                    className={
                      "mt-3 hover:text-slate-gray cursor-pointer text-white-400 font-montserrat leading-normal"
                    }
                    key={link.name}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div
        className={
          "flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center"
        }
      >
        <div
          className={
            "felx flex-1 items-center font-montserrat gap-2 justify-start"
          }
        >
          <img
            className={"rounded-full m-0"}
            src={copyrightSign}
            alt={"copyright"}
            width={20}
            height={20}
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className={"font-montserrat cursor-pointer"}> Terms & Conditions</p>
      </div>
    </section>
  );
};
export default Footer;
