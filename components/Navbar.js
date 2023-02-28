import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavItem from "./NavItem";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About me", href: "/about" },
  { text: "Contact", href: "/contact" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
        <Link href={"/"}>
          <a>
            <h1 className="logo">
              <div className="profilePic">
                <Image width="100rem" height="100rem" alt="profilepic" src="/ciska.png" />{" "}
              </div>
              Dev Portfolio{" "}
            </h1>

            <style jsx>
              {" "}
              {`
                .profilePic {
                  height: 100px;
                  border-radius: 50%;
                  margin-left: 15px;
                }
                .profilePic:hover {
                  -ms-transform: scale(1.5);
                  -webkit-transform: scale(1.5);
                  transform: scale(1.5);
                }
                .logo {
                  padding: 70ox 0;
                  text-align: center;
                }
              `}
            </style>
          </a>
        </Link>
        <div onClick={() => setNavActive(!navActive)} className={`nav__menu-bar`}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
