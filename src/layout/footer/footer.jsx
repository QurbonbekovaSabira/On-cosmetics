import React from "react";
import style from './footer.module.scss'
import { Logo } from "../../assets/icon/logo";

export const Footer = () => {
  return (
    <footer>
      <div className={style.footer_top}>
        <div className="container">
          <div className={style.footer_links}>
            <div className={style.footer_logo}>
              <Logo/>
            </div>
            <div className={style.footer_social__links}>
              <a href="" className={style.social_link}>

              </a>
              <a href="" className={style.social_link}>

              </a>
              <a href="" className={style.social_link}>

              </a>
              <a href="" className={style.social_link}>

              </a>
              <a href="" className={style.social_link}>

              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={style.footer_bottom}>
        <div className="container">
          <p className={style.footer_text}>© 2021 Beauty Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
