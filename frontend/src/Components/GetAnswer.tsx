import { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

interface GetAnswerProps {
  onSubmitAnswer: ( userAnswer: string) => void;
}

export default function GetAnswer({ onSubmitAnswer }: GetAnswerProps) {
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    onSubmitAnswer(input.trim());
    setInput('');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 2,
        px: 2,
      }}
    >
      <Typography variant="h5" sx={{ mb: 2, fontFamily: 'Cinzel, serif' }}>
        Enter your answer
      </Typography>

      <TextField
        variant="outlined"
        placeholder="Type your answer here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        sx={{ width: '100%', maxWidth: 500 }}
      />

      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        sx={{ mt: 2 }}
      >
        Submit
      </Button>
    </Box>
  );
}
