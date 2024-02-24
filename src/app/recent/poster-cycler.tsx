"use client";
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from "react";

const INTERVAL = 5;

interface PosterCyclerProps {
  getRecentPosters: () => Promise<string[]>;
}

export const PosterCycler = (props: PosterCyclerProps) => {
  const [posters, setPosters] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const params = useSearchParams();

  const paramInterval = params.has("interval")
    ? parseInt(params.get("interval")!)
    : undefined;
  const interval = paramInterval || INTERVAL;

  useEffect(() => {
    const fetchPosters = async () => {
      const newPosters = await props.getRecentPosters();
      // Update posters only if they have changed
      if (JSON.stringify(newPosters) !== JSON.stringify(posters)) {
        setPosters(newPosters);
      }
    };

    fetchPosters(); // Initial fetch
    const fetchInterval = setInterval(fetchPosters, interval * 1000);
    return () => clearInterval(fetchInterval);
  }, [posters, interval]);

  useEffect(() => {
    const cycleInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % posters.length);
    }, 3000); // Adjust cycling speed as necessary

    return () => clearInterval(cycleInterval);
  }, [posters.length]); // Dependency on posters.length to adjust to new poster sets

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        overflow: "hidden",
      }}
    >
      {posters.map((poster, index) => (
        <img
          key={index}
          src={`/api/generate-poster?${poster}`}
          alt={`Poster ${index}`}
          style={{
            maxWidth: "100%",
            maxHeight: "100vh",
            display: currentIndex === index ? "block" : "none",
          }}
        />
      ))}
    </div>
  );
};
