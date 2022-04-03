import Link from 'next/link';
import React from 'react';
import styles from "../styles/ResendMessage.module.css";

function ResendMessage({spanText, aText}) {
  return (
    <div className={styles['resend-message']}>
      <span>
        { spanText }
      </span>
      <Link href={""} passHref>
        { aText }
      </Link>
    </div>
  );
};

export default ResendMessage;
