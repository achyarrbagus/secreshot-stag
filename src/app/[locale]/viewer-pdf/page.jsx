"use client";

import React from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Suspense } from "react";

import { useEffect } from "react";
import LayoutWrapper from "../components/layout-wrapper";

// Misalkan file ini adalah pages/[locale]/viewer-pdf/[slug]/page.js

function PdfPage() {
  const searchParams = useSearchParams();

  const pdf = searchParams.get("pdf");

  return (
    <div style={{ marginTop: "10px", marginBottom: "10px" }}>
      <iframe
        src={"/assets/pdf/" + pdf}
        width="100%"
        style={{ minHeight: "100vh" }}
      ></iframe>
    </div>
  );
}

export default function App() {
  useEffect(() => {
    if (window.location.hostname === "www.cepat-sehat.com") {
      window.location.replace("https://www.cepatsehat.com");
    }
  }, []);

  return (
    <>
      <LayoutWrapper>
        <Suspense>
          <PdfPage />
        </Suspense>
      </LayoutWrapper>
    </>
  );
}
