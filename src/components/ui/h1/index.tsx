import React from 'react';
import styles from './typography.module.scss';

interface TypographyProps {
  component: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'; // Heading levels
  value: string; // Text to display
}

export const Typography: React.FC<TypographyProps> = ({ component, value }) => {
  const Component = component; // Dynamically assign the heading level
  return <Component className={styles[component]}>{value}</Component>;
};

// Example usage: <Typography component="h1" value="Kavya" />
