import React, { FC } from 'react'

import stykes from './index.module.scss'

interface IInputPlus {
  onAdd: (title: string) => void;
}

const InputPlus: FC<IInputPlus> = ({}) => {
  return <div>123</div>;
};

export default InputPlus;