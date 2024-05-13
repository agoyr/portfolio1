import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

function Header() {
  return (
    <AppBar position="static" sx={{ width: '100%' }}>
      <Toolbar>
        <Typography variant="h6">
          My Portfolio
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;


