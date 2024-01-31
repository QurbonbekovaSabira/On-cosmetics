import React from "react";
import ProductStyle from "./products.module.scss";
import { PrCards } from "./components/cards";
import { PrSelectIcon } from "../../assets/icon/pr-select-icon";
import { FilterBar } from "./components/filterBar";
import { Hero } from "../../components/hero/hero";
import { Newsletter } from "../../components/newsletter";

export const Products = () => {
  return (
    <>
      <section className={ProductStyle.product_hero}>
        <Hero
          title="Carefully selected beauty products"
          text="Our team carefully selects only the best products that have toxic-free formulas and are not tested on animals."
        />
      </section>
      <div className="container">
        <div className={ProductStyle.product_sorting}>
          <hp className={ProductStyle.product_sorting__title}>
            Home / Shop All
          </hp>
          <div className={ProductStyle.sorting_select__main}>
            <select className={ProductStyle.sorting_select}>
              <option value="">Defoult sorting</option>
              <option value="Sort by popularity">Sort by popularity</option>
              <option value="Sort by average rating">
                Sort by average rating
              </option>
              <option value="Sort by latest">Sort by latest</option>
              <option value="Sort by price: low to high">
                Sort by price: low to high
              </option>
              <option value="Sort by price: high to low">
                Sort by price: high to low
              </option>
            </select>
            <div className={ProductStyle.sorting_select__icon}>
              <PrSelectIcon />
            </div>
          </div>
        </div>
        <div className={ProductStyle.product_main}>
          <FilterBar />
          <PrCards />
        </div>
        <Newsletter />
      </div>
    </>
  );
};
