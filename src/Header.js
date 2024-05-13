import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link as Scroll } from 'react-scroll';

function Header() {
  return (
    <AppBar position="static" sx={{ width: '100%' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Portfolio
        </Typography>
        <Button>こんにちは</Button>
        <Button>こんにちは</Button>
        <Button color="inherit" href="about">こんにちは</Button>
        <Button
        
        to="about"  // スクロール先のセクションID
        spy={true}           // 現在のセクションを監視
        smooth={true}        // スムーズスクロールを有効化
        offset={-70}         // オフセット値（ヘッダーなどの高さに応じて調整）
        duration={500}       // スクロールの持続時間 (ミリ秒)
        color="primary"      // MUI ボタンの色
        // variant="contained"  // MUI ボタンのスタイル
          >
         Scroll to Section
        </Button> 
      </Toolbar>
    </AppBar>
  );
}

export default Header;
{/* <Scroll to="about" smooth={true}>おはよう</Scroll> */}
        {/* <Button component={()=><Scroll to="about" smooth={true}>おはよう</Scroll>} /> */}
        
        {/* <Button
        component={Link}
        to="about"  // スクロール先のセクションID
        spy={true}           // 現在のセクションを監視
        smooth={true}        // スムーズスクロールを有効化
        offset={-70}         // オフセット値（ヘッダーなどの高さに応じて調整）
        duration={500}       // スクロールの持続時間 (ミリ秒)
        color="primary"      // MUI ボタンの色
        variant="contained"  // MUI ボタンのスタイル
        > */  }
        {/* Scroll to Section
        </Button> */}
        {/* <Button color="inherit" component={Link} to="skills" smooth={true}>Skills</Button>
        <Button color="inherit" component={Link} to="projects" smooth={true}>Projects</Button>
        <Button color="inherit" component={Link} to="contact" smooth={true}>Contact</Button> */}