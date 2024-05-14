// ProjectCard.js
import React from 'react';
import { Grid, Card, CardContent, Typography, Box, Button, CardActions, Modal, CardActionArea } from '@mui/material';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';

// MediaComponent in ProjectCard.js
function MediaComponent({ type, src }) {
    const [play, setPlay] = React.useState(false);
  
    if (type === 'video') {
      return (
        <Box
          sx={{ position: 'relative', paddingTop: '56.25%' /* 16:9 Aspect Ratio */, overflow: 'hidden' }}
          onMouseEnter={() => setPlay(true)}
          onMouseLeave={() => setPlay(false)}
        >
          <ReactPlayer
            url={src}
            width='100%'
            height='100%'
            playing={play}
            loop
            style={{ position: 'absolute', top: 0, left: 0 }}
            controls={false}
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
const navigate = useNavigate();  // ナビゲーションフックを使用

const handleOpen = () => {
    navigate(`/projects/${id}`);  // 詳細ページへの遷移
};

return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
    <motion.div whileHover={{ scale: 1.05 }}>
        <Card sx={{ maxWidth: 345, boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)", borderRadius: "10px", m: 2 }}>
        <CardActionArea onClick={handleOpen}>
            <MediaComponent type={mediaType} src={mediaUrl} />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {description}
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
    </motion.div>
    </Grid>
);
}

export default ProjectCard;
