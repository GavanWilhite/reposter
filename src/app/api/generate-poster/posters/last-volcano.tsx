import { PosterBackground } from '../components/poster-background';
import { PosterProps, PosterTemplate } from '../components/poster-container';
import { PosterText } from '../components/poster-text';

export const LastVolcanoPoster: React.FC<PosterProps> = ({ textEntries }) => {
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
      <PosterBackground relativeSrcUrl="./poster-templates/last-volcano/background-0.png" />
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
        <PosterText text={text1} align="left" style={{ fontSize:"150px", fontFamily: 'Bebas-Regular', top:'100px', left:'100px', width:'100%', color:'#ffffff'}}/>
        <PosterText text={text2} align="left" style={{ fontSize:"150px", fontFamily: 'Bebas-Regular', top:'250px', left:'100px', width:'100%', color:'#ffffff'}}/>
        <PosterText text={text3} align="center" style={{ fontSize:"80px", fontFamily: 'Bebas-Regular', top:'2550px', width:'100%', color:'#ffffff'}}/>
      </div>
    </div>
  );
};

export const LastVolcanoPosterTemplate: PosterTemplate = {
  Component: LastVolcanoPoster,
  height: 3200,
  width: 2175,
  lightColor: '#ffffff',
  darkColor: '#2b2b22',
  fonts: [
    {
      name: "Bebas-Regular",
      relativeUrl: "fonts/Bebas-Regular.ttf",
      style: "normal",
    },
  ],
};
