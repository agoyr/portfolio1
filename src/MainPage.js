import React from 'react';
import { Box } from '@mui/material';
import Header from './Header2';
import HeroSection from './HeroSection';
import ProjectSection from './ProjectSection';

function MainPage() {
  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <Header />
      <HeroSection />
      <ProjectSection />
    </Box>
  );
}

export default MainPage;
