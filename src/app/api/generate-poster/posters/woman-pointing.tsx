import { PosterBackground } from '../components/poster-background';
import { PosterProps, PosterTemplate } from '../components/poster-container';
import { PosterText } from '../components/poster-text';

export const WomanPointingPoster: React.FC<PosterProps> = ({ textEntries }) => {
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
      <PosterBackground relativeSrcUrl="./poster-templates/woman-pointing/background-0.png" />
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
        <PosterText text={text1} style={{ fontSize:"650px", fontFamily: 'Bebas-Regular', top:'0', width:'100%', color:'#c04335'}}/>
        <PosterText text={text2} align='left' style={{ fontSize:"180px", fontFamily: 'Bebas-Regular', top:'2100px', width:'50%', left:'45%', color:'#2b2b22'}}/>
        <PosterText text={text3} align='left' style={{ fontSize:"300px", fontFamily: 'Bebas-Regular', top:'2250px', width:'50%', left:'45%', color:'#2b2b22'}}/>
        <PosterText text={text4} align='center' style={{ fontSize:"300px", fontFamily: 'Bebas-Regular', top:'2500px', width:'100%', color:'#2b2b22'}}/>
      </div>
    </div>
  );
};

export const WomanPointingPosterTemplate: PosterTemplate = {
  Component: WomanPointingPoster,
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
