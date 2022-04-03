import React from 'react';
import styles from "../styles/NavIcon.module.css";
import Image from 'next/image';

function NavIcon({img,alt}) {

  return (
    <Image 
      className={styles["nav-icon"]} 
      layout="fixed" 
      width={"30"} 
      height="30" 
      src={img} 
      alt={alt}
    />
  );
};

export default NavIcon;
