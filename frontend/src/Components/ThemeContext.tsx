// ThemeContext.tsx
import { createContext, useContext, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { easyTheme, hardTheme } from '../themes';

const ThemeModeContext = createContext({
  mode: 'easy',
  toggleMode: () => {},
});

export const useThemeMode = () => useContext(ThemeModeContext);

export const ThemeModeProvider = ({ children }) => {
  const [mode, setMode] = useState<'easy' | 'hard'>('easy');

  const toggleMode = () => {
    setMode((prev) => (prev === 'easy' ? 'hard' : 'easy'));
  };

  const theme = mode === 'easy' ? easyTheme : hardTheme;

  return (
    <ThemeModeContext.Provider value={{ mode, toggleMode }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
};
