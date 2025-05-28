import { useState } from 'react';
import { Box, Typography, TextField, Button, Stack } from '@mui/material';

interface GetInputProps {
  onFind: (query: string) => void;
  onRandom: () => void;
}

export default function GetInput({ onFind, onRandom }: GetInputProps) {
  const [input, setInput] = useState('');

  const handleFindClick = () => {
    onFind(input.trim());
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
        Describe the type of LOTR trivia question you want
      </Typography>

      <TextField
        variant="outlined"
        placeholder="Find a question related to..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        sx={{ width: '100%', maxWidth: 500 }}
      />

      <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
        <Button variant="contained" color="primary" onClick={handleFindClick}>
          Find
        </Button>
        <Button variant="contained" color="primary" onClick={onRandom}>
          Random
        </Button>
      </Stack>
    </Box>
  );
}
