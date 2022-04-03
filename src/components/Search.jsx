import React from 'react';
import styles from "../styles/Search.module.css";
import Image from 'next/image';

import lens from "@icons/lens.svg";

function Search() {
  return (
    <div className={styles['Search']}>
      <Image alt='search icon' src={lens}  className={styles["Search__img"]} />
      <input placeholder='Search product...' className={styles['SearchInput']} />
    </div>    
  );
};

export default Search;
