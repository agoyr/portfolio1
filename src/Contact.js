// Contact.js
import React from 'react';
import { Box, Typography, Link } from '@mui/material';

function Contact() {
  return (
    <Box id="contact" sx={{ mt: 8, mb: 4, mx: 'auto', maxWidth: 800, p:2 }}>
      <Typography variant="h4" gutterBottom>Contact Me</Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Name: 山内 凌我
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Email: <Link href="yamauchi.ryoga.w2@s.mail.nagoya-u.ac.jp">yamauchi.ryoga.w2@s.mail.nagoya-u.ac.jp</Link>
      </Typography>
      <Typography variant="body1">
        GitHub: <Link href="https://github.com/agoyr" target="_blank">agoyr</Link>
      </Typography>
    </Box>
  );
}

export default Contact;
