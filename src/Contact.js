import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

function Contact() {
  return (
    <Box id="contact" sx={{ mt: 8, mb: 4 }}>
      <Typography variant="h4" gutterBottom>Contact Me</Typography>
      <form>
        <TextField label="Your Name" variant="outlined" fullWidth margin="normal" />
        <TextField label="Your Email" type="email" variant="outlined" fullWidth margin="normal" />
        <TextField label="Message" multiline rows={4} variant="outlined" fullWidth margin="normal" />
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>Send</Button>
      </form>
    </Box>
  );
}

export default Contact;
