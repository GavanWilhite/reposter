import { useEffect, useState } from "react";
import { kv } from "@vercel/kv";
import { PosterList } from "./poster-list";
import { PosterCycler } from './poster-cycler';

const RECENT_COUNT = 5;

const Page = () => {
  async function getRecentPosters() {
    "use server";
    return await kv.lrange("generated-posters", 0, RECENT_COUNT - 1);
  }

  return (
    <div>
      <h1>Recent</h1>
      <PosterCycler getRecentPosters={getRecentPosters} />
    </div>
  );
};

export default Page;
