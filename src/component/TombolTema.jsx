
"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

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
    <Button
      type="button"
      onClick={gantiTema}
      variant="default"
      className="bg-aksen text-white hover:opacity-80"
    >
      {gelap ? "Mode Terang" : "Mode Gelap"}
    </Button>
  );
}
