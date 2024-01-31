import React from "react";
import { cards } from "./data";
import CardStyle from "./cards.module.scss";
import { Pagination } from "../pagination";
import { Link } from "react-router-dom";

//// icons:
import { CardHeartIcon } from "../../../../assets/icon/card-heart-icon";
import { BagIcon } from "../../../../assets/icon/bag-icon";
import { EyesIcon } from "../../../../assets/icon/eyes-icon";

export const PrCards = () => {
  return (
    <div>
      <ul className={CardStyle.cards_main}>
        {cards.map((item) => (
          <li className={CardStyle.cards_item} key={item.id}>
            <div className={CardStyle.cards_img__main}>
              <img className={CardStyle.cards_img} src={item.img} alt="img" />
              <div className={CardStyle.cards_review__icons}>
                <button className={CardStyle.cards_review__icons_item}>
                  <BagIcon />
                </button>
                <Link className={CardStyle.cards_review__icons_item}>
                  <EyesIcon to="" />
                </Link>
                <button className={CardStyle.cards_review__icons_item}>
                  <CardHeartIcon />
                </button>
              </div>
            </div>
            <h2 className={CardStyle.cards_title}>{item.title}</h2>
            <strong className={CardStyle.cards_price}>$ {item.price}</strong>
          </li>
        ))}
      </ul>
      <Pagination />
    </div>
  );
};
