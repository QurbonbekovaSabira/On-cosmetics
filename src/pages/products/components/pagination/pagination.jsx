import React from "react";
import PaginationStyle from "./pagination.module.scss";
import { LeftArrowIcon } from "../../../../assets/icon/left-Arrow-icon";

export const Pagination = () => {
  return (
    <ul className={PaginationStyle.pagination_list}>
      <li className={PaginationStyle.pagination_item}>
        <button>1</button>
      </li>
      <li className={PaginationStyle.pagination_item}>
        <button>2</button>
      </li>
      <li className={PaginationStyle.pagination_item}>
        <button>3</button>
      </li>
      <li className={PaginationStyle.pagination_item}>
        <button>...</button>
      </li>
      <li className={PaginationStyle.pagination_item}>
        <button>9</button>
      </li>
      <li
        className={PaginationStyle.pagination_item}
        id={PaginationStyle.pagination_next__icon}
      >
        <button>
          <LeftArrowIcon />
        </button>
      </li>
    </ul>
  );
};
