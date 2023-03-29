import React, { FC } from 'react'

import styles from './index.module.scss'

interface IInputTask {
  id: string;
  title: string;
  onDone: (id: string) => void;
  onEdited: (id: string, title: string) => void;
  onRemoved: (id: string) => void;
}

const InputTask: FC<IInputTask> = ({ id, title, onDone, onEdited, onRemoved }) => {
  const [checked, setChecked] = use

  return (
    <div>
      <label htmlFor="">
        <input type="checkbox"
          checked={checked}
        />
      </label>
    </div>
  )
};

export default InputTask