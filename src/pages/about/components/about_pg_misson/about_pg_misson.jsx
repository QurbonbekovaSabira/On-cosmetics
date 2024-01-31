import React from 'react'
import Style from "./about_pg_misson.module.scss"

export const About_pg_misson = () => {
  return (
    <section className={Style.main_misson}>
        <div className="container">
            <div className={Style.main_sup}>
                <h2 className={Style.main_sup_title}>Our Mission</h2>
                <p className={Style.main_sup_text}>“For a long time I was looking to create a new beauty brand that is different. Our beauty experts use ingredients that work and that everyone understands. ”</p>
            </div>
        </div>
    </section>
  )
}
