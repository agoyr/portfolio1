// Skills.js
import React from 'react';
import { Box, Typography, Chip } from '@mui/material';

function Skills() {
  const skills = ["C", "C++","Python", "Flutter","Unity" ,"Unreal Engine","HTML", "CSS", "JavaScript", "React", "Node.js"]; // Add your skills here

  return (
    <Box id="skills" sx={{ mt: 8, mb: 4, mx: 'auto', maxWidth: 800,p:2 }}>
      <Typography variant="h4" gutterBottom>My Skills</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'left', flexWrap: 'wrap', gap: 1 }}>
        {skills.map(skill => (
          <Chip key={skill} label={skill} variant="outlined" />
        ))}
      </Box>
    </Box>
  );
}

export default Skills;
