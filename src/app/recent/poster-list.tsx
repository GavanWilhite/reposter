"use client";
import { useState, useEffect } from "react";

interface PosterListProps {
  getRecentPosters: () => Promise<string[]>;
}

export const PosterList = (props: PosterListProps) => {
  const [posterProps, setPosterProps] = useState<string[]>([]);

  useEffect(() => {
    props.getRecentPosters().then(setPosterProps);
    const interval = setInterval(() => {
      props.getRecentPosters().then(setPosterProps);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {posterProps.map((poster, index) => (
        <div key={index}>
          {poster}
          <img
            key={index}
            src={`/api/generate-poster?${poster}`}
            style={{
              maxWidth: "100%",
              margin: "20px",
            }}
          />
        </div>
      ))}
    </div>
  );
};
