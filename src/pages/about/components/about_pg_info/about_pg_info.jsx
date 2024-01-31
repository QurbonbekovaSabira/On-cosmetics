import React from "react";
import Style from "./about_pg_info.module.scss";
import { RabbitIcon } from "../../../../assets/icon/rabbit-icon.jsx";
import { LeafIcon } from "../../../../assets/icon/leaf-icon.jsx";
import { LoveAboutIcon } from "../../../../assets/icon/loveAbout3-icon.jsx";
import img1 from "../../../../assets/img/about_pg_item_img1.png";
import img2 from "../../../../assets/img/about_pg_item_img2.png";

export const About_pg_info = () => {
  return (
    <section className={Style.main_info}>
      <div className="container">
        <div className={Style.main_info_sup}>
          <ul className={Style.main_info_sup_list}>
            <li className={Style.main_info_sup_list_item}>
              <RabbitIcon />
              <div className={Style.main_info_sup_list_item_content}>
                <h3 className={Style.main_info_sup_list_item_title}>
                  Vegan & cruelty free
                </h3>
                <p className={Style.main_info_sup_list_item_text}>
                  All products are 100% Vegan and have been registered with the
                  Vegan Society. We will never test our products or ingredients
                  on animals nor do we use suppliers who test them on our
                  behalf.
                </p>
              </div>
            </li>
            <li className={Style.main_info_sup_list_item}>
              <LeafIcon />
              <div className={Style.main_info_sup_list_item_content}>
                <h3 className={Style.main_info_sup_list_item_title}>
                  Green beauty
                </h3>
                <p className={Style.main_info_sup_list_item_text}>
                  We avoid any raw materials that are considered toxic or
                  harmful to sensitive skin. If the safety of an ingredient is
                  unclear, we avoid it until more concrete evidence is
                  available.
                </p>
              </div>
            </li>
            <li className={Style.main_info_sup_list_item}>
              <LoveAboutIcon />
              <div className={Style.main_info_sup_list_item_content}>
                <h3 className={Style.main_info_sup_list_item_title}>
                  Made in France
                </h3>
                <p className={Style.main_info_sup_list_item_text}>
                  We avoid any raw materials that are considered toxic or
                  harmful to sensitive skin. If the safety of an ingredient is
                  unclear, we avoid it until more concrete evidence is
                  available.
                </p>
              </div>
            </li>
          </ul>
          <div className={Style.main_info_sup_img_content}>
            <img className={Style.main_info_img1} src={img1} alt="img" />
            <img className={Style.main_info_img2} src={img2} alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
};
