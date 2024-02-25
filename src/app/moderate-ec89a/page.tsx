import { useEffect, useState } from "react";
import { kv } from "@vercel/kv";
import { PosterInfoList } from "./poster-info-list";

const RECENT_COUNT = 25;

const Page = () => {
  async function getRecentPosters() {
    "use server";
    return await kv.lrange("generated-posters", 0, RECENT_COUNT - 1);
  }
  async function getApprovedPosters() {
    "use server";
    return await kv.lrange("approved-posters", 0, RECENT_COUNT - 1);
  }

  async function approvePoster(poster: string) {
    "use server";
    await kv.lpush("approved-posters", poster);
  }
  async function rejectPoster(poster: string) {
    "use server";
    await kv.lrem("approved-posters", 0, poster);
  }
  async function superRejectPoster(poster: string) {
    "use server";    
    await kv.lrem("generated-posters", 0, poster);
  }

  return (
    <div>
      <h1>Approved Posters</h1>
      <PosterInfoList getRecentPosters={getApprovedPosters} reject={rejectPoster} />
      <h1>Generated Posters</h1>
      <PosterInfoList getRecentPosters={getRecentPosters} approve={approvePoster} reject={superRejectPoster}/>
    </div>
  );
};

export default Page;
