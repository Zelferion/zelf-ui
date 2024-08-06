// src/Button.tsx
import React, { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
};

const Button: React.FC<ButtonProps> = ({ children }) => {
  return <button>
    {children}
    </button>;
};

export default Button;

