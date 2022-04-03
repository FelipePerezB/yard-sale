import React from 'react';
import styles from "../styles/InformationText.module.css";

function InformationText({children}) {
  return (
    <span className={styles['information__text']}>
      {children}
    </span>
  );
};

export default InformationText;
