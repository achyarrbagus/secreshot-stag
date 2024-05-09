"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function RootPage() {
  useEffect(() => {
    if (window.location.hostname === "www.cepat-sehat.com") {
      window.location.hostname = "cepatsehat.com";
    }
  }, []);

  redirect("/en");
}
