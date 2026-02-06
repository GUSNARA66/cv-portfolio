"use client";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("blue");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  
}
