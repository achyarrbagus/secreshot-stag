"use client";
import Head from "next/head";

function MyHead() {
  return (
    <>
      <head>
        <title>Secretome</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/7.2.96/css/materialdesignicons.min.css"
          integrity="sha512-LX0YV/MWBEn2dwXCYgQHrpa9HJkwB+S+bnBpifSOTO1No27TqNMKYoAn6ff2FBh03THAzAiiCwQ+aPX+/Qt/Ow=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        <link rel="icon" type="img/x-icon" href="/assets/img/favicon.svg" />

        <link rel="stylesheet" href="/assets/fontello/css/csehat.css" />

        <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />

        <link rel="stylesheet" href="/assets/bootstrap/css/bootstrap.min.css" />

        <link rel="stylesheet" href="/assets/css/style.css"></link>
      </head>
      {/* Konten aplikasi Anda */}
    </>
  );
}

export default MyHead;
