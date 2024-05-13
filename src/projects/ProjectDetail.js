import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Paper, Grid } from '@mui/material';
import ReactPlayer from 'react-player';
import { List, ListItem, ListItemText } from '@mui/material';

const CustomListItems = ({ items }) => (
  <Box component="ul" sx={{ padding: 0, margin: 0, listStyleType: 'disc', marginLeft: 3 }}>
    {items.map((item, index) => (
      <Box component="li" key={index} sx={{ marginBottom: 1 }}>
        <Typography variant="body2">{item}</Typography>
      </Box>
    ))}
  </Box>
);

function ProjectDetail({ projects }) {
  const { projectId } = useParams();
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return <Typography variant="h6" gutterBottom>Project not found</Typography>;
  }
  const implementationDetails = project.implementation ? project.implementation.split('; ') : ["Not specified"];
  const technologiesUsed = project.technologies ? project.technologies.split('; ') : ["Not specified"];
  // メディア要素のレンダリング（動画または画像）
  const renderMedia = (type, url) => {
    if (type === 'video') {
      return <ReactPlayer url={url} controls width="100%" />;
    } else {
      return <img src={url} alt={project.title} style={{ width: '100%', height: 'auto', objectFit: 'cover', maxHeight: '60vh' }} />;
    }
  };

  return (
    <Box sx={{ width: '100%', overflow: 'hidden' }}>
      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        <Grid item xs={12}>
          {project.mediaUrl && renderMedia(project.mediaType, project.mediaUrl)}
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={6} sx={{ padding: 3 }}>
            <Typography variant="h3" component="h1" gutterBottom>
              {project.title}
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="概要" secondary={project.description} />
              </ListItem>
              <ListItem>
                <ListItemText primary="使用技術" secondary={<CustomListItems items={technologiesUsed} />} />
              </ListItem>
              <ListItem>
                <ListItemText primary="実装内容" secondary={project.implementation || "Not specified"} />
              </ListItem>
              <ListItem>
                <ListItemText primary="工夫点" secondary={project.innovations || "Not specified"} />
              </ListItem>
              <ListItem>
                <ListItemText primary="学んだ点" secondary={project.lessonsLearned || "Not specified"} />
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProjectDetail;
