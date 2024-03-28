import React from "react";
import Script from "next/script";

const MyScript = () => {
  return (
    <>
      <Script type="module" src="/src/main.tsx" />
      <Script src="assets/bootstrap/js/main.js" />
      <Script src="assets/bootstrap/js/bootstrap.bundle.min.js" />
      <Script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        crossOrigin="anonymous"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
      />
      <Script src="https://cdn.jsdelivr.net/npm/bs5-lightbox@1.8.3/dist/index.bundle.min.js" />
    </>
  );
};
export default MyScript;
