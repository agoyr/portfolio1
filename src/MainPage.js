import React from 'react';
import { Container, Grid } from '@mui/material';
import Header from './Header';
import HeroSection from './HeroSection';
import ProjectSection from './ProjectSection';

function MainPage() {
  return (
    <Container maxWidth="xl" disableGutters>
      <Header />
      <HeroSection />
      <Grid container spacing={4}>
        <ProjectSection />
      </Grid>
    </Container>
  );
}

export default MainPage;

