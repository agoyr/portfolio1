import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';

function Header() {
  const scrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Portfolio
        </Typography>
        <Button color="inherit" onClick={() => scrollTo('about')}>
          About
        </Button>
        <Button color="inherit" onClick={() => scrollTo('skills')}>
          Skills
        </Button>
        <Button color="inherit" onClick={() => scrollTo('projects')}>
          Projects
        </Button>
        <Button color="inherit" onClick={() => scrollTo('contact')}>
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
