'use client'

import { createContext, useState, ReactNode, useContext } from 'react';

export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: String;
  setTheme: (theme: Theme) => void;
}


const ThemeContext = createContext<ThemeContextType>({
    theme: 'dark',
    setTheme: () => {},
});


export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>('dark');
    
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
