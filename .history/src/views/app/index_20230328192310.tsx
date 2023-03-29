import React, { FC } from 'react'

import styles from './index.module.scss'

const index: FC = () => {
  return (
    <div className={styles.article}>
      <h1 className={styles.article_Title}>To Do List</h1>
      <section className={styles.articleSectiom}></section>
      <section className={styles.articleSectiom}></section>
    </div>
  );
}

export default index