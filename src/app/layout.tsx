import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
import { Providers } from "../../lib/providers";
import MyScript from "./components/script";

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
      <Head>
        <title>Cepat Sehat</title>
      </Head>
      {/* <!-- swiper --> */}

      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
      <MyScript />
    </html>
  );
}
