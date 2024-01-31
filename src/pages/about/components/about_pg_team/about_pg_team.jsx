import React from 'react'
import Style from "./about_pg_team.module.scss"
import img from "../../../../assets/img/about_pg_team_sec_img.png"

export const About_pg_team = () => {
  return (
    <section className={Style.main_team}>
        <div className="container">
            <div className={Style.main_team_sup}>
                <div className={Style.main_team_sup_text_content}>
                    <h3 className={Style.main_team_sup_text_content_title}>
                    Join our team
                    </h3>
                    <p className={Style.main_team_sup_text_content_text}>
                    We are always looking for great professionals and will be happy to increase our team with your talent. You can view our open positions or simply send us an email.
                    </p>
                    <button className={Style.main_team_sup_text_content_btn} type='button'>
                    View Positions
                    </button>
                </div>
                <div className={Style.main_team_sup_img_content}>
                    <img src={img} alt="img" />
                </div>
            </div>
        </div>
    </section>
  )
}
