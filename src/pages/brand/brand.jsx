import React from 'react'
import { Hero } from '../../components/hero';
import BgImg from "../../assets/img/Rectangle.png"
import styles from "./brand.module.scss";
export const Brand = () => {
  return (
    <section className={styles.brand}>
      <Hero 
      title="About hero ONmacabim" 
      text="Place where our crazy-talented master stylists will not only do a haircut or makeup." />
    </section>
  )
}
