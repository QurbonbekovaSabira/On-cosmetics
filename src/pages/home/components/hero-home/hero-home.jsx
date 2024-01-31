import React from "react";
import style from "./hero-home.module.scss"
export const HeroHome = () => {
  return (
    <section className={style.hero}>
      <div className="container">
        <h1 className={style.title}>Discover summer promotions</h1>
        <p className={style.text}>Free sample and free shipping when you spend $50</p>
        <div className={style.btnBox}>
          <button className={style.skincareBtn}>Skincare</button>
          <button className={style.shopBtn}>Shop All</button>
        </div>
      </div>
    </section>
  );
};
