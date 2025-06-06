import React from 'react';
import styles from './button.module.scss';

interface ButtonProps {
  text?: string;
  icon?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
  type?: 'outline' | 'default' | 'link'; // Added 'link'
  fullWidth?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ text, icon, variant = 'primary', type = 'default', fullWidth = false, onClick }) => {
  const buttonClass = `${styles.button} ${type === 'outline' ? styles.outline : ''} ${
    type === 'link' ? styles.link : ''
  } ${styles[variant]} ${fullWidth ? styles.fullWidth : ''}`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {text && <span className={styles.text}>{text}</span>}
    </button>
  );
};
