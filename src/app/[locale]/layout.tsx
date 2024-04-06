import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

//function to get the translations
async function getMessages(locale: string) {
  try {
    return (await import(`../../../locales/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

//function to generate the routes for all the locales
export async function generateStaticParams() {
  return ["en", "fr"].map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: Props) {
  const messages = await getMessages(locale);

  return (
    <html lang="en">
      <body className="bg-gray-100">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="p-5">{children}</div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
