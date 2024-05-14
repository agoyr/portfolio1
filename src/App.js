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
// import { Element } from 'react-scroll'

//Projects
// const projects = [
//   { id: 'shooting',
//     title: "Taiko Shooting",
//     description: `授業で作ったshootingゲームです。Win32APIを用いて作りました。
// 当たり判定、描画、スコア、弾の弾ける演出など、ほとんど全ての内容を0から作りました`, 
//   mediaType: 'image', 
//   mediaUrl: '/shoot2.png', 
//   videoUrl: 'https://youtu.be/YysWJ2mMO9Y',
//   technology: 
//   'C++; Win32API; Visual Studio',
//   implementation: 
//   `画面に表示されるオブジェクトの抽象クラスFlyingObject;
//   操作キャラのクラスShooterクラス;
//   敵キャラの抽象クラスEnemyとその子クラス;
//   弾や敵エネミーの消滅時のParticleクラス;
//   `, 
//   innovations: 
//   `MVCモデルを意識して作成することで、可読性と`, 
//   lessonsLearned:
//   `オブジェクト指向によりまとめて扱うことの便利さ`},
//   { id: 'flaffyShot',title: "Flaffy Shot", description: "これはモンスターストライクさんに影響を受けて作成した、ゲームである。", mediaType: 'image', mediaUrl: "/Fluffyimg.jpg" },
//   { id: 'phantomTale',title: "Phantom tale", description: `これは学校における創造工学と呼ばれるチーム開発授業において作ったVRゲームである。
//   私が担当したのは敵エネミーのAI部分、メインキャラクターの動作作成のサポート、3Dオプジェクトのテクスチャ周りである。`
//   , mediaType: 'image', mediaUrl: "/Phantom.png", videoUrl: '/Project 1.mp4' },
//   { id: 'ttsApp',title: "音声合成アプリ", description: `これは音声合成（テキストから音声への変換）を行うことが
//   できるアプリである。音声合成モデルはVITsによる事前学習モデルをfine-tuningしたことによって作成した。このモデルを動かすためのアプリを
//   Flutterを用いて作成した
//   `, mediaType: 'image', mediaUrl: "/TTs2.png" },
//   { id: 'research1',title: "DQN の環境拡大に伴う重みの再割り当て", description: "コリドールというボードゲームにおけるファインチューニングに関する研究", mediaType: 'image', mediaUrl: "/RL.png" },
//   { id: 'research2',title: "声質変換における拡散モデルの周波数依存性ノイズの提案 ", description: "音声変換に拡散モデルを適用する研究", mediaType: 'image', mediaUrl: "/VC.png" },
//   { id: 'portfolio',title: "PortfolioSite", description: "This is another example of a modern project.", mediaType: 'image', mediaUrl: "/Portfolio.png" },
//   // More projects can be added here
// ];
const projects = [
  {
    "id": "shooting",
    "title": "Taiko Shooting",
    "description": "授業で作ったshootingゲームを本気で改良したもの。Win32APIを用いて作成。 当たり判定、描画、スコア、弾の弾ける演出など、ほとんど全ての内容を0から作成。",
    "mediaType": "image",
    "mediaUrl": "/shoot2.png",
    "videoUrl": "https://youtu.be/YysWJ2mMO9Y",
    "technology": "C++; Win32API; Visual Studio",
    "implementation": "画面に表示されるオブジェクトの抽象クラスFlyingObject; 操作キャラのクラスShooterクラス; 敵キャラの抽象クラスEnemyとその子クラス; 弾や敵エネミーの消滅時のParticleクラス;etc...;",
    "innovations": "MVCモデルを意識して作成することで、保守性、生産性、可読性の向上; Win32API以外のゲームライブラリを使わずに実装; 三角関数を複雑に組み合わせることで予想外の敵の動きを再現;",
    "lessonsLearned": "ポリモーフィズムによりまとめて扱うことの便利さとともにメンバのの場所が分かりづらくなるなどのデメリットなどを直に感じられた; ゲームエンジンがどのように動いているかを細部に立ち入ることで知れた;",
    type: 'Game',
  },
  {
    "id": "flaffyShot",
    "title": "Flaffy Shot",
    "description": "これはモンスターストライクさんに影響を受けて作成したゲームである。引っ張る操作に重力を付加することによって新感覚の操作を提供。",
    "mediaType": "image",
    "mediaUrl": "/Fluffyimg.jpg",
    "videoUrl": "https://youtu.be/H31a7o6ajAk",
    "technology": "C#; Unity;",
    "implementation": "引っ張ることによるキャラの移動; 当たり判定; UI; 画面遷移 各イラスト; アニメーション;",
    "innovations": "重力+引っ張るという操作により、楽しい操作感と難易度のバランスを取れた;",
    "lessonsLearned": "スマホゲームを作る時のポイントを自分なりに整理できた; - なるべく少ない指で操作できた方が良い; - それでいて、操作に一定の難易度を設ける必要がある; - etc..; ゲームを一人で作るのはしんどい…;",
    type: 'Game',
  },
  {
    "id": "phantomTale",
    "title": "Phantom tale",
    "description": "これは学校における創造工学と呼ばれるチーム開発授業において作ったVRゲームである。 私が担当したのは敵エネミーのAI部分、メインキャラクターの動作作成のサポート、3Dオプジェクトのテクスチャ周りである。",
    "mediaType": "image",
    "mediaUrl": "/Phantom.png",
    "videoUrl": "https://youtu.be/bOaigvoSfW8",
    "technology": "Unreal Engine4; ブループリント;",
    "implementation": "敵に関する全般; - アニメーション; - AI; - 技; プレイヤーの機能作成のサポート; PVのシーン撮影;",
    "innovations": "敵全体に共通のクラスを設計することで管理を容易に; 多くのパターンの敵を作成し、プレイヤーを飽きさせない;",
    "lessonsLearned": "それぞれが作ったものを統合させて動作させるのは楽しい!; 慣れないタスクに対して、期日を設定して見積もりを考えながら進めていく難しさ;",
    type: 'Game',
  },
  {
    "id": "ttsApp",
    "title": "音声合成アプリ",
    "description": "これは音声合成（テキストから音声への変換）を行うことができるアプリである。音声合成モデルは事前学習モデルをfine-tuningし作成。UIと状態管理を Flutterで行い、モデル自体はFlaskサーバ上で動作。",
    "mediaType": "image",
    "mediaUrl": "/TTs2.png",
    "videoUrl": "https://youtube.com/shorts/xkvX3dVIg3A?feature=share",
    "technology": "Dart; Flutter; Python; Flask; git; ubuntu;",
    "implementation": "FlutterによるUI作成; Riverpodによる; MVVMベースによる状態管理; 音声合成のファインチューニングモデルの作成; Flaskによる簡易APIサーバの作成; VPS等の設定;",
    "innovations": "MVVMベースで実装することにより、機能をしっかりと分離; 音声合成モデルをローカルで動かすのが難しいので、APIサーバを作ってお願いする;",
    "lessonsLearned": "このようなネイティブアプリやWebアプリにおけるステートがUIを管理する考え方; VPS等サーバやドメインの知識; 音声合成の原理;",
    type: 'NativeApp',
  },
  {
    "id": "research1",
    "title": "DQN の環境拡大に伴う重みの再割り当て",
    "description": "コリドールというボードゲームにおける次元方向のファインチューニングに関する研究。",
    "mediaType": "image",
    "mediaUrl": "/RL.png",
    "videoUrl": "",
    "technology": "python; tensorflow; numpy; DQN;",
    "implementation": "DeepMindのOpenSpielライブラリの活用; 強化学のモデル作成、評価etc…",
    "innovations": "一般的に行われている、事前学習からのfine-tuningを出力層側では買う, 次元方向に行った点;",
    "lessonsLearned": "機械学習にはこの研究で初めて触り始めたこともあり、難しいことだらけだったが、実装していきながらその全体像を学んでこれた;",
    type: 'Research',
  },
  {
    "id": "research2",
    "title": "声質変換における拡散モデルの周波数依存性ノイズの提案",
    "description": "音声変換に拡散モデルを適用する研究。拡散モデルのノイズに周波数依存性を加えた。",
    "mediaType": "image",
    "mediaUrl": "/VC.png",
    "videoUrl": "",
    "technology": "python; pytorch; Diffusion model;",
    "implementation": "DiffVCの論文をベースに提案手法への改良;",
    "innovations": "拡散モデルで使用するノイズに周波数依存性を加えた点;",
    "lessonsLearned": "近年注目されている拡散モデルをなんとなく数式からも理解していけた;",
    type: 'Research',
  },
  {
    "id": "portfolio",
    "title": "PortfolioSite",
    "description": "本サイトである。React, mui, 用いながらモダンなデザインに仕上げた。",
    "mediaType": "image",
    "mediaUrl": "/Portfolio.png",
    "videoUrl": "",
    "technology": "React; mui; node.js",
    "implementation": "muiを用いて各コンポネントの作成、統合; サイトのデザイン;",
    "innovations": "muiを用いたフラットでモダンなデザイン; シンプルだが安っぽく見えにくく;",
    "lessonsLearned": "見やすいサイトを上で、細かな余白であったり、全体とのバランスをとりながらデザインしコーディングすることの難しさを知れた;",
    type: 'Web',
  }
]


