import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ p: 3, bgcolor: 'background.paper', textAlign: 'center' }}>
      <Typography variant="body1">
        &copy; {new Date().getFullYear()} Yamauchi Ryoga's Portfolio
      </Typography>
      <Typography variant="body2">
        {/* <Link href="https://example.com">Terms of Service</Link> | <Link href="https://example.com">Privacy Policy</Link> */}
      </Typography>
    </Box>
  );
}

export default Footer;
