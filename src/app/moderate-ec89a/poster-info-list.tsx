"use client";
import { useState, useEffect } from "react";
import { PosterInfo } from './poster-info';

interface PosterInfoListProps {
  getRecentPosters: () => Promise<string[]>;
  approve?: (poster: string) => Promise<void>;
  reject?: (poster: string) => Promise<void>;
}

export const PosterInfoList = (props: PosterInfoListProps) => {
  const [posterProps, setPosterProps] = useState<string[]>([]);

  const { approve, reject } = props;

  useEffect(() => {
    const fetchAndUpdatePosters = async () => {
      const posters = await props.getRecentPosters();
      setPosterProps(posters);
    };

    fetchAndUpdatePosters();
    const interval = setInterval(fetchAndUpdatePosters, 2000);
    return () => clearInterval(interval);
  }, []);

  // Adjusted for a grid layout
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", // Adjust minmax for desired size
    gap: "20px", // Space between items
    padding: "20px", // Padding around the grid
    alignItems: "start" // Align items at the start of each cell
  };

  return (
    <div style={gridStyle}>
      {posterProps.map((poster, index) => (
        <PosterInfo key={index} searchParams={poster} approve={approve} reject={reject} />
      ))}
    </div>
  );
};
