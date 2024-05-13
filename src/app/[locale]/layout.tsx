import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { Providers } from "../../../lib/providers";
import Head from "next/head";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.svg",
  },
  title: "Cepat Sehat",
  description:
    "We deliver personalized and compassionate healthcare to your home through our experienced professionals",
};

//function to get the translations
async function getMessages(locale: string) {
  try {
    return (await import(`../../../locales/${locale}/common.json`)).default;
  } catch (error) {
    notFound();
  }
}

//function to generate the routes for all the locales
export async function generateStaticParams() {
  const locales = ["en", "id"];
  const params = [];

  locales.forEach((locale) => {
    // Untuk setiap locale, tambahkan objek dengan properti id dan locale
    params.push({ id: "your-id", locale }); // Ganti "your-id" dengan nilai id yang sesuai
  });

  return params;
}

export default async function RootLayout({
  children,
  params: { locale },
}: Props) {
  const messages = await getMessages(locale);

  return (
    <html lang="en">
      <head>
        <title>Cepat Sehat</title>
      </head>
      <body className="bg-gray-100">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
