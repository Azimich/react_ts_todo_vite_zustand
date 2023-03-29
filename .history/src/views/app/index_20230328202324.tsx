import React, { FC, useEffect } from 'react'
import { useTuDoStore } from '../../data/stores/useToDoStore';
import InputPlus from '../components/InputPlus';

import styles from './index.module.scss';


const App: FC = () => {
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

  // useEffect(() => {
  //   createTask('pppp');
  // }, [createTask]);
  
  return (
    <div className={styles.article}>
      <h1 className={styles.article__Title}>To Do List</h1>
      <section className={styles.article__Sectiom}>
        <InputPlus/>
      </section>
      <section className={styles.article__Sectiom}></section>
    </div>
  );
}

export default App