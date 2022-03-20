import React from 'react'
import styles from "../styles/NavIcon.module.css"
import Image from 'next/image'
import Link from 'next/link'
import cart from "@icons/cart.svg"

function NavIcon({img,alt, iconFunction}) {
  // if(img="cart"){
  //   img=cart
  // }

  return (
    <Image 
      className={styles["nav-icon"]} 
      layout="fixed" 
      width={"30"} 
      height="30" 
      src={img} 
      alt={alt}
    />
  )
}

export default NavIcon
