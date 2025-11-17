import React from "react";
import "./LoadingSpinner.scss";

export default function LoadingSpinner({ visible }) {
  if (!visible) return null;

  return (
    <div className="loading-overlay">
      <div className="spinner"></div>
    </div>
  );
}
