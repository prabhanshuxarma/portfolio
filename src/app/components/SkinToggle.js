"use client";
import { useEffect, useState } from "react";

export default function SkinToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="shadow-sm rounded-full flex items-center justify-center w-10 h-10 border dark:border-white border-gray-100"
    >
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
}
