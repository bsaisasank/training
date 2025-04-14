import React from 'react';
import styles from './typography.module.scss';

interface TextPart {
  text: string; // The text content for this part
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'; // Optional variant for this part
}

interface TypographyProps {
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body'; // Heading levels, defaults to 'body'
  children?: React.ReactNode; // Text content to display (if not using parts)
  parts?: TextPart[]; // Array of text parts with individual variants
  family?: string; // Optional custom font-family (renamed from fontFamily)
  size?: string; // Optional custom font-size (renamed from fontSize)
  color?: string; // Optional custom text color (renamed from color)
  className?: string; // Optional additional class name for styling
}

export const Typography: React.FC<TypographyProps> = ({
  component = 'body', // Default to 'body' if no component is provided
  children,
  parts,
  family,
  size,
  color,
}) => {
  const Component = component; // Dynamically assign the heading level

  // Combine base styles
  const className = `${styles.typography} ${styles[component]}`.trim();

  // Additional dynamic styles
  const dynamicStyles = {
    '--custom-font-family': family || 'var(--font-family)',
    '--custom-font-size': size || 'inherit',
    '--custom-color': color || 'var(--text-color)',
  } as React.CSSProperties;

  return (
    <Component className={className} style={dynamicStyles}>
      {parts
        ? parts.map((part, index) => (
            <span
              key={index}
              className={part.variant ? `${styles[part.variant]} ${styles.part} ${className}` : styles.part}
            >
              {part.text}
            </span>
          ))
        : children}
    </Component>
  );
};
