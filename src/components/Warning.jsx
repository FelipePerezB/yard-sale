import React from 'react';
import sad from "@icons/sad.svg";
import Image from 'next/image';
import styles from "../styles/Warning.module.css";

function Warning({text, instruction}) {
  return (
    <div className={styles["warning"]}>
      <p>{text}</p>
      <Image className={styles["sad-face"]} src={sad} alt=""/>
      <p>{instruction}</p>
    </div>
  );
};

export default Warning;
