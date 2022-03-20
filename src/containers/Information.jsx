import React from 'react'
import InformationText from '@components/InformationText'
import InformationTitle from '@components/InformationTitle'
import styles from "../styles/InformationText.module.css"

function Information({ title,text }) {
  return (
  <section className={styles["information"]}>
    <InformationTitle>
      { title }
    </InformationTitle>
    <InformationText>
      { text }
    </InformationText>
  </section>
  )
}

export default Information
