import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import ReactPlayer from 'react-player'; // Ensure you have ReactPlayer installed (`npm install react-player`)

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

function ProjectCard({ title, description, mediaType, mediaUrl }) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
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
      </Card>
    </Grid>
  );
}

function ProjectSection() {
 const projects = [
    { title: "Shooting Game", description: `授業で作ったshootingゲームです。Win32APIを用いて作りました。
当たり判定、描画、スコア、弾の弾ける演出など、ほとんど全ての内容を0から作りました`, mediaType: 'image', mediaUrl: '/shoot.png' },
    { title: "Flaffy Shot", description: "これはモンスターストライクさんに影響を受けて作成した、ゲームである。", mediaType: 'image', mediaUrl: "/Fluffyimg.jpg" },
    { title: "Phantom tale", description: `これは学校における創造工学と呼ばれるチーム開発授業において作ったVRゲームである。
    私が担当したのは敵エネミーのAI部分、メインキャラクターの動作作成のサポート、3Dオプジェクトのテクスチャ周りである。`
    , mediaType: 'image', mediaUrl: "/Phantom.png" },
    { title: "音声合成アプリ", description: `これは音声合成（テキストから音声への変換）を行うことが
    できるアプリである。音声合成モデルはVITsによる事前学習モデルをfine-tuningしたことによって作成した。このモデルを動かすためのアプリを
    Flutterを用いて作成した
    `, mediaType: 'image', mediaUrl: "/TTs2.png" },
    { title: "DQN の環境拡大に伴う重みの再割り当て", description: "コリドールというボードゲームにおけるファインチューニングに関する研究", mediaType: 'image', mediaUrl: "/RL.png" },
    { title: "声質変換における拡散モデルの周波数依存性ノイズの提案 ", description: "音声変換に拡散モデルを適用する研究", mediaType: 'image', mediaUrl: "/VC.png" },
    { title: "PortfolioSite", description: "This is another example of a modern project.", mediaType: 'image', mediaUrl: "/Portfolio.png" },
    // More projects can be added here
  ];

  return (
    <Grid container justifyContent="center" alignItems="center" spacing={2} sx={{ p: 4 /* Padding around the grid for better margins */ }}>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </Grid>
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