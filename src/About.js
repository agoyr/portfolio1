import React from 'react';
import { Box, Typography } from '@mui/material';

function About() {
  return (
    <Box id="about" sx={{ mt: 8, mb: 4 }}>
      <Typography variant="h4" gutterBottom>About Me</Typography>
      <Typography variant="body1">
        I am a professional with a background in [your field]. Over the years, I have accumulated skills and experiences in areas such as...
      </Typography>
    </Box>
  );
}

export default About;
