import React from "react";
import style from "./bestseller.module.scss";

export const Bestseller = () => {
  return (
    <section className={style.bestseller}>
      <div className="container">
        <h2 className={style.title}>Our bestsellers</h2>
      </div>
      <div className={style.cardBox}></div>
    </section>
  );
};
