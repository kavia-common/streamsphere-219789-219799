import React, { useMemo, useState } from "react";
import styles from "./HomeFeed.module.css";
import ChipRow from "../../components/ChipRow/ChipRow";
import VideoGrid from "../../components/VideoGrid/VideoGrid";

// PUBLIC_INTERFACE
export default function HomeFeed() {
  /** Home feed page: chip filters and video grid. */
  const chips = useMemo(
    () => ["All", "Music", "Live", "Gaming", "Mixes", "Podcasts", "History", "News", "Sports"],
    []
  );

  const [activeChip, setActiveChip] = useState("All");

  const videos = useMemo(
    () => [
      {
        id: "v1",
        title: "Build a YouTube Clone UI in React (Dark Theme)",
        channel: "Dev Studio",
        views: "1.2M views",
        age: "2 weeks ago",
        duration: "12:34",
        thumbSeed: "react-ui",
        avatarSeed: "dev",
      },
      {
        id: "v2",
        title: "JavaScript Patterns You Should Know (2026 Edition)",
        channel: "JS Weekly",
        views: "890K views",
        age: "3 days ago",
        duration: "9:18",
        thumbSeed: "js-patterns",
        avatarSeed: "js",
      },
      {
        id: "v3",
        title: "Live Coding: CSS Grid & Responsive Layouts",
        channel: "Layout Labs",
        views: "210K views",
        age: "1 month ago",
        duration: "2:05:10",
        thumbSeed: "css-grid",
        avatarSeed: "css",
      },
      {
        id: "v4",
        title: "Gaming Highlights: Best Moments Compilation",
        channel: "GameHub",
        views: "4.1M views",
        age: "1 year ago",
        duration: "18:22",
        thumbSeed: "gaming",
        avatarSeed: "gh",
      },
      {
        id: "v5",
        title: "Mix: Chill Beats for Deep Focus",
        channel: "Music Box",
        views: "15M views",
        age: "8 months ago",
        duration: "1:01:11",
        thumbSeed: "chill",
        avatarSeed: "mb",
      },
      {
        id: "v6",
        title: "Podcasts: The Future of Web Platforms",
        channel: "Tech Talk",
        views: "320K views",
        age: "5 days ago",
        duration: "44:03",
        thumbSeed: "podcast",
        avatarSeed: "tt",
      },
      {
        id: "v7",
        title: "How Search Works: Ranking Signals Explained",
        channel: "IBM Technology",
        views: "2.3M views",
        age: "6 months ago",
        duration: "14:09",
        thumbSeed: "search",
        avatarSeed: "ibm",
      },
      {
        id: "v8",
        title: "Movies Trailer: The Dark City (Official Trailer)",
        channel: "Studio Channel",
        views: "9.8M views",
        age: "3 weeks ago",
        duration: "2:31",
        thumbSeed: "trailer",
        avatarSeed: "sc",
      },
    ],
    []
  );

  return (
    <div className={styles.page}>
      <ChipRow chips={chips} active={activeChip} onChange={setActiveChip} />
      <VideoGrid videos={videos} />
    </div>
  );
}
