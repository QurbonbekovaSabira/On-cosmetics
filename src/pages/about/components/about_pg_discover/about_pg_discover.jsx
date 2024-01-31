import React from 'react'
import Style from "./about_pg_discover.module.scss"
import img from "../../../../assets/img/about_pg_discover_sec_img.png"

export const About_pg_discover = () => {
  return (
    <section className={Style.main_discover}>
        <div className="container">
            <div className={Style.main_discover_sup}>
                <h2 className={Style.main_discover_sup_title}>Discover our products</h2>
                <p className={Style.main_discover_sup_text}>We have skincare, body, wellbeing products and amazing frangrance range. All made with love in France.</p>
                <button className={Style.main_discover_sup_btn} type='button'>Shop All</button>
            </div>
        </div>
    </section>
  )
}
