import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

function ProjectDetail({ projects }) {
  let { projectId } = useParams();
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return <Typography variant="h6">Project not found</Typography>;
  }

  return (
    <Box>
      <Typography variant="h4">{project.title}</Typography>
      <img src={project.imageUrl} alt={project.title} style={{ maxWidth: '100%' }} />
      <Typography paragraph>{project.description}</Typography>
      {/* ここに動画や追加のテキストを表示 */}
    </Box>
  );
}

export default ProjectDetail;
