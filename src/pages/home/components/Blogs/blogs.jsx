import React from "react";
import style from "./blogs.module.scss";
import { data } from "../../../../data/home-BlogsData";
import { BlogCard } from "./components/blogCard";
export const Blogs = () => {
  return (
    <section className={style.blogs}>
      <div className="container">
        <h2 className={style.title}>Blogs</h2>
        <div className={style.cardBox}>
          {data.map((item) => (
            <BlogCard key={item.id} {...item} />
          ))}
        </div>
        <button className={style.buttonAll}>View All Posts</button>
      </div>
    </section>
  );
};
