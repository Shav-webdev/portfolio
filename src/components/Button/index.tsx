import React, { ReactNode } from 'react';
import './style.scss';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler;
  type?: 'button' | 'submit';
  disabled?: boolean;
}
const Button = ({
  children,
  className,
  onClick,
  type = 'button',
  disabled,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={`btn ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
