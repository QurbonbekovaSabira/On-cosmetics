import React from "react";
import style from "./advertising.module.scss";
import { InstagramColorIcon } from "../../../../assets/icon/instagramColor-icon";
import img1 from "../../../../assets/img/home-advertasingImg1.png";
import img2 from "../../../../assets/img/home-advertasingImg2.png";
import img3 from "../../../../assets/img/home-advertasingImg3.png";
import img4 from "../../../../assets/img/home-advertasingImg4.png";
import img5 from "../../../../assets/img/home-advertasingImg5.png";
import img6 from "../../../../assets/img/home-advertasingImg6.png";
import img7 from "../../../../assets/img/home-advertasingImg7.png";

export const Advertising = () => {
  return (
    <section className={style.advertising}>
      <div className="container">
        <div className={style.textContent}>
          <a href="#">
            <InstagramColorIcon />
          </a>
          <h2 className={style.title}>Instagram</h2>
        </div>
        <div className={style.angry_grid}>
          <img className={style.item_0} src={img1} alt="" />
          <img className={style.item_1} src={img2} alt="" />
          <img className={style.item_2} src={img3} alt="" />
          <img className={style.item_3} src={img4} alt="" />
          <img className={style.item_4} src={img5} alt="" />
          <img className={style.item_5} src={img6} alt="" />
          <img className={style.item_6} src={img7} alt="" />

        </div>
        <a className={style.link} href="#">Follow Us @beautyshop</a>
      </div>
    </section>
  );
};
