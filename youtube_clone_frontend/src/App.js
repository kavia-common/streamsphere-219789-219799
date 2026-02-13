import React from "react";
import "./App.css";

import AppShell from "./components/AppShell/AppShell";

// PUBLIC_INTERFACE
function App() {
  /**
   * Main application entry component.
   * Renders the YouTube-like home screen (header, sidebar, feed).
   */
  return <AppShell />;
}

export default App;
