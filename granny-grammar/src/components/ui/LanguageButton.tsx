import * as React from "react";

export function LanguageButton() {
  return (
    <button className="transition-transform transform hover:scale-105">
      <img
        src="/setnewlanguage.png"
        alt="Set New Language"
        className="w-30 h-12" // Adjust width and height as needed
      />
    </button>
  );
}