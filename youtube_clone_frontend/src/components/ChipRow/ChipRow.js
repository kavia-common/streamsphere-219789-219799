import React from "react";
import styles from "./ChipRow.module.css";

// PUBLIC_INTERFACE
export default function ChipRow({ chips, active, onChange }) {
  /** Horizontal chip selector row (YouTube categories). */
  return (
    <div className={styles.wrap} aria-label="Categories">
      <div className={styles.row}>
        {chips.map((chip) => {
          const isActive = chip === active;
          return (
            <button
              key={chip}
              type="button"
              className={`${styles.chip} ${isActive ? styles.active : ""}`}
              onClick={() => onChange(chip)}
              aria-pressed={isActive}
            >
              {chip}
            </button>
          );
        })}
      </div>
    </div>
  );
}
