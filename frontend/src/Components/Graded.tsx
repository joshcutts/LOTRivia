import { Box, Typography, Paper } from '@mui/material';

interface GradedProps {
  userAnswer: string;
  correctAnswer: string;
  result: string;
}

export default function Graded({ userAnswer, correctAnswer, result }: GradedProps) {
  return (
    <Box
      sx={{
        mt: 4,
        display: 'flex',
        justifyContent: 'center',
        px: 2,
        marginBottom: 5
      }}
    >
      <Paper
        elevation={4}
        sx={{
          p: 3,
          maxWidth: 600,
          textAlign: 'left',
          fontFamily: 'Cinzel, serif',
          backgroundColor: 'background.paper',
          border: '2px solid #333',
        }}
      >
        <Typography variant="h6" gutterBottom>
          Grading Result
        </Typography>

        <Typography variant="body1" sx={{ mb: 1 }}>
          <strong>Your Answer:</strong> {userAnswer}
        </Typography>

        <Typography variant="body1" sx={{ mb: 1 }}>
          <strong>Correct Answer:</strong> {correctAnswer}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mt: 2,
            fontWeight: 'bold',
            color: ['great', 'perfect', 'good'].some(word => result.toLowerCase().includes(word)) ? 'green' : 'red'
          }}
        >
          {result}
        </Typography>
      </Paper>
    </Box>
  );
}
