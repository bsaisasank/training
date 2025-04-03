import React from 'react';
import styles from './input.module.scss';

interface InputProps {
  label?: string; // Make label optional
  helperText?: string;
  id: string; // Unique id for accessibility
  value?: string;
  placeholder?: string;
  disabled?: boolean; // New prop for disabling the input
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export const InputField: React.FC<InputProps> = ({
  label,
  helperText,
  id,
  value,
  placeholder,
  disabled = false,
  onChange,
  onKeyUp,
  onBlur,
}) => {
  const isError = !!helperText; // Treat helperText as an error message

  return (
    <div className={styles.inputContainer}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <input
        type="text"
        id={id}
        className={`${styles.input} ${isError ? styles.danger : ''} ${disabled ? styles.disabled : ''}`}
        value={value}
        placeholder={placeholder || (label ? `Enter ${label}` : 'Enter value')}
        onChange={onChange}
        onKeyUp={onKeyUp}
        onBlur={onBlur}
        disabled={disabled} // Apply the disabled attribute
      />
      {helperText && <small className={`${styles.helperText}`}>{helperText}</small>}
    </div>
  );
};
