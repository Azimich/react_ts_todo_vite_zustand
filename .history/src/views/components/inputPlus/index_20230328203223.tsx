import React, { FC, useState } from 'react'

import styles from './index.module.scss'

interface IInputPlus {
  onAdd: (title: string) => void;
}

const InputPlus: FC<IInputPlus> = ({ onAdd }) => {

  const [inputValue, setInputValue] = useState('')

  return (
    <div className={styles.inputPlus}>
      <input
        type={'text'}
        className={styles.inputPlus__Value}
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button 
        onClick={() => {}}
        aria-label
      />
    </div>
  );
};

export default InputPlus;