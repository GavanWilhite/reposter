import React from 'react';
import { getHostPrefixedUrl } from './utils/host-prefix';

interface PosterBackgroundProps {
  relativeSrcUrl: string;
}

export const PosterBackground: React.FC<PosterBackgroundProps> = ({ relativeSrcUrl }) => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        display: 'flex',
      }}
    >
      <img
        style={{
          width: '100%',
          height: '100%',
        }}
        src={getHostPrefixedUrl(relativeSrcUrl)}
        alt="Poster Background"
      />
    </div>
  );
};
