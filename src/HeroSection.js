import React from 'react';
import { Box, Typography } from '@mui/material';
import heroImage from './logo192.png'; // Ensure you have a suitable hero image in your public/images folder

function HeroSection() {
    // console.log(`url(${heroImage})`);
    console.log(heroImage);
    console.log('url(/hero-image.jpg)')
  return (
    <Box
      sx={{
        width: '100%',
        height: 500,
        backgroundImage: 'url(/hero-image.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white'
      }}
    >
      <Typography variant="h3" component="h1" gutterBottom>
        Welcome to Yamauchi Ryoga's Site!!
      </Typography>
    </Box>
  );
}

export default HeroSection;
