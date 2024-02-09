"use client";
import React from "react";
import { useRouter } from "next/router";
import { Document, Page } from "react-pdf";

function Index() {
  const router = useRouter();
  const [pdfFile, setPdfFile] = React.useState<any>(null);
  const [innerHeight, setInnerHeight] = React.useState(600);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const { pdf } = router.query;
    setPdfFile(pdf);

    // Fungsi untuk mengupdate innerHeight
    const handleResize = () => {
      setInnerHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [router.query]);

  // Assuming this code is within a functional component
  return (
    <div style={{ marginTop: "10px", marginBottom: "10px" }}>
      <iframe
        src={"/assets/pdf/" + pdfFile}
        width="100%"
        style={{ minHeight: "100vh" }}
      ></iframe>
    </div>
  );
}

export default Index;
