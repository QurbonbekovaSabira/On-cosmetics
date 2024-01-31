import React from "react";
import style from "./settings.module.scss";
import { MessegaIcon } from "../../../../assets/icon/messega-icon";
import { BigArrowIcon } from "../../../../assets/icon/bigArrow-icon";
import { PhoneIcon } from "../../../../assets/icon/phone-icon";
import {SmsIcon} from "../../../../assets/icon/sms-icon"
export const Settings = () => {
  return (
    <section className={style.settings}>
      <div className="container">
        <h2 className={style.title}>How can we help?</h2>
        <ul className={style.list}>
          <li className={style.item}>
            <div className={style.imgBox}>
              <MessegaIcon />
            </div>
            <div>
              <p className={style.subTitle}>Frequently asked questions</p>
              <p className={style.text}>
                If you have questions about products, orders or account info,
                you may find answer in our FAQ.
              </p>
              <div className={style.desc_box}>
                <p className={style.desc}>View FAQ</p>
                <a href="#">
                  <BigArrowIcon />
                </a>
              </div>
            </div>
          </li>
          <li className={style.item}>
            <div className={style.imgBox}>
              <PhoneIcon />
            </div>
            <div>
              <p className={style.subTitle}>Give us a call</p>
              <p className={style.text}>
                You can always give us a call: Mon to Fri from 9 am till 7 pm
                EST.
              </p>
              <a href="tel:+44 678 94830" className={style.desc}>
                +44 678 94830
              </a>
            </div>
          </li>
          <li className={style.item}>
            <div className={style.imgBox}>
              <SmsIcon />
            </div>
            <div>
              <p className={style.subTitle}>Drop us a line</p>
              <p className={style.text}>
              Drop us a line and we will get back to you as soon as possible.
              </p>
              <a href="mailto:hello@example.com" className={style.desc}>hello@example.com</a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
