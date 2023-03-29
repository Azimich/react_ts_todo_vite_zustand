import React, { FC, useState } from 'react'

import styles from './index.module.scss'

interface IInputTask {
  id: string;
  title: string;
  onDone: (id: string) => void;
  onEdited: (id: string, title: string) => void;
  onRemoved: (id: string) => void;
}

const InputTask: FC<IInputTask> = ({ id, title, onDone, onEdited, onRemoved }) => {
  const [checked, setChecked] = useState(false)

  return (
    <div className={styles.inputTask}>
      <label htmlFor="">
        <input 
          type="checkbox" 
          checked={checked} 
          className={styles.inputTask__Checkbox}
          onChange={(e) => {
            setChecked(e.target.checked);
            if (e.target.checked) {
              onDone(id)
            }
          }}
        />
        <h3>{title}</h3>
      </label>
      <button aria-label='Edit'
        className={styles.inputTask__Edit}
        on
      />
      <button/>
    </div>
  );
};

export default InputTask