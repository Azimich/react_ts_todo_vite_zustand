import React, { FC, useEffect } from 'react'
import { useTuDoStore } from '../../data/stores/useToDoStore';
import InputPlus from '../components/InputPlus';
import InputTask from '../components/InputTask';

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

  console.log(33, tasks);
  

  // useEffect(() => {
  //   createTask('pppp');
  // }, [createTask]);
  
  return (
    <div className={styles.article}>
      <h1 className={styles.article__Title}>To Do List</h1>
      <section className={styles.article__Section}>
        <InputPlus
          onAdd={(title) => {
            if (title) {
              createTask(title);
            }
          }}
        />
      </section>
      <section className={styles.article__Section}>
        {!tasks.length && (
          <p className={styles.article__Text}>There is no one task.</p>
        )}
        {tasks.map((item) => {
          return (
            <InputTask 
              onAdd={onAdd}
              id={  id}
              title={  title}
              onDone={  onDone}
              onEdited={  onEdited}
              onRemoved={  onRemoved}
            />
          )
        })}
      </section>
    </div>
  );
}

export default App