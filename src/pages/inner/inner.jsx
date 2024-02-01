import React from "react";
import { Link, useParams } from "react-router-dom";
import { cards } from "../../pages/products/components/cards/data";
import InnerStyle from "./inner.module.scss";
import { StarIcons } from "../../assets/icon/star-icons";

export const Inner = () => {
  const { id } = useParams();

  const res = cards.filter((i) => i.id == id);

  return (
    <section className={InnerStyle.inner_section}>
      <div className="container">
        {res.map((item) => (
          <div className={InnerStyle.inner_main}>
            <div className={InnerStyle.inner_img__main}>
              <div className={InnerStyle.inner_recomend__main}>
                {item?.recomendImg.map((i) => {
                  return (
                    <img
                      className={InnerStyle.inner_recomend__img}
                      src={i}
                      alt="img"
                    />
                  );
                })}
              </div>
              <img
                className={InnerStyle.inner_main__img}
                src={item.img}
                alt="img"
              />
            </div>

            <div className={InnerStyle.inner_main__des}>
              <h2 className={InnerStyle.inner_des__title}>{item.title}</h2>
              <p className={InnerStyle.inner_des__price}>$ {item.price}</p>
              <p className={InnerStyle.inner_des__text}>{item.infoDes}</p>
              <div className={InnerStyle.inner_des__main_amount}>
                <button className={InnerStyle.inner_des__amount_item}>
                  {item.amountFrom} ml
                </button>
                <button className={InnerStyle.inner_des__amount_item}>
                  {item.amountTo} ml
                </button>
              </div>
              <div className={InnerStyle.inner_des__calc_main}>
                <div className={InnerStyle.inner_calc__price}>
                  <button className={InnerStyle.inner_calc__price_plus}>
                    +
                  </button>
                  <p className={InnerStyle.inner_calc__price_count}>1</p>
                  <button className={InnerStyle.inner_calc__price_minus}>
                    -
                  </button>
                </div>
                <button className={InnerStyle.inner_des__add_btn}>
                  Add to cart
                </button>
              </div>
              <p className={InnerStyle.inner_des__tag}>
                Tags: fragrance , skincare
              </p>
              <div
                className={InnerStyle.inner_des__accardion}
                id={InnerStyle.accardion_first}
              >
                <p>Description</p>
                <strong>+</strong>
              </div>
              <div
                className={InnerStyle.inner_des__accardion}
                id={InnerStyle.accardion_second}
              >
                <p>Reviews (0)</p>
                <strong>+</strong>
              </div>
              <p className={InnerStyle.inner_des__rating}>Your rating</p>
              <StarIcons />

              <div className={InnerStyle.inner_des__checkbox}>
                <input type="checkbox" id="checked" />
                <label htmlFor="checked">
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </label>
              </div>
              <div className={InnerStyle.inner_des__submit_main}>
                <button className={InnerStyle.inner_des__submit_btn}>Submit</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
