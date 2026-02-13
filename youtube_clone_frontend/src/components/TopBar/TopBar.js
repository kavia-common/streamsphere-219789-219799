import React, { useState } from "react";
import styles from "./TopBar.module.css";

/**
 * Inline SVG icon set (no external deps).
 * Kept minimal and monochrome to match screenshot.
 */
function Icon({ name, className }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    focusable: "false",
    "aria-hidden": "true",
  };

  switch (name) {
    case "menu":
      return (
        <svg {...common}>
          <path
            fill="currentColor"
            d="M3 6h18v2H3V6Zm0 5h18v2H3v-2Zm0 5h18v2H3v-2Z"
          />
        </svg>
      );
    case "search":
      return (
        <svg {...common}>
          <path
            fill="currentColor"
            d="M10 2a8 8 0 1 1 4.9 14.3l4 4-1.4 1.4-4-4A8 8 0 0 1 10 2Zm0 2a6 6 0 1 0 .001 12.001A6 6 0 0 0 10 4Z"
          />
        </svg>
      );
    case "mic":
      return (
        <svg {...common}>
          <path
            fill="currentColor"
            d="M12 14a3 3 0 0 0 3-3V6a3 3 0 1 0-6 0v5a3 3 0 0 0 3 3Zm-7-3h2a5 5 0 0 0 10 0h2a7 7 0 0 1-6 6.92V21h-2v-3.08A7 7 0 0 1 5 11Z"
          />
        </svg>
      );
    case "create":
      return (
        <svg {...common}>
          <path
            fill="currentColor"
            d="M17 10.5V7.5A2.5 2.5 0 0 0 14.5 5h-9A2.5 2.5 0 0 0 3 7.5v9A2.5 2.5 0 0 0 5.5 19h9a2.5 2.5 0 0 0 2.5-2.5v-3l4 3.2V7.3l-4 3.2ZM15 16.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v9Z"
          />
        </svg>
      );
    case "bell":
      return (
        <svg {...common}>
          <path
            fill="currentColor"
            d="M12 22a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2Zm6-6V11a6 6 0 1 0-12 0v5L4 18v1h16v-1l-2-2Zm-2 1H8v-6a4 4 0 1 1 8 0v6Z"
          />
        </svg>
      );
    default:
      return null;
  }
}

// PUBLIC_INTERFACE
export default function TopBar() {
  /** Top app bar with search and actions. */
  const [query, setQuery] = useState("");

  return (
    <div className={styles.bar}>
      <div className={styles.left}>
        <button className={styles.iconButton} aria-label="Open menu" type="button">
          <Icon name="menu" className={styles.icon} />
        </button>

        <a className={styles.brand} href="/" aria-label="YouTube Home">
          <span className={styles.brandMark} aria-hidden="true">
            <span className={styles.play} />
          </span>
          <span className={styles.brandText}>YouTube</span>
        </a>
      </div>

      <div className={styles.center}>
        <form className={styles.search} role="search" aria-label="Search videos">
          <label className={styles.srOnly} htmlFor="search-input">
            Search
          </label>
          <input
            id="search-input"
            className={styles.searchInput}
            type="text"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className={styles.searchButton} type="submit" aria-label="Search">
            <Icon name="search" className={styles.icon} />
          </button>
        </form>

        <button className={styles.micButton} type="button" aria-label="Search with your voice">
          <Icon name="mic" className={styles.icon} />
        </button>
      </div>

      <div className={styles.right}>
        <button className={styles.iconButton} type="button" aria-label="Create">
          <Icon name="create" className={styles.icon} />
        </button>
        <button className={styles.iconButton} type="button" aria-label="Notifications">
          <Icon name="bell" className={styles.icon} />
        </button>

        <button className={styles.avatarButton} type="button" aria-label="Account">
          <span className={styles.avatar} aria-hidden="true">
            K
          </span>
        </button>
      </div>
    </div>
  );
}
