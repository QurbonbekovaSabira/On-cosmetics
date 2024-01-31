import React from 'react'
import Style from "./About_pg_feedback.module.scss"
import img1 from "../../../../assets/img/about_pg_sec_img.png"

export const About_pg_feedback = () => {
  return (
    <section className={Style.main_feedback}>
        <div className="container">
            <div className={Style.main_feedback_sup}>
                <div className={Style.main_feedback_sup_img_content}>
                    <img src={img1} alt="img" />
                </div>
                <div className={Style.main_feedback_sup_content}>
                    <h3 className={Style.main_feedback_sup_content_title}>
                    From founder
                    </h3>
                    <p className={Style.main_feedback_sup_content_text}>
                    Dear friends, I would certainly love to meet you all in person, so come and just say hi. If it’s not possible at the moment, I would like to introduce myself‚ I’m Vicky, the founder of the Beauty Shop. I’m certain that new lipstick and body scrub can make your day better.
                    </p>
                    <div className={Style.mini_sup}>
                        <span className={Style.mini_sup_span}></span>
                        <p className={Style.mini_sup_text}>Vicky Underwood</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
