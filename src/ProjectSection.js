import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import ReactPlayer from 'react-player'; // Ensure you have ReactPlayer installed (`npm install react-player`)

function MediaComponent({ type, src }) {
  if (type === 'video') {
    return (
      <Box sx={{ position: 'relative', paddingTop: '56.25%' /* 16:9 Aspect Ratio */ }}>
        <ReactPlayer
          url={src}
          width='100%'
          height='100%'
          style={{ position: 'absolute', top: 0, left: 0 }}
          controls // Show video controls
        />
      </Box>
    );
  } else {
    return (
      <CardMedia
        component="img"
        height="140"
        image={src}
        alt="Project Media"
      />
    );
  }
}

function ProjectCard({ title, description, mediaType, mediaUrl }) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
        <MediaComponent type={mediaType} src={mediaUrl} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

function ProjectSection() {
  const projects = [
    { title: "Shooting Game", description: `授業で作ったshootingゲームです。Win32APIを用いて作りました。
当たり判定、描画、スコア、弾の弾ける演出など、ほとんど全ての内容を0から作りました`, mediaType: 'video', mediaUrl: '/shooting2.mp4' },
    { title: "Project 2", description: "This is another example of a modern project.", mediaType: 'image', mediaUrl: "url(/shooting2.mp4)" },
    { title: "Project 2", description: "This is another example of a modern project.", mediaType: 'image', mediaUrl: "url(/shooting2.mp4)" },
    { title: "Project 2", description: "This is another example of a modern project.", mediaType: 'image', mediaUrl: "url(/shooting2.mp4)" },
    { title: "Project 2", description: "This is another example of a modern project.", mediaType: 'image', mediaUrl: "url(/shooting2.mp4)" },
    // More projects can be added here
  ];

  return (
    <Grid container spacing={4}>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </Grid>
  );
}

export default ProjectSection;
