import { FC, useEffect, useRef, useState } from 'react'

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
  const editTitleInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isEditMode) {
      editTitleInputRef?.current?.focus();
    }
  }, [isEditMode]);

  return (
    <div className={styles.inputTask}>
      <div className={styles.inputTask__Checkbox__block}>
        <input
          type="checkbox"
          id='zzz'
          disabled={isEditMode}
          checked={checked}
          className={styles.inputTask__Checkbox}
          onChange={(e) => {
            setChecked(e.target.checked);
            if (e.target.checked) {
              setTimeout(() => {
                onDone(id);
              }, 300);
            }
          }}
        />
        <label htmlFor={Math.random}>
          <svg
            width="15"
            height="9"
            viewBox="0 0 11 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </label>
        {isEditMode ? (
          <input
            ref={editTitleInputRef}
            value={inputValue}
            onChange={(evt) => setInputValue(evt.target.value)}
            className={styles.inputTask__Edit__input}
            onKeyDown={(evt) => {
              if (evt.key === 'Enter') {
                onEdited(id, inputValue);
                setIsEditMode(false);
              }
            }}
          />
        ) : (
          <h3>{title}</h3>
        )}
      </div>
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