import React from "react";
import style from "./cardProduct.module.scss";
import { Link } from "react-router-dom";

//// icons:
import { CardHeartIcon } from "../../../../assets/icon/card-heart-icon";
import { BagIcon } from "../../../../assets/icon/bag-icon";
import { EyesIcon } from "../../../../assets/icon/eyes-icon";

import { Cards } from "../../../../data/home-product";

export const CardProduct = () => {
  return (
    <ul className={style.cards_main}>
      {Cards.map((item) => (
        <li className={style.cards_item} key={item.id}>
          <div className={style.cards_img__main}>
            <img className={style.cards_img} src={item.img} alt="img" />
            <div className={style.cards_review__icons}>
              <button className={style.cards_review__icons_item}>
                <BagIcon />
              </button>
              <Link className={style.cards_review__icons_item}>
                <EyesIcon />
              </Link>
              <button className={style.cards_review__icons_item}>
                <CardHeartIcon />
              </button>
            </div>
          </div>
          <h2 className={style.cards_title}>{item.title}</h2>
          <strong className={style.cards_price}>$ {item.price}</strong>
        </li>
      ))}
    </ul>
  );
};
