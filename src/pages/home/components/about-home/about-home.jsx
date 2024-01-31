import React from "react";
import style from "./about-home.module.scss";
import { AmpulaIcon } from "../../../../assets/icon/ampula-icon";
import {LoveBoxIcon} from "../../../../assets/icon/loveBox-icon"
import {LoveIcon} from "../../../../assets/icon/love-icon";
import {MessegaIcon} from "../../../../assets/icon/messega-icon"
export const AboutHome = () => {
  return (
    <section className={style.aboutHome}>
      <div className="container">
        <ul className={style.list}>
          <li>
            <div className={style.img}>
              <AmpulaIcon />
            </div>
            <p className={style.title}>Ethical business</p>
            <p className={style.text}>Only green beauty products.</p>
          </li>
          <li>
            <div className={style.img}>
              <LoveBoxIcon />
            </div>
            <p className={style.title}>Shipped free & with love</p>
            <p className={style.text}>On orders abouve $50.</p>
          </li>
          <li>
            <div className={style.img}>
              <LoveIcon />
            </div>
            <p className={style.title}>Delivered in 1-3 days</p>
            <p className={style.text}>And packaged with love.</p>
          </li>
          <li>
            <div className={style.img}>
              <MessegaIcon />
            </div>
            <p className={style.title}>Personalized experience</p>
            <p className={style.text}>Free consultations via email.</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
