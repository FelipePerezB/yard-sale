import React from 'react'
// import "../styles/Title.module.css"
import styles from "../styles/Title.module.css"
import Image from 'next/image'

import logo from "@icons/logo.svg"

function Title() {
  return (
    <section className={styles.title}>
      <Image 
        width={"30"}
        height="30"
        alt='logo yard sale' 
        className={styles['title__logo']} 
        src={logo}
      />
      <p className={styles["title__text--active"]}>YARD</p>
      <p className={styles["title__text"]}>Sale</p>
    </section>

  )
}

export default Title
