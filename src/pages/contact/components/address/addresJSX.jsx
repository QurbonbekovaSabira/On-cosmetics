import React from "react";
import style from "./addres.module.scss";
import { WhatsAppIcon } from "../../../../assets/icon/whatsApp-icon.jsx";
import img from "../../../../assets/img/address_contact_img.png";
export default function Addres() {
  return (
    <div className={style.address_contianer}>
      <div className="container">
        <div className={style.addres__style}>
          <div className={style.address_content}>
            <h2 className={style.address_contianer__title}>Come and visit</h2>
            <p className={style.address_contianer__text}>Adresse:</p>
            <a className={style.address_contianer__link} href="">
              Kaiser-Friedrich-Strasse 19, 10585 Berlin
            </a>
            <p className={style.address_contianer__text2}>
              Termine nach Vereinbarung
            </p>
            <p className={style.address_contianer__text3}>RU / DE / UA</p>
            <div className={style.address_contianer_box}>
              <WhatsAppIcon />
              <p className={style.address_contianer_box_text}>
                +49 176 436 036 89
              </p>
            </div>
            <p className={style.address_contianer__text3}>ENG / RU</p>
            <div className={style.address_contianer_box}>
              <WhatsAppIcon />
              <p className={style.address_contianer_box2_text}>
                +49 157 381 811 78
              </p>
            </div>
          </div>
          <div>
            <img src={img} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
}
