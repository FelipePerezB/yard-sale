import React from 'react';
import styles from "../styles/Subtitle.module.css";

function Subtitle({children}) {
  return (
    <h1 className={styles['subtitle']} >
      {children}
    </h1>    
  );
};

export default Subtitle;
