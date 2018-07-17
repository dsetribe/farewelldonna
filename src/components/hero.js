import React from 'react'
import styles from './hero.module.css'

export default ({ person }) => (
  <div className={styles.hero}>
    <img
      className={styles.heroImage}
      src={`${person.node.image.file.url}`}
      alt=""
    />
    <div className={styles.heroDetails}>
      <h3 className={styles.heroHeadline}>{person.node.name}</h3>
      <p className={styles.heroTitle}>{person.node.title}</p>
      <p>{person.node.shortBio.shortBio}</p>
    </div>
  </div>
)
