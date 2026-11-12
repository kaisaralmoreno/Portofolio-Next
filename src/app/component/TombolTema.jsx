
"use client";

import { useEffect, useState } from "react";

export default function TombolTema() {
  const [gelap, setGelap] = useState(false);

  useEffect(() => {
    const tema = localStorage.getItem("tema");
    const aktif = tema === "gelap";

    document.documentElement.classList.toggle("dark", aktif);
    setGelap(aktif);
  }, []);

  function gantiTema() {
    const temaBaru = !gelap;

    document.documentElement.classList.toggle("dark", temaBaru);

    localStorage.setItem(
      "tema",
      temaBaru ? "gelap" : "terang"
    );

    setGelap(temaBaru);
  }

  return (
    <button
      type="button"
      onClick={gantiTema}
      className="rounded-lg bg-aksen px-4 py-2 text-sm font-semibold text-white hover:opacity-80 transition"
    >
      {gelap ? "Mode Terang" : "Mode Gelap"}
    </button>
  );
}
