import React, { FC } from 'react'

import styles from './index.module.scss'

const index: FC = () => {
  return (
    <div className={styles.article}>
      <h1 className={styles.article}>To Do List</h1>
    </div>
  );
}

export default index