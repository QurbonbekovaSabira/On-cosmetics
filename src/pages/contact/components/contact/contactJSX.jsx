import React from "react";
import style from "./contact.module.scss";

export default function ContactUser() {
  return (
    <div className={style.contact_container}>
      <div className="container">
        <h2 className={style.contact__title}>Drop us a line</h2>
        <p className={style.contact__text}>
          We are here to help. Please complete the short form below and we’ll
          respond as soon as possible.
        </p>
        <form className={style.contact_form}>
          <div className={style.form}>
            <input
              className={style.form_input}
              placeholder="Default"
              type="text"
            />
            <input
              className={style.form_input}
              placeholder="E-mail"
              type="text"
            />
            <input
              className={style.form_input}
              placeholder="Phone"
              type="text"
            />
          </div>
          <div className={style.form2}>
            <input
              className={style.form2__input}
              placeholder="Subject"
              type="text"
            />
          </div>
          <textarea
            className={style.form__commit_input}
            placeholder="Message"
          ></textarea>

          <div className={style.btn_box}>
            <button className={style.btn}>Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
}
