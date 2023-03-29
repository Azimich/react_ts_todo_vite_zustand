import React, { FC, useEffect } from 'react'
import { useTuDoStore } from '../../data/stores/useToDoStore';

import styles from './index.module.scss';


const index: FC = () => {
  const [
    tasks,
    createTask,
    updateTask,
    removeTask
  ] = useTuDoStore((state) => [
    state.tasks,
    state.createTask,
    state.updateTask,
    state.removeTask
  ]); 

  useEffect

  // createTask('pppp')
  console.log(111, tasks);
  
  
  return (
    <div className={styles.article}>
      <h1 className={styles.article__Title}>To Do List</h1>
      <section className={styles.article__Sectiom}></section>
      <section className={styles.article__Sectiom}></section>
    </div>
  );
}

export default index