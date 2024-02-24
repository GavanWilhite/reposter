import { PosterBackground } from '../components/poster-background';
import { PosterProps, PosterTemplate } from '../components/poster-container';
import { PosterText } from '../components/poster-text';

export const BareBrainsPoster: React.FC<PosterProps> = ({ textEntries }) => {
  const [text1, text2, text3, text4] = textEntries;

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        position: 'relative',
      }}
    >
      <PosterBackground relativeSrcUrl="./poster-templates/bare-brains/background-0.png" />
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      >
        <PosterText text={text1} align="left" style={{ fontSize:"80px", fontFamily: 'FPN', top:'300px', left:'1400px', width:'30%', color:'#ceeae0'}}/>
        <PosterText text={text2} align="left" style={{ fontSize:"80px", fontFamily: 'FPN', top:'750px', left:'1400px', width:'30%', color:'#f1b500'}}/>
        <PosterText text={text3} align="right" style={{ fontSize:"300px", fontFamily: 'FPN-Bold', top:'2550px', right:"4%", width:'80%', color:'#009067'}}/>
        <PosterText text={text4} align="right" style={{ fontSize:"350px", fontFamily: 'Castle', top:'2750px', right:"2%", width:'98%', color:'#f1b500'}}/>
      </div>
    </div>
  );
};

export const BareBrainsPosterTemplate: PosterTemplate = {
  Component: BareBrainsPoster,
  height: 3200,
  width: 2175,
  lightColor: '#ffffff',
  darkColor: '#2b2b22',
  fonts: [
    {
      name: "Castle",
      relativeUrl: "fonts/castlepressno1.ttf",
      style: "normal",
    },
    {
      name: "FPN",
      relativeUrl: "fonts/fpn1_1.otf",
      style: "normal",
    },
    {
      name: "FPN-Bold",
      relativeUrl: "fonts/fpn1_1.otf",
      style: "normal",
    },
  ],
};
