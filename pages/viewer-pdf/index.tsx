"use client";
import React from "react";
import { useRouter } from "next/router";
import { Document, Page } from "react-pdf";

function Index() {
  const router = useRouter();
  const [pdfFile, setPdfFile] = React.useState<any>(null);

  React.useEffect(() => {
    const { pdf } = router.query;

    setPdfFile(pdf);
  }, [router.query]);

  return (
    <div style={{ marginTop: "10px", marginBottom: "10px" }}>
      <embed
        src={"/assets/pdf/" + pdfFile}
        width="100%"
        style={{ minHeight: "100vh" }}
      />
    </div>
  );
}

export default Index;
