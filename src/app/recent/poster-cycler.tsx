"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

interface PosterCyclerProps {
  getRecentPosters: () => Promise<string[]>;
}

const CYCLE_INTERVAL = 10;
const FETCH_INTERVAL = 10;

export const PosterCycler = (props: PosterCyclerProps) => {
  const [posters, setPosters] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const params = useSearchParams();

  useEffect(() => {
    const paramFetchInterval = params.has("fetch")
        ? parseInt(params.get("fetch")!)
        : undefined;
    const fetchIntervalTime = paramFetchInterval || FETCH_INTERVAL;
    const fetchPosters = async () => {
      const newPosters = await props.getRecentPosters();
      // Update posters only if they have changed
      if (JSON.stringify(newPosters) !== JSON.stringify(posters)) {
        setPosters(newPosters);
      }
    };

    fetchPosters(); // Initial fetch
    const fetchInterval = setInterval(fetchPosters, fetchIntervalTime*1000);
    return () => clearInterval(fetchInterval);
  }, [posters]);

  useEffect(() => {
    const paramCycleInterval = params.has("cycle")
      ? parseInt(params.get("cycle")!)
      : undefined;
    const cycleIntervalTime = paramCycleInterval || CYCLE_INTERVAL;

    const cycleInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % posters.length);
    }, cycleIntervalTime * 1000); // Adjust cycling speed as necessary

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
