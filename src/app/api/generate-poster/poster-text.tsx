import React from "react";

interface PosterTextProps extends React.HTMLAttributes<HTMLDivElement>  {
  text: string;
  fontSize?: string;
  fontFamily?: string;
  align?: 'center' | 'left' | 'right';
}

const alignToFlexAlign = {
  center: 'center',
  left: 'flex-start',
  right: 'flex-end',
};

export const PosterText: React.FC<PosterTextProps> = ({ text, fontSize, fontFamily = 'Bebas-Regular', align, ...divProps }) => {
  const { style, ...restDivProps } = divProps;
  align = align || 'center';
  const flexAlign = alignToFlexAlign[align];
  return (
    <div
      style={{
        position: "absolute",
        flexDirection: "column",
        alignItems: flexAlign || 'center',
        fontFamily,
        fontSize,
        display: 'flex',
        ...style
      }}
      {...restDivProps}
    >
      {text}
    </div>
  );
};
