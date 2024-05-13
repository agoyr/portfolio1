// Header2.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
// import { AnchorLink as Link } from 'react-anchor-link-smooth-scroll';
import { scroller } from 'react-scroll'

function Header() {
  return (
    <AppBar position="fixed" color="primary" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Portfolio Name
        </Typography>
        <Button color="inherit" onClick={()=>scroller.scrollTo('header',{smooth: true,})}>Top</Button>
        <Button color="inherit" onClick={()=>scroller.scrollTo('about',{smooth: true,offset:-100,})}>About</Button>
        <Button color="inherit" onClick={()=>scroller.scrollTo('skills',{smooth: true,offset:-100,})}>Skills</Button>
        <Button color="inherit" onClick={()=>scroller.scrollTo('projects',{smooth: true,offset:-100,})}>Projects</Button>
        <Button color="inherit" onClick={()=>scroller.scrollTo('contact',{smooth: true, offset:-100,})}>Contact</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;