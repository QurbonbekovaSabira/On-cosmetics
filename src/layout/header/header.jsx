import React from "react";
import { Logo } from "../../assets/logo";
import { links } from "./data";
import { HeaderButtons } from "./components/header-buttons/header-buttons";
import { Link } from "react-router-dom";
import style from './header.module.scss'

export const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <Logo />
        <ul className={style.navbar}>
          {links.map((item) => (
            <li key={item.path}>
              <Link className={style.navbar_link} to={item.path}>
              {item.name}
            </Link>
            </li>
          ))}
        </ul>
        <HeaderButtons />
      </div>
    </header>
  );
};
