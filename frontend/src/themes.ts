// themes.ts
import { createTheme } from '@mui/material/styles';

export const easyTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#81c784' },
    background: { default: '#f1f8e9' },
  },
});

export const hardTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#f44336' },
    background: { default: '#121212' },
  },
});
