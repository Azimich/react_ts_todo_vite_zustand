import React, { FC } from 'react'

import styles from './index.module.scss'

interface IInputPlus {
  onAdd: (title: string) => void;
}

const InputPlus: FC<IInputPlus> = ({ onAdd }) => {
  return (
    <div className={styles.inputPlus}>
      <input type={'text'} className={styles.inputPlus__Value} value={""} onChange />
      <button />
    </div>
  );
};

export default InputPlus;