"use client";

import { useEffect, useState } from "react";

export default function ClientSquare() {
  const [color, setColor] = useState("bg-blue-300");
  useEffect(() => {
    async function getColor() {
      const response = await fetch("/api/color");
      const apiColor = await response.json();
      setColor(apiColor.color);
    }
    getColor();
  }, []);
  return (
    <div
      className={`h-52 w-52 ${color}`}
      onClick={() =>
        setColor((prev) =>
          prev === "bg-blue-300" ? "bg-red-300" : "bg-blue-300"
        )
      }
    ></div>
  );
}
