import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';

function ProjectCard({ title, description, imageUrl }) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
        <CardMedia
          component="img"
          height="140"
          image={imageUrl}
          alt={title}
        />
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
    { title: "Shooting Game", description: "授業で作ったshootingゲームです。Win32APIを用いて作りました。\
    当たり判定、描画、スコア、弾の弾ける演出など、ほとんど全ての内容を0から作りました", imageUrl: "https://example.com/image1.jpg" },
    { title: "Project 2", description: "This is another example of a modern project.", imageUrl: "url(/shooting2.mp4)" },
    // More projects can be added here
  ];

  return (
    projects.map((project, index) => (
      <ProjectCard key={index} {...project} />
    ))
  );
}

export default ProjectSection;
