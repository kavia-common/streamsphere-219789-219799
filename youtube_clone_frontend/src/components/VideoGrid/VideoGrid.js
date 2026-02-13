import React from "react";
import styles from "./VideoGrid.module.css";
import VideoCard from "../VideoCard/VideoCard";

// PUBLIC_INTERFACE
export default function VideoGrid({ videos }) {
  /** Responsive grid of video cards. */
  return (
    <div className={styles.grid} aria-label="Videos">
      {videos.map((v) => (
        <VideoCard key={v.id} video={v} />
      ))}
    </div>
  );
}
