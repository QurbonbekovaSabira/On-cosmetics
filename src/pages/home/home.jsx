import React from "react";
import style from "./home.module.scss";
import { HeroHome } from "./components/hero-home";
import { Bestseller } from "./components/bestseller/bestseller";
import { AboutHome } from "./components/about-home/about-home";
import {Blogs} from "./components/Blogs"
import { Settings } from "./components/settings/settings";
import { Advertising } from "./components/advertising/advertising";
export const Home = () => {
  return (
    <>
     <HeroHome/>
     <Bestseller/>
     <AboutHome/>
     <Blogs/>
     <Settings/>
     <Advertising/>
    </>
  );
};
