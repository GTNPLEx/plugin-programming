import React, { ReactNode } from 'react';

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Add your theme provider implementation here
  return <div>{children}</div>;
};

export default ThemeProvider;
