import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import MyHead from "../app/components/Head";
import "bootstrap/dist/css/bootstrap.min.css";

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
      <Head>
        <title></title>
      </Head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
