import React, { FC, useCallback, useState } from 'react'

import styles from './index.module.scss'

interface IInputPlus {
  onAdd: (title: string) => void;
}

const InputPlus: FC<IInputPlus> = ({ onAdd }) => {

  const [inputValue, setInputValue] = useState('')
  const addTask = useCallback(() => {
    onAdd(inputValue)
    setInputValue('')
  }, [inputValue])

  return (
    <div className={styles.inputPlus}>
      <input
        type={'text'}
        className={styles.inputPlus__Value}
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        onKeyDown={(event)}
      />
      <button 
        onClick={() => {}} 
        aria-label="Add" 
        className={styles.inputPlus__Button} 
      />
    </div>
  );
};

export default InputPlus;