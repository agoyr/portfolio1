// About.js
import React from 'react';
import { Box, Typography } from '@mui/material';

function About() {
  return (
    <Box id="about" sx={{ mt: 8, mb: 4, mx: 'auto', maxWidth: 800, p: 2 }}>
      <Typography variant="h4" gutterBottom>About me</Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        私は現在、名古屋大学大学院情報学研究科に所属しており、音声に関する研究を行っています。
      </Typography>
      <Typography variant="h6">Education</Typography>
      <ul>
        <li>
          <Typography variant="body2">
            2017年 - 2022年：独立行政法人鈴鹿工業高等専学校　電子情報工学科
          </Typography>
          <Typography variant="body2" sx={{ ml: 2 }}>研究室: 青山研究室 - 強化学習</Typography>
        </li>
        <li>
          <Typography variant="body2">
          2022年 - 2024年：独立行政法人鈴鹿工業高等専学校専攻科総合イノベーション工学専攻
          </Typography>
          <Typography variant="body2" sx={{ ml: 2 }}>研究室: 青山研究室 - 音声変換</Typography>
        </li>
        <li>
          <Typography variant="body2">
          2024年 - ：名古屋大学大学院情報学研究科知能システム学専攻
          </Typography>
          <Typography variant="body2" sx={{ ml: 2 }}>研究室: 戸田研究室 - 音声変換</Typography>
        </li>
      </ul>
      <Typography variant="h6">Certification</Typography>
      <ul>
        <li><Typography variant="body2">TOEIC L&R Test 720点 (2023年取得)</Typography></li>
      </ul>
      <Typography variant="h6">Professional Experience</Typography>
      <ul>
        <li><Typography variant="body2">2024 - : 株式会社 TARVO (アルバイト)</Typography></li>
      </ul>
    </Box>
  );
}

export default About;
