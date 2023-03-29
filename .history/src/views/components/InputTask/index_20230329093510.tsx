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
  const [isEditMode, setIsEditMode] = useState(false)
  const [inputValue, setInputValue] = useState(title)

  return (
    <div className={styles.inputTask}>
      <label htmlFor="">
        <input
          type="checkbox"
          disabled={isEditMode}
          checked={checked}
          className={styles.inputTask__Checkbox}
          onChange={(e) => {
            setChecked(e.target.checked);
            if (e.target.checked) {
              onDone(id);
            }
          }}
        />
        {isEditMode ? (
          <input
            value={inputValue}
            onChange={(evt) => setInputValue(evt.target.value)}
            className={styles.inputTasks__Edit}
          />
        ) : (
          <h3>{title}</h3>
        )}
      </label>
      {isEditMode ? (
        <button
          aria-label="Save"
          className={styles.inputTask__Save}
          onClick={() => {
          onEdited(id, inputValue);
          setIsEditMode(false);
          }}
        />
      ) : (
        <button
          aria-label="Edit"
          className={styles.inputTask__Edit}
          onClick={() => setIsEditMode(true)}
        />
      )}
      <button
        aria-label="Edit"
        className={styles.inputTask__Edit}
        onClick={() => setIsEditMode(true)}
      />
      <button
        aria-label="Remove"
        className={styles.inputTask__Remove}
        onClick={() => {
          if (confirm('Are you sure?')) {
            onRemoved(id);
          }
        }}
      />
    </div>
  );
};

export default InputTask