function App() {
  return (
    // <ThemeProvider theme={theme}>
    //   <Router>
    //   <Element name="header"/><Header />
    //     <Routes>
    //       <Route path="/" element={
    //         <>
    //           <HeroSection />
    //           <About />
    //           <Element name="skills"/><Skills />
    //           <Element name="projects"/><ProjectSection projects={projects}/>
    //           <Element name="contact"/><Contact />
    //           <Footer />
    //         </>
    //       } />
    //       <Route path="/projects/1" element={<ProjectDetail projects={projects}/>} />
    //       <Route path="/projects/2" element={<ProjectDetail projects={projects}/>} />
    //       <Route path="/projects/3" element={<ProjectDetail projects={projects}/>} />
    //       <Route path="/projects/4" element={<ProjectDetail projects={projects}/>} />
    //       <Route path="/projects/5" element={<ProjectDetail projects={projects}/>} />
    //       <Route path="/projects/6" element={<ProjectDetail projects={projects}/>} />
    //       <Route path="/projects/7" element={<ProjectDetail projects={projects}/>} />
    //     </Routes>
    //   </Router>
    // </ThemeProvider>
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<><HeroSection /><About /><Skills /><ProjectSection projects={projects} /><Contact /><Footer /></>} />
          <Route path="/projects/:projectId" element={<ProjectDetail projects={projects} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
