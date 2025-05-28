// App.tsx
import { useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { easyTheme, hardTheme } from './themes.ts';
import ResponsiveAppBar from './Components/ResponsiveAppBar.tsx';
import SelectMode from './Components/SelectMode.tsx';
import QuizManager from './Components/QuizManager.tsx';


export default function App() {
  const [mode, setMode] = useState<'easy' | 'hard'>('easy');
  const theme = mode === 'easy' ? easyTheme : hardTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ResponsiveAppBar />
      <SelectMode mode={mode} setMode={setMode}/>
      <QuizManager mode={mode}/>

      {/* <QuizScreen mode={mode} /> */}
    </ThemeProvider>
  );
}
