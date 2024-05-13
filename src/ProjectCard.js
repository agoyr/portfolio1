import React from 'react';
import { Grid, Card, CardContent, Typography, Box , Button, CardActions } from '@mui/material';
import ReactPlayer from 'react-player'; // Ensure you have ReactPlayer installed (`npm install react-player`)
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

function MediaComponent({ type, src }) {
  if (type === 'video') {
    return (
      <Box sx={{ position: 'relative', paddingTop: '56.25%' /* 16:9 Aspect Ratio */, overflow: 'hidden' }}>
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
      <Box sx={{ height: 140, overflow: 'hidden' }}>
        <img
          src={src}
          alt="Project Media"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </Box>
    );
  }
}

function ProjectCard({ id, title, description, mediaType, mediaUrl }) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
        <motion.div whileHover={{ scale: 1.05 }}>
            <Card sx={{ maxWidth: 345, boxShadow: 3, m: 2 /* Margins for spacing around the card */ }}>
                <MediaComponent type={mediaType} src={mediaUrl} />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small" color="primary" component={Link} to={`/projects/${id}`}>
                Learn More
                </Button>
            </CardActions>
            </Card>
      </motion.div>
    </Grid>
  );
}
export default ProjectCard;