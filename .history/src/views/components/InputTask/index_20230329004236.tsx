import React, { FC } from 'react'

import styles from './index.module.scss'

interface IInputPlus {
  onAdd: (title: string) => void;
  id: string;
  title: string;
  onDone: (id: string) => void;
  onEdited: (id: string, value: string) => void;
  o
}

const InputTask: FC<IInputPlus> = ({ onAdd }) => {
  return <div>InputTask</div>;
};

export default InputTask