import { useEffect, useState } from "react";
import { kv } from "@vercel/kv";
import { PosterList } from "./poster-list";
import { PosterCycler } from "./poster-cycler";
import { useSearchParams } from "next/navigation";

const RECENT_COUNT = 5;

const Page = () => {
  async function getRecentPosters() {
    "use server";
    return await kv.lrange("approved-posters", 0, RECENT_COUNT - 1);
  }

  return (
    <div>
      <PosterCycler getRecentPosters={getRecentPosters} />
    </div>
  );
};

export default Page;
