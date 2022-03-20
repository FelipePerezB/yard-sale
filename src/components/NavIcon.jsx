import React from 'react'
import styles from "../styles/NavIcon.module.css"
import Image from 'next/image'
import Link from 'next/link'
import cart from "@icons/cart.svg"

function NavIcon({link,img,alt}) {
  // if(img="cart"){
  //   img=cart
  // }

  return (
    <Link className={styles['nav-icon']} href={link}>
      <Image layout="fixed" width={"30"} height="30" src={img} alt={alt}/>
    </Link>    
  )
}

export default NavIcon
