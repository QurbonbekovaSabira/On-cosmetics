import React from "react";
import style from "./contact.module.scss";
import Hero from "./components/hero/heroJSX";
import ContactUcer from "./components/contact/contactJSX";
import Addres from "./components/address/addresJSX";

export const Contact = () => {
  return (
    <>
      <div className={style.hero_bg__img}></div>
      <Hero />
      <Addres />
      <ContactUcer />
    </>
  );
};
