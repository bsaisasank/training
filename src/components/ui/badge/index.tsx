import React from 'react';
import styles from './badge.module.scss';

interface BadgeProps {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light'; // Theme-based variants
  backgroundColor?: string; // Custom background color override
  textColor?: string; // Custom text color override
  children: React.ReactNode; // Badge content
  className?: string; // Optional additional class name for styling
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'primary', // Default to 'primary' if no variant is provided
  backgroundColor,
  textColor,
  children,
  className,
}) => {
  // Combine base and variant styles
  const variantClass = styles[variant];
  const badgeClass = `${styles.badge} ${variantClass} ${className || ''}`.trim();

  // Dynamic styles for custom overrides
  const dynamicStyles = {
    backgroundColor: backgroundColor || undefined,
    color: textColor || undefined,
  } as React.CSSProperties;

  return (
    <span className={badgeClass} style={dynamicStyles}>
      {children}
    </span>
  );
};
