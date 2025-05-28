import { Box, Typography, Grid, Paper } from '@mui/material';
import gandalfEasy from '../assets/gandalf_easy.png'
import gandalfHard from '../assets/gandalf_hard.png'

type Mode = 'easy' | 'hard';

interface SelectModeProps {
  mode: Mode;
  setMode: (mode: Mode) => void;
}

export default function SelectMode({ mode, setMode }: SelectModeProps) {
  const isSelected = (target: Mode) => mode === target;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        p: 2,
      }}
    >
      <Typography variant="h4" sx={{ fontFamily: 'Cinzel, serif' }}>
        Select Difficulty
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        <Grid item>
          <Paper
            elevation={isSelected('easy') ? 10 : 2}
            onClick={() => setMode('easy')}
            sx={{
              border: isSelected('easy') ? '4px solid #8bc34a' : '2px solid transparent',
              borderRadius: 2,
              cursor: 'pointer',
              overflow: 'hidden',
              width: 200,
              height: 260,
              transition: 'all 0.2s ease-in-out',
            }}
          >
            <Box
              component="img"
              src={gandalfEasy}
              alt="Easy Mode"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Paper>
          <Typography sx={{ mt: 1, fontWeight: 'bold' }}>Easy</Typography>
        </Grid>

        <Grid item>
          <Paper
            elevation={isSelected('hard') ? 10 : 2}
            onClick={() => setMode('hard')}
            sx={{
              border: isSelected('hard') ? '4px solid #f44336' : '2px solid transparent',
              borderRadius: 2,
              cursor: 'pointer',
              overflow: 'hidden',
              width: 200,
              height: 260,
              transition: 'all 0.2s ease-in-out',
            }}
          >
            <Box
              component="img"
              src={gandalfHard}
              alt="Hard Mode"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Paper>
          <Typography sx={{ mt: 1, fontWeight: 'bold' }}>Hard</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
