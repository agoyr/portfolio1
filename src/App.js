import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Header from './Header2';
import About from './About';
import Skills from './Skills';
import ProjectSection from './ProjectSection';
import ProjectDetail from './projects/ProjectDetail';
import Contact from './Contact';
import Footer from './Footer2';
import HeroSection from './HeroSection';
import { Element } from 'react-scroll'

//Projects
const projects = [
  { id: '1', title: "Shooting Game", description: `授業で作ったshootingゲームです。Win32APIを用いて作りました。
当たり判定、描画、スコア、弾の弾ける演出など、ほとんど全ての内容を0から作りました`, mediaType: 'image', mediaUrl: '/shoot.png' },
  { id: '2',title: "Flaffy Shot", description: "これはモンスターストライクさんに影響を受けて作成した、ゲームである。", mediaType: 'image', mediaUrl: "/Fluffyimg.jpg" },
  { id: '3',title: "Phantom tale", description: `これは学校における創造工学と呼ばれるチーム開発授業において作ったVRゲームである。
  私が担当したのは敵エネミーのAI部分、メインキャラクターの動作作成のサポート、3Dオプジェクトのテクスチャ周りである。`
  , mediaType: 'image', mediaUrl: "/Phantom.png" },
  { id: '4',title: "音声合成アプリ", description: `これは音声合成（テキストから音声への変換）を行うことが
  できるアプリである。音声合成モデルはVITsによる事前学習モデルをfine-tuningしたことによって作成した。このモデルを動かすためのアプリを
  Flutterを用いて作成した
  `, mediaType: 'image', mediaUrl: "/TTs2.png" },
  { id: '5',title: "DQN の環境拡大に伴う重みの再割り当て", description: "コリドールというボードゲームにおけるファインチューニングに関する研究", mediaType: 'image', mediaUrl: "/RL.png" },
  { id: '6',title: "声質変換における拡散モデルの周波数依存性ノイズの提案 ", description: "音声変換に拡散モデルを適用する研究", mediaType: 'image', mediaUrl: "/VC.png" },
  { id: '7',title: "PortfolioSite", description: "This is another example of a modern project.", mediaType: 'image', mediaUrl: "/Portfolio.png" },
  // More projects can be added here
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
      <Element name="header"/><Header />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <Element name="about"><About /></Element>
              <Element name="skills"/><Skills />
              <Element name="projects"/><ProjectSection projects={projects}/>
              <Element name="contact"/><Contact />
              <Footer />
            </>
          } />
          <Route path="/projects/1" element={<ProjectDetail projects={projects}/>} />
          <Route path="/projects/2" element={<ProjectDetail projects={projects}/>} />
          <Route path="/projects/3" element={<ProjectDetail projects={projects}/>} />
          <Route path="/projects/4" element={<ProjectDetail projects={projects}/>} />
          <Route path="/projects/5" element={<ProjectDetail projects={projects}/>} />
          <Route path="/projects/6" element={<ProjectDetail projects={projects}/>} />
          <Route path="/projects/7" element={<ProjectDetail projects={projects}/>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
