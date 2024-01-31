import React from "react";
import style from "./hero.module.scss";
import img from "../../../../assets/img/contak_hero_img.jpg";

export default function Hero() {
  return (
    <div className="container">
      <div className={style.hero_contianer}>
        <div>
          <img className={style.hero_img} src={img} alt="" />
        </div>
        <div className={style.hero_content}>
          <h2 className={style.hero_content__title}>Get in touch</h2>
          <p className={style.hero_content__text}>
            Send us a note anytime — we welcome feedback and requests.
          </p>
          <h3 className={style.hero_content__title1}>Give us a call</h3>
          <p className={style.hero_content__text1}>Mon – Fri, 9am – 7pm EST:</p>
          <p className={style.hero_content__text2}>+44 583 837390</p>
          <h3 className={style.hero_content__title2}>Write us an email</h3>
          <p className={style.hero_content__text3}>hello@example.com</p>
          <button className={style.hero_content__btn}>Visit FAQ</button>
        </div>
      </div>
    </div>
  );
}
