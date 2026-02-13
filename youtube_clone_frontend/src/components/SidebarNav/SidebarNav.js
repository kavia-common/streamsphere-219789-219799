import React from "react";
import styles from "./SidebarNav.module.css";

function SidebarIcon({ name, className }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    focusable: "false",
    "aria-hidden": "true",
  };

  switch (name) {
    case "home":
      return (
        <svg {...common}>
          <path
            fill="currentColor"
            d="M12 3 3 10v11h6v-7h6v7h6V10l-9-7Z"
          />
        </svg>
      );
    case "shorts":
      return (
        <svg {...common}>
          <path
            fill="currentColor"
            d="M10 3h4l-1 2h-2l1 2h3.5A2.5 2.5 0 0 1 18 9.5v9A2.5 2.5 0 0 1 15.5 21h-7A2.5 2.5 0 0 1 6 18.5v-9A2.5 2.5 0 0 1 8.5 7H12l-1-2H9l1-2Z"
          />
          <path fill="var(--bg-canvas)" d="M11 10.5v6l5-3-5-3Z" />
        </svg>
      );
    case "subs":
      return (
        <svg {...common}>
          <path
            fill="currentColor"
            d="M4 4h16v2H4V4Zm0 4h16v2H4V8Zm0 4h10v2H4v-2Zm12 0 6 4-6 4v-8Z"
          />
        </svg>
      );
    case "history":
      return (
        <svg {...common}>
          <path
            fill="currentColor"
            d="M13 3a9 9 0 1 0 8.95 10h-2.02A7 7 0 1 1 13 5a6.9 6.9 0 0 1 4.95 2.05L15 10h7V3l-2.63 2.63A8.97 8.97 0 0 0 13 3Zm-1 4h2v5l4 2-1 1.73-5-2.73V7Z"
          />
        </svg>
      );
    case "playlist":
      return (
        <svg {...common}>
          <path
            fill="currentColor"
            d="M4 5h12v2H4V5Zm0 4h12v2H4V9Zm0 4h8v2H4v-2Zm10 0 6 4-6 4v-8Z"
          />
        </svg>
      );
    case "videos":
      return (
        <svg {...common}>
          <path
            fill="currentColor"
            d="M3 7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v.7l4-2.7v14l-4-2.7V17a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"
          />
        </svg>
      );
    case "watchlater":
      return (
        <svg {...common}>
          <path
            fill="currentColor"
            d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2Zm1 5v5.1l3.2 1.9-1 1.7L11 13V7h2Z"
          />
        </svg>
      );
    case "like":
      return (
        <svg {...common}>
          <path
            fill="currentColor"
            d="M2 21h4V9H2v12Zm20-11c0-1.1-.9-2-2-2h-6.3l.9-4.4.02-.24a1 1 0 0 0-.29-.7L13 2 7.6 7.4A2 2 0 0 0 7 8.8V19c0 1.1.9 2 2 2h7a2 2 0 0 0 1.9-1.4l3-8.3c.07-.2.1-.4.1-.6v-.7Z"
          />
        </svg>
      );
    case "trending":
      return (
        <svg {...common}>
          <path
            fill="currentColor"
            d="M16 6 14 8l2 2-3 3-2-2-4 4 1.4 1.4L11 13l2 2 4.4-4.4-2-2L17.4 6H16Z"
          />
          <path
            fill="currentColor"
            d="M4 19h16v2H4v-2Zm0-16h16v2H4V3Z"
            opacity="0.25"
          />
        </svg>
      );
    case "shopping":
      return (
        <svg {...common}>
          <path
            fill="currentColor"
            d="M7 4h-2l-1 2v2h2l3.6 7.6-1.35 2.45A1 1 0 0 0 9.1 22H19v-2H9.42a.25.25 0 0 1-.22-.37L10 18h7.45a2 2 0 0 0 1.8-1.1l3.58-6.9A1 1 0 0 0 21.95 8H7.42L7 7h14V5H7.84L7 4Z"
          />
        </svg>
      );
    case "music":
      return (
        <svg {...common}>
          <path
            fill="currentColor"
            d="M12 3v10.55A4 4 0 1 0 14 17V7h6V3h-8Z"
          />
          <path
            fill="currentColor"
            d="M4 5h6v2H4V5Zm0 4h6v2H4V9Zm0 4h6v2H4v-2Z"
            opacity="0.35"
          />
        </svg>
      );
    case "movies":
      return (
        <svg {...common}>
          <path
            fill="currentColor"
            d="M4 6h16v14H4V6Zm2 2v2h2V8H6Zm0 4v2h2v-2H6Zm0 4v2h2v-2H6Zm10-8v2h2V8h-2Zm0 4v2h2v-2h-2Zm0 4v2h2v-2h-2Z"
          />
        </svg>
      );
    default:
      return null;
  }
}

function Divider() {
  return <div className={styles.divider} role="separator" />;
}

function SectionLabel({ children }) {
  return <div className={styles.sectionLabel}>{children}</div>;
}

function NavItem({ icon, label, active = false, avatar = null }) {
  return (
    <a
      className={`${styles.item} ${active ? styles.active : ""}`}
      href="/"
      aria-current={active ? "page" : undefined}
    >
      <span className={styles.itemIcon}>
        {avatar ? (
          <span className={styles.subAvatar} aria-hidden="true">
            {avatar}
          </span>
        ) : (
          <SidebarIcon name={icon} className={styles.icon} />
        )}
      </span>
      <span className={styles.itemLabel}>{label}</span>
    </a>
  );
}

// PUBLIC_INTERFACE
export default function SidebarNav() {
  /** Left navigation sidebar matching the YouTube home layout. */
  return (
    <nav className={styles.nav}>
      <NavItem icon="home" label="Home" active />
      <NavItem icon="shorts" label="Shorts" />
      <NavItem icon="subs" label="Subscriptions" />

      <Divider />

      <SectionLabel>
        You <span className={styles.chev} aria-hidden="true">›</span>
      </SectionLabel>
      <NavItem icon="videos" label="Your channel" />
      <NavItem icon="history" label="History" />
      <NavItem icon="playlist" label="Playlists" />
      <NavItem icon="videos" label="Your videos" />
      <NavItem icon="watchlater" label="Watch later" />
      <NavItem icon="like" label="Liked videos" />

      <Divider />

      <SectionLabel>Subscriptions</SectionLabel>
      <NavItem label="IBM Technology" avatar="I" />
      <NavItem label="Google Developers" avatar="G" />
      <NavItem label="Traversy Media" avatar="T" />
      <NavItem label="Fireship" avatar="F" />

      <Divider />

      <SectionLabel>Explore</SectionLabel>
      <NavItem icon="trending" label="Trending" />
      <NavItem icon="shopping" label="Shopping" />
      <NavItem icon="music" label="Music" />
      <NavItem icon="movies" label="Movies" />
    </nav>
  );
}
