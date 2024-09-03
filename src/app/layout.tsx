import { ReactNode } from "react";
import type { Metadata } from "next";
import { Providers } from "../../lib/providers";
import React from "react";

type Props = {
  children: ReactNode;
};
export const metadata: Metadata = {
  icons: {
    icon: "/favicon.svg",
  },
  title: "Cepat Sehat",
  description:
    "We deliver personalized and compassionate healthcare to your home through our experienced professionals",
};

export default function RootLayout({ children }: Props) {
  return <Providers>{children}</Providers>;
}
