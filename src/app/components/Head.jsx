"use clienta"
import Head from "next/head";

function MyHead() {
  return (
    <div>
      <head>
        {/* favicon */}
        <link rel="icon" type="image/x-icon" href="assets/img/favicon.svg" />

        {/* fontello */}
        <link rel="stylesheet" href="assets/fontello/css/csehat.css" />

        {/* swiper */}
        <link rel="stylesheet" href="assets/css/swiper-bundle.min.css" />

        {/* bootstrap */}
        <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />

        {/* custom */}
        <link rel="stylesheet" href="assets/css/style.css" />
      </head>
      {/* Konten aplikasi Anda */}
    </div>
  );
}

export default MyHead;
