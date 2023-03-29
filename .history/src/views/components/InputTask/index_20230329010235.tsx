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
            
          }}
        />
      </label>
    </div>
  );
};

export default InputTask