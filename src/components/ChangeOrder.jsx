import React from 'react';
import styles from "../styles/ChangeOrder.module.css";

function ChangeOrder() {
  return (
  <div className={styles['change-order']}>
    <span>
      Order:
    </span>
    <select>
      <option>
        Most recient
      </option>
      <option>
        Most recient
      </option>
    </select>
  </div>
  );
};

export default ChangeOrder;
