import React from 'react'
import styles from "../styles/InfoMenu.module.css"
import Space from "@components/Space"

function InfoMenu({email}) {
  return (
    <>
    <div className={styles['orders-account']}>
      <a href='/yard-sale/my-orders'>My orders</a>
      <a href='/yard-sale/my-account'>My account</a>
    </div>       
    {/* <Space/> */}
    <div className={styles['account-info']}>
      <span>{email}</span>
      <a href='/yard-sale/login' >Sign out</a>
    </div> 
    </>
  )
}

export default InfoMenu
