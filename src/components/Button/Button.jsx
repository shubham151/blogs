import React from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.css";

/**
 * Reusable Button Component
 * @param {Object} props - Button props
 * @param {'primary' | 'secondary' | 'outline'} props.variant - Button style variant
 * @param {'sm' | 'md' | 'lg'} props.size - Button size
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.href - Link destination (renders as Link)
 * @param {string} props.to - React Router Link destination
 * @param {boolean} props.disabled - Disabled state
 * @param {React.ReactNode} props.children - Button content
 * @param {React.ReactNode} props.startIcon - Icon before text
 * @param {React.ReactNode} props.endIcon - Icon after text
 * @param {Function} props.onClick - Click handler
 * @param {Object} props.rest - Additional props
 */

function Button({
  variant = "primary",
  size = "md",
  className = "",
  href,
  to,
  disabled = false,
  children,
  startIcon,
  endIcon,
  onClick,
  ...rest
}) {
  const buttonClasses = [
    styles.button,
    styles[`button--${variant}`],
    styles[`button--${size}`],
    disabled && styles["button--disabled"],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  // Button content with icons
  const buttonContent = (
    <>
      {startIcon && <span className={styles.startIcon}>{startIcon}</span>}
      {children}
      {endIcon && <span className={styles.endIcon}>{endIcon}</span>}
    </>
  );

  // Render as React Router Link
  if (to && !disabled) {
    return (
      <Link to={to} className={buttonClasses} {...rest}>
        {buttonContent}
      </Link>
    );
  }

  // Render as external link
  if (href && !disabled) {
    return (
      <a href={href} className={buttonClasses} {...rest}>
        {buttonContent}
      </a>
    );
  }

  // Render as button
  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      {...rest}
    >
      {buttonContent}
    </button>
  );
}

export default Button;
