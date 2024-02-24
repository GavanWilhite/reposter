import { useEffect, useState } from "react";
import { kv } from "@vercel/kv";
import { PosterList } from "./poster-list";

const RECENT_COUNT = 5;

const Page = () => {
  async function getRecentPosters() {
    "use server";
    return await kv.lrange("generated-posters", 0, RECENT_COUNT - 1);
  }

  return (
    <div>
      <h1>Recent</h1>
      <PosterList getRecentPosters={getRecentPosters} />
    </div>
  );
};

export default Page;
