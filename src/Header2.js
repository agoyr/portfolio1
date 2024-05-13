// Header.js
import React, { useState } from 'react';
import { Box, AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import  MenuIcon  from '@mui/icons-material/Menu';
import { scroller } from 'react-scroll';

function Header() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (isOpen) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(isOpen);
  };

  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      smooth: true,
      offset: -100,
    });
    setOpen(false);  // Automatically close the drawer on selection
  };

  const menuItems = [
    { name: 'Top', link: 'header' },
    { name: 'About', link: 'about' },
    { name: 'Skills', link: 'skills' },
    { name: 'Projects', link: 'projects' },
    { name: 'Contact', link: 'contact' },
  ];

  return (
    <AppBar position="fixed" color="primary" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Portfolio Name
        </Typography>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={toggleDrawer(true)}
          sx={{ display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="right"
          open={open}
          onClose={toggleDrawer(false)}
        >
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.name} disablePadding>
                <ListItemButton onClick={() => scrollToSection(item.link)}>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {menuItems.map((item) => (
            <Button key={item.name} color="inherit" onClick={() => scrollToSection(item.link)}>
              {item.name}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
