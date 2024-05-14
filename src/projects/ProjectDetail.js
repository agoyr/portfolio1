import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Paper, Grid, ImageList, ImageListItem,List, ListItemText, ListItem } from '@mui/material';
import ReactPlayer from 'react-player';

function ProjectDetail({ projects }) {
  const { projectId } = useParams();
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return <Typography variant="h6" gutterBottom>Project not found</Typography>;
  }

  // Hero画像のレンダリング
  const renderHeroImage = (url) => (
    <img src={url} alt={project.title} style={{ width: '100%', objectFit: 'cover', maxHeight: '60vh' }} />
  );

  // メディア要素のレンダリング（動画または画像）
  const renderMedia = (url) => (
    <ReactPlayer url={url} controls width="100%" style={{ margin: 'auto' }} />
  );

  // 画像ギャラリーのレンダリング
  const renderImageGallery = (images) => (
    <ImageList cols={3} gap={8}>
      {images.map((img, index) => (
        <ImageListItem key={index}>
          <img src={img} alt={`Gallery  ${index + 1}`} loading="lazy" style={{ width: '100%' }} />
        </ImageListItem>
      ))}
    </ImageList>
  );
   // プロジェクトの情報をリスト形式で表示
   const renderInformationList = (title, data) => (
    <ListItem>
      <ListItemText primary={title} secondary={data.map(line => <Typography component="span" display="block">{line}</Typography>)} />
    </ListItem>
  );

  function PaperSection({project}){
    return (
      <Paper elevation={6} sx={{ padding: 3, margin: 2, maxWidth: '800px', mx: 'auto' }}>
            <Typography variant="h3" component="h1" gutterBottom>
                {project.title}
            </Typography>
            <List>
                {renderInformationList("概要", [project.description])}
                {renderInformationList("使用技術", [project.technologies || "Not specified"])}
                {renderInformationList("実装内容", project.implementation ? project.implementation.split(';') : ["Not specified"])}
                {renderInformationList("工夫点", project.innovations ? project.innovations.split(';') : ["Not specified"])}
                {renderInformationList("学んだ点", project.lessonsLearned ? project.lessonsLearned.split(';') : ["Not specified"])}
            </List>
            {project.videoUrl && renderMedia(project.videoUrl)}
        </Paper>
      // <Paper elevation={6} sx={{ padding: 3, margin: 2 }}>
      //       <Typography variant="h3" component="h1" gutterBottom>
      //         {project.title}
      //       </Typography>
      //       <List>
      //         {renderInformationList("概要", [project.description])}
      //         {renderInformationList("使用技術", [project.technologies || "Not specified"])}
      //         {renderInformationList("実装内容", project.implementation ? project.implementation.split(';') : ["Not specified"])}
      //         {renderInformationList("工夫点", project.innovations ? project.innovations.split(';') : ["Not specified"])}
      //         {renderInformationList("学んだ点", project.lessonsLearned ? project.lessonsLearned.split(';') : ["Not specified"])}
      //       </List>
      //       {project.videoUrl && renderMedia(project.videoUrl)}
      // </Paper>
    //   <Paper elevation={6} sx={{ padding: 3 }}>
    //   <Typography variant="h3" component="h1" gutterBottom>
    //     {project.title}
    //   </Typography>
    //   <Typography variant="body1" paragraph>
    //     {project.description}
    //   </Typography>
    //   <Typography variant="body1" paragraph>
    //     使用技術: {project.technologies || "Not specified"}
    //   </Typography>
    //   {/* Additional information */}
    // </Paper>
    )
  }

  return (
    <Box sx={{ width: '100%', overflow: 'hidden', p: 0 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {project.mediaUrl && renderHeroImage(project.mediaUrl)}
        </Grid>
        <Grid item xs={12}>
          <PaperSection project={project}/>
        </Grid>
        <Grid item xs={12} md={8}>
          {project.images && renderImageGallery(project.images)}
        </Grid>
        <Grid item xs={12} md={4}>
          {/* {project.videoUrl && renderMedia(project.videoUrl)} */}
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProjectDetail;
