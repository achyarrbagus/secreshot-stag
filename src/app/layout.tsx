import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import MyHead from "../app/components/Head";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css";

const inter = Inter({ subsets: ["latin"] });
import { Providers } from "../../lib/providers";

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.svg",
  },
  title: "Cepat Sehat",
  description:
    "We deliver personalized and compassionate healthcare to your home through our experienced professionals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>Cepat Sehat</title>
      {/* <!-- swiper --> */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
      />

      {/* <!-- icons --> */}
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
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossOrigin="anonymous"
      />

      {/* <!-- favicon --> */}
      <link rel="icon" type="image/x-icon" href="assets/img/favicon.svg" />

      {/* <!-- fontello --> */}
      <link rel="stylesheet" href="assets/fontello/css/csehat.css" />

      {/* <!-- custom --> */}
      <link rel="stylesheet" href="assets/css/style.css" />
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
