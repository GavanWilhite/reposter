import { PosterBackground } from '../components/poster-background';
import { PosterProps, PosterTemplate } from '../components/poster-container';
import { PosterText } from '../components/poster-text';

export const EraBrutalityPoster: React.FC<PosterProps> = ({ textEntries }) => {
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
      <PosterBackground relativeSrcUrl="./poster-templates/era-brutality/background-0.png" />
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
        <PosterText text={text1} align="center" style={{ fontSize:"330px", fontFamily: 'FPN', top:'100px', left:'5%', width:'90%', color:'#d12c15'}}/>
        <PosterText text={text2} align="right" style={{ fontSize:"450px", fontFamily: 'FPN', top:'460px', left:"5%", width:'90%', color:'#d12c15'}}/>
        <PosterText text={text3} align="left" style={{ fontSize:"200px", fontFamily: 'FPN', top:'2400px', left:"10%", width:'80%', color:'#dacdac'}}/>
      </div>
    </div>
  );
};

export const EraBrutalityPosterTemplate: PosterTemplate = {
  Component: EraBrutalityPoster,
  height: 3200,
  width: 2175,
  lightColor: '#dacdac',
  darkColor: '#d12c15',
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
