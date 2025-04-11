import React from 'react';
import styles from './typography.module.scss';

interface TypographyProps {
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body'; // Heading levels, defaults to 'body'
  children: React.ReactNode; // Text content to display
  fontFamily?: string; // Optional custom font-family
  fontSize?: string; // Optional custom font-size
  color?: string; // Optional custom text color
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'; // Optional color variants
}

export const Typography: React.FC<TypographyProps> = ({
  component = 'body', // Default to 'body' if no component is provided
  children,
  fontFamily,
  fontSize,
  color,
  variant,
}) => {
  const Component = component; // Dynamically assign the heading level

  // Combine base and specific styles
  const variantClass = variant ? styles[variant] : ''; // Apply variant class only if specified
  const className = `${styles.typography} ${styles[component]} ${variantClass}`.trim(); // Remove extra spaces

  // Additional dynamic styles
  const dynamicStyles = {
    '--custom-font-family': fontFamily || 'var(--font-family)',
    '--custom-font-size': fontSize || 'inherit',
    '--custom-color': variant ? undefined : color || 'var(--text-color)', // Use `inherit` if no color is provided
  } as React.CSSProperties;

  return (
    <Component className={className} style={dynamicStyles}>
      {children}
    </Component>
  );
};
