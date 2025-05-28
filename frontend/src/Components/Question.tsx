import { Box, Typography, Paper } from '@mui/material';

interface QuestionProps {
  question: string;
}

export default function Question({ question }: QuestionProps) {
  return (
    <Box
      sx={{
        mt: 4,
        display: 'flex',
        justifyContent: 'center',
        px: 2,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          p: 3,
          maxWidth: 600,
          textAlign: 'center',
          backgroundColor: 'background.paper',
          border: '2px solid #333',
          fontFamily: 'Cinzel, serif',
        }}
      >
        <Typography variant="h6">{question}</Typography>
      </Paper>
    </Box>
  );
}
