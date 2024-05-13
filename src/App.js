import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';
import Header from './Header2';
import About from './About';
import Skills from './Skills';
import ProjectSection from './ProjectSection';
import Contact from './Contact';
import Footer from './Footer';
import HeroSection from './HeroSection';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <HeroSection />
      <About />
      <Skills />
      <ProjectSection />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
