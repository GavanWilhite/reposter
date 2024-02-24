import { PosterBackground } from '../components/poster-background';
import { PosterProps, PosterTemplate } from '../components/poster-container';
import { PosterText } from '../components/poster-text';

export const SadSpacePoster: React.FC<PosterProps> = ({ textEntries }) => {
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
      <PosterBackground relativeSrcUrl="./poster-templates/sad-space/background-0.png" />
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
        <PosterText text={text1} align="left" style={{ fontSize:"120px", fontFamily: 'Bebas-Regular', top:'250px', left:'10%', width:'80%', color:'#ffffff'}}/>
      </div>
    </div>
  );
};

export const SadSpacePosterTemplate: PosterTemplate = {
  Component: SadSpacePoster,
  height: 3200,
  width: 2175,
  lightColor: '#e2ddd3',
  darkColor: '#92390f',
  fonts: [
    {
      name: "Bebas-Regular",
      relativeUrl: "fonts/Bebas-Regular.ttf",
      style: "normal",
    },
  ],
};
