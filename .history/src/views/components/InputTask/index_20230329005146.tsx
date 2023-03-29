import React, { FC } from 'react'

import styles from './index.module.scss'

interface IInputTask {
  onAdd: (title: string) => void;
  id: string;
  title: string;
  onDone: (id: string) => void;
  onEdited: (id: string, title: string) => void;
  onRemoved: (id: string) => void;
}

const InputTask: FC<IInputTask> = ({ onAdd, id, title, onDone, onEdited, onRemoved }) => {
  return <div>InputTask</div>;
};

export default InputTask