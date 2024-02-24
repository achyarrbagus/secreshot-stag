import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
import { Providers } from "../../lib/providers";
import LayoutWrapper from "../app/components/layout-wrapper";

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.svg',
  },
  title: "Cepat Sehat",
  description: "We deliver personalized and compassionate healthcare to your home through our experienced professionals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <Head>
      <head></head>
    </Head>
      <body className={inter.className}>
        <Providers>
          <LayoutWrapper>{children}</LayoutWrapper>
        </Providers>
      </body>
    </html>
  );
}
