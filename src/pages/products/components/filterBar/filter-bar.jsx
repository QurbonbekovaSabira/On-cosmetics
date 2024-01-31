import React from "react";
import FilterStyle from "./filter.module.scss";

export const FilterBar = () => {
  return (
    <div>
      <h2 className={FilterStyle.filter_title}>Filter by color</h2>
      <ul className={FilterStyle.filter_color_list}>
        <li className={FilterStyle.filter_color_items}>
          <input
            className={FilterStyle.filter_color_items_checkbox}
            type="checkbox"
          />
          <p className={FilterStyle.filter_color_items_text}>Black</p>
          <p className={FilterStyle.filter_color_items_count}>(1)</p>
        </li>
        <li className={FilterStyle.filter_color_items}>
          <input
            className={FilterStyle.filter_color_items_checkbox}
            type="checkbox"
          />
          <p className={FilterStyle.filter_color_items_text}>Blue</p>
          <p className={FilterStyle.filter_color_items_count}>(5)</p>
        </li>
        <li className={FilterStyle.filter_color_items}>
          <input
            className={FilterStyle.filter_color_items_checkbox}
            type="checkbox"
          />
          <p className={FilterStyle.filter_color_items_text}>Green</p>
          <p className={FilterStyle.filter_color_items_count}>(8)</p>
        </li>
        <li className={FilterStyle.filter_color_items}>
          <input
            className={FilterStyle.filter_color_items_checkbox}
            type="checkbox"
          />
          <p className={FilterStyle.filter_color_items_text}>Red</p>
          <p className={FilterStyle.filter_color_items_count}>(3)</p>
        </li>
      </ul>

      <h2 className={FilterStyle.filter_category_title}>Filter by category</h2>
      <ul className={FilterStyle.filter_category_list}>
        <li className={FilterStyle.filter_color_items}>
          <input
            className={FilterStyle.filter_color_items_checkbox}
            type="checkbox"
          />
          <p className={FilterStyle.filter_color_items_text}>Uncategorized</p>
          <p className={FilterStyle.filter_color_items_count}>(1)</p>
        </li>
        <li className={FilterStyle.filter_color_items}>
          <input
            className={FilterStyle.filter_color_items_checkbox}
            type="checkbox"
          />
          <p className={FilterStyle.filter_color_items_text}>Bestsellers</p>
          <p className={FilterStyle.filter_color_items_count}>(5)</p>
        </li>
        <li className={FilterStyle.filter_color_items}>
          <input
            className={FilterStyle.filter_color_items_checkbox}
            type="checkbox"
          />
          <p className={FilterStyle.filter_color_items_text}>Body</p>
          <p className={FilterStyle.filter_color_items_count}>(8)</p>
        </li>
        <li className={FilterStyle.filter_color_items}>
          <input
            className={FilterStyle.filter_color_items_checkbox}
            type="checkbox"
          />
          <p className={FilterStyle.filter_color_items_text}>Fragrance</p>
          <p className={FilterStyle.filter_color_items_count}>(3)</p>
        </li>
        <li className={FilterStyle.filter_color_items}>
          <input
            className={FilterStyle.filter_color_items_checkbox}
            type="checkbox"
          />
          <p className={FilterStyle.filter_color_items_text}>Jo Malone</p>
          <p className={FilterStyle.filter_color_items_count}>(3)</p>
        </li>
        <li className={FilterStyle.filter_color_items}>
          <input
            className={FilterStyle.filter_color_items_checkbox}
            type="checkbox"
          />
          <p className={FilterStyle.filter_color_items_text}>Masks</p>
          <p className={FilterStyle.filter_color_items_count}>(5)</p>
        </li>
        <li className={FilterStyle.filter_color_items}>
          <input
            className={FilterStyle.filter_color_items_checkbox}
            type="checkbox"
          />
          <p className={FilterStyle.filter_color_items_text}>Organic Body</p>
          <p className={FilterStyle.filter_color_items_count}>(8)</p>
        </li>
        <li className={FilterStyle.filter_color_items}>
          <input
            className={FilterStyle.filter_color_items_checkbox}
            type="checkbox"
          />
          <p className={FilterStyle.filter_color_items_text}>Organic Hair</p>
          <p className={FilterStyle.filter_color_items_count}>(3)</p>
        </li>
        <li className={FilterStyle.filter_color_items}>
          <input
            className={FilterStyle.filter_color_items_checkbox}
            type="checkbox"
          />
          <p className={FilterStyle.filter_color_items_text}>
            Organic Skincare
          </p>
          <p className={FilterStyle.filter_color_items_count}>(1)</p>
        </li>
        <li className={FilterStyle.filter_color_items}>
          <input
            className={FilterStyle.filter_color_items_checkbox}
            type="checkbox"
          />
          <p className={FilterStyle.filter_color_items_text}>
            Organic Wellbeing
          </p>
          <p className={FilterStyle.filter_color_items_count}>(5)</p>
        </li>
        <li className={FilterStyle.filter_color_items}>
          <input
            className={FilterStyle.filter_color_items_checkbox}
            type="checkbox"
          />
          <p className={FilterStyle.filter_color_items_text}>Parfume</p>
          <p className={FilterStyle.filter_color_items_count}>(8)</p>
        </li>
        <li className={FilterStyle.filter_color_items}>
          <input
            className={FilterStyle.filter_color_items_checkbox}
            type="checkbox"
          />
          <p className={FilterStyle.filter_color_items_text}>Sunscreens</p>
          <p className={FilterStyle.filter_color_items_count}>(3)</p>
        </li>
      </ul>

      <div className={FilterStyle.filter_price}>
        <h2 className={FilterStyle.filter_price__title}>Filter by Price</h2>
        <input className={FilterStyle.filter_price__range} type="range" />
        <p className={FilterStyle.filter_price__text}>Price: $10 - $100</p>
      </div>
    </div>
  );
};
