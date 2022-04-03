import React from 'react';
import styles from "../styles/InformationText.module.css";

function InformationTitle({children}) {
  return (
    <p className={styles['information__title']}>
      {children}
    </p>
  );
};

export default InformationTitle;
