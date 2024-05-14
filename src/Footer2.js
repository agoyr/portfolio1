// Footer.js
import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ p: 3, mt: 4, backgroundColor: 'primary.main', color: 'white', textAlign: 'center' }}>
      <Typography variant="body2">
        © 2024 Yamauchi Ryoga
      </Typography>
    </Box>
  );
}

export default Footer;