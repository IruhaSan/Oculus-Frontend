/* eslint-disable react/require-default-props */
import React, { FC } from 'react';

interface IProps {
    className?: string;
    onClick?: { (): void }
}

const Button: FC<IProps> = ({ children, className, onClick }) => (
  <button
    type="button"
    className={className}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
