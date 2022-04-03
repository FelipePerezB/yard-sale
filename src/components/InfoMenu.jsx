import Link from 'next/link';
import React from 'react';
import styles from "../styles/InfoMenu.module.css";

function InfoMenu({email}) {
  return (
    <>
      <div className={styles['orders-account']}>
        <Link href='/yard-sale/my-orders'>My orders</Link>
        <Link href='/yard-sale/my-account'>My account</Link>
      </div>       
      <div className={styles['account-info']}>
        <span>{email}</span>
        <Link href='/yard-sale/login' >Sign out</Link>
      </div> 
    </>
  );
};

export default InfoMenu;
