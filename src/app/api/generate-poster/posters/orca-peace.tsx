import { PosterBackground } from '../components/poster-background';
import { PosterProps, PosterTemplate } from '../components/poster-container';
import { PosterText } from '../components/poster-text';

export const OrcaPeacePoster: React.FC<PosterProps> = ({ textEntries }) => {
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
      <PosterBackground relativeSrcUrl="./poster-templates/orca-peace/background-0.png" />
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
        <PosterText text={text1} style={{ fontSize:"250px", fontFamily: 'Bebas-Regular', top:'110px', width:'100%', color:'#016652'}}/>
        <PosterText text={text2} style={{ fontSize:"120px", fontFamily: 'Bebas-Regular', top:'2750px', width:'100%', color:'#016652'}}/>
      </div>
    </div>
  );
};

export const OrcaPeacePosterTemplate: PosterTemplate = {
  Component: OrcaPeacePoster,
  height: 3200,
  width: 2175,
  lightColor: '#ffffff',
  darkColor: '#016652',
  fonts: [
    {
      name: "Bebas-Regular",
      relativeUrl: "fonts/Bebas-Regular.ttf",
      style: "normal",
    },
  ],
};
