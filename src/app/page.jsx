"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function RootPage() {
  useEffect(() => {
    if (window.location.hostname === "www.cepat-sehat.com") {
      window.location.replace("https://www.cepatsehat.com/");
    }
  }, []);

  return redirect("/en");
}
