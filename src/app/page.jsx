"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function RootPage() {
  useEffect(() => {
    if (window.location.hostname === "www.cepat-sehat.com") {
      window.location.replace("www.cepatsehat.com");
    }
    console.log(window.location.hostname, "=====");
  }, []);

  redirect("/en");
}
