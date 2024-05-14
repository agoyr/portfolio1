import React, { useState } from 'react';
import { Grid, Button, Menu, MenuItem, Typography, Box } from '@mui/material';
import ProjectCard from './ProjectCard';

function ProjectSection({ projects }) {
  const [filter, setFilter] = useState('All');
  const [anchorEl, setAnchorEl] = useState(null); // メニューのアンカー要素を管理

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget); // メニューを開く
  };

  const handleClose = () => {
    setAnchorEl(null); // メニューを閉じる
  };

  const handleMenuItemClick = (filterValue) => {
    setFilter(filterValue); // フィルター値を設定
    handleClose(); // メニューを閉じる
  };

  const filteredProjects = projects.filter((project) => {
    return filter === 'All' || project.type === filter;
  });

  return (
    // <div id="projects">
    //   <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
    //   <Typography variant="h4" component="h2" >
    //     Project Section
    //   </Typography>
    //   <Button
    //     aria-controls="simple-menu"
    //     aria-haspopup="true"
    //     onClick={handleClick}
    //     variant="text"
    //     // color="primary"
    //     // sx={{ mb: 2 }}
    //   >
    //     Filter Projects
    //   </Button>
    //   <Menu
    //     id="simple-menu"
    //     anchorEl={anchorEl}
    //     keepMounted
    //     open={Boolean(anchorEl)}
    //     onClose={handleClose}
    //   >
    //     <MenuItem onClick={() => handleMenuItemClick('All')}>All</MenuItem>
    //     <MenuItem onClick={() => handleMenuItemClick('Web')}>Web</MenuItem>
    //     <MenuItem onClick={() => handleMenuItemClick('Mobile')}>Mobile</MenuItem>
    //   </Menu>
    //   </Box>
    //   <Grid container justifyContent="center" alignItems="center" spacing={2} sx={{ p: 4 }}>
    //     {filteredProjects.map((project, index) => (
    //       <ProjectCard key={index} {...project} />
    //     ))}
    //   </Grid>
    // </div>
    <Box id="projects">
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2} sx={{ mt: 8, mb: 0, mx: 'auto', maxWidth: 800, px: 2 }}>
        <Typography variant="h4" component="h2">
          Projects
        </Typography>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
          variant="text"
        >
          Filter Projects
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => handleMenuItemClick('All')}>All</MenuItem>
          <MenuItem onClick={() => handleMenuItemClick('Game')}>Game</MenuItem>
          <MenuItem onClick={() => handleMenuItemClick('NativeApp')}>NativeApp</MenuItem>
          <MenuItem onClick={() => handleMenuItemClick('Web')}>Web</MenuItem>
          <MenuItem onClick={() => handleMenuItemClick('Research')}>Research</MenuItem>
        </Menu>
      </Box>
      {/* <Box sx={{ width: '100%' }}> */}
      <Grid container justifyContent="center" alignItems="center" spacing={2} sx={{ px: 4,py:2 }}>
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </Grid>
      {/* </Box> */}
    </Box>
  );
}

export default ProjectSection;



// const projects = [
//     { title: "Shooting Game", description: `授業で作ったshootingゲームです。Win32APIを用いて作りました。
// 当たり判定、描画、スコア、弾の弾ける演出など、ほとんど全ての内容を0から作りました`, mediaType: 'video', mediaUrl: '/shooting2.mp4' },
//     { title: "Project 2", description: "This is another example of a modern project.", mediaType: 'image', mediaUrl: "url(/shooting2.mp4)" },
//     { title: "Project 2", description: "This is another example of a modern project.", mediaType: 'image', mediaUrl: "url(/shooting2.mp4)" },
//     { title: "Project 2", description: "This is another example of a modern project.", mediaType: 'image', mediaUrl: "url(/shooting2.mp4)" },
//     { title: "Project 2", description: "This is another example of a modern project.", mediaType: 'image', mediaUrl: "url(/shooting2.mp4)" },
//     // More projects can be added here
//   ];

// function MediaComponent({ type, src }) {
//   if (type === 'video') {
//     return (
//       <Box sx={{ position: 'relative', paddingTop: '56.25%' /* 16:9 Aspect Ratio */, overflow: 'hidden' }}>
//         <ReactPlayer
//           url={src}
//           width='100%'
//           height='100%'
//           style={{ position: 'absolute', top: 0, left: 0 }}
//           controls // Show video controls
//         />
//       </Box>
//     );
//   } else {
//     return (
//       <Box sx={{ height: 140, overflow: 'hidden' }}>
//         <img
//           src={src}
//           alt="Project Media"
//           style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//         />
//       </Box>
//     );
//   }
// }

// function ProjectCard({ id, title, description, mediaType, mediaUrl }) {
//   return (
//     <Grid item xs={12} sm={6} md={4} lg={3}>
//       <Card sx={{ maxWidth: 345, boxShadow: 3, m: 2 /* Margins for spacing around the card */ }}>
//         <MediaComponent type={mediaType} src={mediaUrl} />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             {title}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             {description}
//           </Typography>
//         </CardContent>
//         <CardActions>
//         <Button size="small" color="primary" component={Link} to={`/projects/${id}`}>
//           Learn More
//         </Button>
//       </CardActions>
//       </Card>
//     </Grid>
//   );
// }