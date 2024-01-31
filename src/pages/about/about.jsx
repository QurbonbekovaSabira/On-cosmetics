import React from "react";
import { Hero } from '../../components/hero';
import Style from "./about.module.scss";
import hero_bg from "../../assets/img/about_bg_img.png";
import { About_pg_contact } from "./components/about_pg_contact/about_pg_contact";
import { About_pg_info } from "./components/about_pg_info/about_pg_info";
import { About_pg_feedback } from "./components/about_pg_feedback/about_pg_feedback";
import { About_pg_misson } from "./components/about_pg_misson/about_pg_misson";
import { About_pg_discover } from "./components/about_pg_discover/about_pg_discover";
import { About_pg_team } from "./components/about_pg_team/about_pg_team";

export const About = () => {
  return (
    <>
    <section className={Style.main_about_section}>
      <Hero 
      title="Hallo zusammen!" 
      text="Wir sind der offizielle und einzige ONmacabim-Distributor in  Deutschland."
      />
    </section>
    <About_pg_contact/>
    <About_pg_info/>
    <About_pg_feedback/>
    <About_pg_misson/>
    <About_pg_discover/>
    <About_pg_team/>
    </>
  );
};
