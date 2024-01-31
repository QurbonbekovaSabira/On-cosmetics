import React from "react";
import Style from "./about_pg_contact.module.scss";
import { WhatsAppIcon } from "../../../../assets/icon/whatsApp-icon";

export const About_pg_contact = () => {
  return (
    <section className={Style.main_contact}>
      <div className="container">
        <ul className={Style.main_contact_list}>
          <li className={Style.main_contact_list_item}>
            <a className={Style.main_contact_list_item_link} href="#">
              Datenschutzerklärung
            </a>
            <a className={Style.main_contact_list_item_link} href="#">
              Impressum
            </a>
          </li>
          <li className={Style.main_contact_list_item2}>
            <p className={Style.main_contact_list_item2_text}>Adresse:</p>
            <a className={Style.main_contact_list_item2_link} href="#">
              Kaiser-Friedrich-Strasse 19, 10585 Berlin
            </a>
            <p className={Style.main_contact_list_item2_text}>
              Termine nach Vereinbarung
            </p>
              <p className={Style.main_contact_list_item2_text2}>
                RU / DE / UA
              </p>
            <div className={Style.main_contact_list_item2_mini}>
              <WhatsAppIcon />
              <p className={Style.main_contact_list_item2_mini_text}>
                +49 176 436 036 89
              </p>
            </div>
              <p className={Style.main_contact_list_item2_text2}>
              ENG / RU
              </p>
            <div className={Style.main_contact_list_item2_mini}>
              <WhatsAppIcon />
              <p className={Style.main_contact_list_item2_mini_text}>
              +49 157 381 811 78
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
