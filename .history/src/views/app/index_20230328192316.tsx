import React, { FC } from 'react'

import styles from './index.module.scss'

const index: FC = () => {
  return (
    <div className={styles.article}>
      <h1 className={styles.article__Title}>To Do List</h1>
      <section className={styles.article__Sectiom}></section>
      <section className={styles.article__Sectiom}></section>
    </div>
  );
}

export default index