import React, { FC } from 'react'

import styles from './index.module.scss'

interface IInputPlus {
  onAdd: (title: string) => void;
}

const InputTask: FC<IInputPlus> = ({ onAdd }) => {
  return <div>InputTask</div>;
};

export default InputTask