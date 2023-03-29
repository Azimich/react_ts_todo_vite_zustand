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
      <section className={styles.article__Section__Tasks}>
        {!tasks.length && (
          <p className={styles.article__Text}>There is no one task.</p>
        )}
        {tasks.map((item) => {
          return (
            <InputTask
              key={item.id}
              id={item.id}
              title={item.title}
              onDone={removeTask}
              onEdited={updateTask}
              onRemoved={removeTask}
            />
          );
        })}
      </section>
    </div>
  );
}

export default App