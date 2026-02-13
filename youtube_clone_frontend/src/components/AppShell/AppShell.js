import React from "react";
import styles from "./AppShell.module.css";
import TopBar from "../TopBar/TopBar";
import SidebarNav from "../SidebarNav/SidebarNav";
import HomeFeed from "../../pages/HomeFeed/HomeFeed";

// PUBLIC_INTERFACE
export default function AppShell() {
  /** Application shell for the YouTube-like layout. */
  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <TopBar />
      </header>

      <aside className={styles.sidebar} aria-label="Primary navigation">
        <SidebarNav />
      </aside>

      <main className={styles.main} aria-label="Home feed">
        <HomeFeed />
      </main>
    </div>
  );
}
