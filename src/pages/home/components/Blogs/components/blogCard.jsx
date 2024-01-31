import React from "react";
import style from "./blogCard.module.scss";

export const BlogCard = ({ url, text, data, title }) => {
  return (
    <div className={style.card}>
      <div>
        <img src={url} alt="" />
      </div>
      <div className={style.text_content}>
      <div className={style.textBox}>
        <p className={style.text}>{text}</p>
        <p className={style.text}>{data}</p>
      </div>
      <p className={style.title}>{title}</p>
      </div>
    </div>
  );
};
