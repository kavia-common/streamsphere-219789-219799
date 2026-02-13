import React from "react";
import styles from "./VideoCard.module.css";

function initialsFrom(text) {
  const clean = (text || "").trim();
  if (!clean) return "?";
  const parts = clean.split(/\s+/).slice(0, 2);
  return parts.map((p) => p[0]?.toUpperCase()).join("");
}

// A simple deterministic gradient per seed to mimic varied thumbnails without assets.
function gradientFromSeed(seed) {
  let h = 0;
  for (let i = 0; i < seed.length; i += 1) h = (h * 31 + seed.charCodeAt(i)) % 360;
  const h2 = (h + 35) % 360;
  return `linear-gradient(135deg, hsl(${h} 70% 35%), hsl(${h2} 70% 25%))`;
}

// PUBLIC_INTERFACE
export default function VideoCard({ video }) {
  /** Video card for the home grid (thumbnail + title + channel/meta). */
  const thumbBg = gradientFromSeed(video.thumbSeed || video.id);
  const avatarBg = gradientFromSeed(video.avatarSeed || video.channel);

  return (
    <a className={styles.card} href="/" aria-label={`Open video: ${video.title}`}>
      <div className={styles.thumb} style={{ backgroundImage: thumbBg }}>
        <div className={styles.duration} aria-hidden="true">
          {video.duration}
        </div>
      </div>

      <div className={styles.meta}>
        <div className={styles.avatar} style={{ backgroundImage: avatarBg }} aria-hidden="true">
          {initialsFrom(video.channel)}
        </div>

        <div className={styles.text}>
          <div className={styles.title}>{video.title}</div>
          <div className={styles.channel}>{video.channel}</div>
          <div className={styles.stats}>
            {video.views} <span className={styles.dot} aria-hidden="true">•</span> {video.age}
          </div>
        </div>
      </div>
    </a>
  );
}
